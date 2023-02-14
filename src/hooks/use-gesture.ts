import React, { useEffect, useRef, useState } from 'react';

interface IGesture {
  /** 触发手势hook容器 */
  containerRef: React.RefObject<HTMLElement>;
  /** 下滑手势 */
  onDown?: () => void;
  onUp?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
}
/** 阈值 倾斜值高于此值 或 滑动小于此值 均视为无效手势 */
const THRESHOLD = 5;
const GRADIENT = 50;
/** 一次手势间隔大于此值视为无效 */
const TIME = 350;
export function useGesture(props: IGesture) {
  /** 拖拽标识 */
  let [isDrag, setIsDrag] = useState(false);
  /** 手指按下起始点坐标 */
  const startPoint = useRef({ x: 0, y: 0 });
  /** 手指抬起时坐标 */
  const endPoint = useRef({ x: 0, y: 0 });
  const startTime = useRef(0);

  const onTouchStart = (e: TouchEvent) => {
    startTime.current = new Date().getTime();
    // 多点触控直接返回
    if (e.touches.length !== 1) return;
    setIsDrag(true);
    startPoint.current = { x: e.touches[0].pageX, y: e.touches[0].pageY };
  };

  /**
   * 一次滑动只触发一次手势，固手势判定应该放在touchEnd事件中
   */
  const onTouchEnd = (e: TouchEvent) => {
    if (!isDrag) return;
    // 间隔过长视为无效手势
    if (new Date().getTime() - startTime.current > TIME) return;

    endPoint.current = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY };
    const offsetX = endPoint.current.x - startPoint.current.x;
    const offsetY = endPoint.current.y - startPoint.current.y;
    // 当两个方向的偏移都大于阈值, 则我们认为本次滑动无效。
    if (Math.abs(offsetX) > GRADIENT && Math.abs(offsetY) > GRADIENT) {
      return;
    }
    // 横向滑动
    if (Math.abs(offsetX) > Math.abs(offsetY) && Math.abs(offsetX) > THRESHOLD) {
      offsetX > 0 ? props.onRight && props.onRight() : props.onLeft && props.onLeft();
    } else if (Math.abs(offsetX) < Math.abs(offsetY) && Math.abs(offsetY) > THRESHOLD) {
      // 纵向滑动
      offsetY > 0 ? props.onDown && props.onDown() : props.onUp && props.onUp();
    }
    setIsDrag(false);
    startPoint.current = { x: 0, y: 0 };
    endPoint.current = { x: 0, y: 0 };
    startTime.current = 0;
  };

  useEffect(() => {
    if (props.containerRef && props.containerRef.current) {
      props.containerRef.current.addEventListener('touchstart', onTouchStart);
    }
    return () => {
      if (props.containerRef && props.containerRef.current) {
        props.containerRef.current.removeEventListener('touchstart', onTouchStart);
      }
    };
  }, []);

  useEffect(() => {
    if (!isDrag) return;
    document.addEventListener('touchend', onTouchEnd);
    return () => {
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDrag]);
}
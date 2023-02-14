// React
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// Style
import * as styled from "./style.st";
// Utils
import { isMobile } from "&/utils/is";
import { useGesture } from "&/hooks/use-gesture";
// Components
import Loading from "../loading";
// Interface
export interface IimgItem {
  path: string;
  jumpType?: string;
  jumpUrl?: string;
}
export interface IBannerProps {
  imgList: IimgItem[];
  interval?: number;
  autoplay?: boolean;
  loop?: boolean;
  hoverStop?: boolean;
}

const Banner: React.FC<IBannerProps> = ({
  imgList,
  interval = 3,
  autoplay = true,
  loop = true,
  hoverStop = true,
}) => {
  // State
  const [bannerIndex, setBannerIndex] = useState<number>(0);
  const [loadedImg, setLoadedImg] = useState<number>(0);
  // Ref
  const timerRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // 所有图片是否加载完成
  const hasAllImgLoad = useMemo(
    () => loadedImg === imgList.length,
    [imgList, loadedImg]
  );
  // Function
  // 小点的点击事件
  const handleDotClick = (index: number) => {
    if (index === bannerIndex) return;
    setBannerIndex(index);
  };
  // banner点击事件
  const handleBannerClick = useCallback((item: IimgItem) => {
    const { jumpType = "inner", jumpUrl } = item;
    if (!!!jumpUrl) return;
    if (jumpType === "inner") {
      window.location.href = jumpUrl;
    } else {
      window.open(jumpUrl);
    }
  }, []);
  // banner轮训定时器
  const setBannerTimer = () => {
    timerRef.current = window.setTimeout(() => {
      if (!imgList.length) return;
      if (bannerIndex === imgList.length - 1) {
        // 开启循环则切换到第一张，没开启则清除定时器
        if (loop) {
          setBannerIndex(0);
        } else {
          clearBannerTimerRef();
        }
        return;
      }
      setBannerIndex(bannerIndex + 1);
    }, interval * 1000);
  };
  // banner定时器清除
  const clearBannerTimerRef = () => {
    window.clearTimeout(timerRef.current);
  };
  // 鼠标移入banner
  const handleMouseEnterBanner = () => {
    // 不是移动端，且开启hoverstop且开启了自动轮播的才执行
    !isMobile() && hoverStop && autoplay && clearBannerTimerRef();
  };
  // 鼠标移出banner
  const handleMouseLeaveBanner = () => {
    if (imgList.length === 1) return;
    // 不是移动端，且开启hoverstop且开启了自动轮播的才执行
    !isMobile() && hoverStop && autoplay && setBannerTimer();
  };
  // 移动端滑动事件
  const handleTouchEvent = (slidePosition: "left" | "right") => {
    if (imgList.length === 1) return;
    // 往左滑
    if (slidePosition === "left") {
      // 如果是最后一张
      if (bannerIndex === imgList.length - 1) {
        // 开启循环才设置跳转到第一张，不然不动
        if (loop) {
          setBannerIndex(0);
        }
        return;
      } else {
        // 正常情况，切下一张
        setBannerIndex(bannerIndex + 1);
      }
    } else {
      // 往右滑，如果是第一张
      if (bannerIndex === 0) {
        // 开启循环才跳转到最后一张，不然不动
        if (loop) {
          setBannerIndex(imgList.length - 1);
        }
        return;
      } else {
        // 正常情况，切上一张
        return setBannerIndex(bannerIndex - 1);
      }
    }
  };
  // 图片的加载完成事件
  const handleSingleImgLoaded = () => {
    setLoadedImg(loadedImg + 1);
  };
  // Effect
  useEffect(() => {
    if (imgList.length === 1) {
      setBannerIndex(0);
      return;
    }
    // 开启定时器轮循条件：图片超过1张 && 开启自动切换
    if (autoplay) {
      hasAllImgLoad && setBannerTimer();
      return () => {
        hasAllImgLoad && clearBannerTimerRef();
      };
    }
  }, [bannerIndex, imgList, loadedImg]);
  useGesture({
    containerRef,
    onLeft: () => handleTouchEvent("left"),
    onRight: () => handleTouchEvent("right"),
  });
  return (
    <styled.STRoot>
      <styled.STBanner
        style={{
          transform: `translateX(${-bannerIndex * 100}vw)`,
          visibility: hasAllImgLoad ? "visible" : "hidden",
          height: hasAllImgLoad ? "inherit" : 0,
        }}
        onMouseEnter={handleMouseEnterBanner}
        onMouseLeave={handleMouseLeaveBanner}
        ref={containerRef}
      >
        {imgList.length > 0 &&
          imgList.map((item, index) => {
            return (
              <styled.STBannerItem
                index={index}
                key={index}
                src={item.path}
                onClick={() => handleBannerClick(item)}
                onLoad={handleSingleImgLoaded}
              />
            );
          })}
      </styled.STBanner>
      {hasAllImgLoad && (
        <styled.STDotContainer>
          {imgList.length > 1 &&
            imgList.map((_, index) => (
              <styled.STDot
                isActive={index === bannerIndex}
                onClick={() => handleDotClick(index)}
                key={index}
              ></styled.STDot>
            ))}
        </styled.STDotContainer>
      )}
      {!hasAllImgLoad && (
        <styled.STFlexContainer>
          <Loading />
        </styled.STFlexContainer>
      )}
    </styled.STRoot>
  );
};
/**
 * @description 轮播图组件，目前是按照项目的要求适配了pc和移动端，pc端高度为300px，移动端则是115px
 * @param {IBannerProps} props
 * @param {IimgItem[]} props.imgList Banner图数组，Path为图片路径，JumpUrl为跳转路径，JumpType为跳转的类型，新页打开还是当前页。
 * @param {boolean} [props.autoplay] 自动轮播，默认值为true
 * @param {number} [props.interval] Banner图切换间隙。默认值为3秒，这个值配合设置那边，所以会*1000转为毫秒
 * @param {boolean} [props.loop] 是否开启循环，如果是false走到最后一张会停下来，在用户手动点击其他小点后，定时器又会开启，前提是开启自动轮播，默认值为true
 * @param {boolean} [props.hoverStop] 鼠标放在Banner上是否停止轮播，移动端没有这个功能，传了也没用。同时不开启自动轮训功能，设置此值也没有用，默认值为true，
 */
export default React.memo(Banner);

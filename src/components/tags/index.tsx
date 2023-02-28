import React, { useState, useRef, useEffect } from "react";
import * as styled from "./style.st";
import Tooltip from "../tooltip";
import More from "./icon/more";
interface ITagItem {
  id: any;
  text: string | JSX.Element;
  extra?: string;
}
export interface ITagsProps {
  fold?: number;
  defaultActiveKey?: number;
  tagList: ITagItem[];
  onChange?: (item: ITagItem, index: number) => void;
  zIndex?: number | string;
}

const Tags: React.FC<ITagsProps> = ({
  fold = 999,
  defaultActiveKey = 0,
  tagList,
  onChange,
  zIndex = 1,
}) => {
  const [activeTag, setActiveTag] = useState<number>(defaultActiveKey);
  const [showList, setShowList] = useState<boolean>(false);
  const moreRef = useRef<HTMLSpanElement>(null);
  // 点击tag
  const handleChangeTag = (index: number) => (e?: React.MouseEvent<HTMLSpanElement>) => {
    if (index === activeTag) return;
    setShowList(false);
    setActiveTag(index);
    onChange?.(tagList[index], index);
  };
  // 点击更多icon
  const handleFoldIconClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const elementRect = (e.target as HTMLSpanElement).getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;
    const distanceFromBottom = pageHeight - scrollY - elementRect.top - elementRect.height;
    if (distanceFromBottom < (tagList.length - fold) * 30) {
      console.log("need display upper");
    }
    setShowList(!showList);
  };
  // 点击其他地方关闭
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!moreRef.current?.contains(e.target as Node)) {
        setShowList(false);
      }
    };
    // 可折叠的时候才绑事件
    if (fold < tagList.length) {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [tagList]);
  return (
    <styled.STTagContainer>
      {tagList.map((item, index) => {
        if (index < fold) {
          return (
            <styled.STTag
              active={index === activeTag}
              onClick={handleChangeTag(index)}
              key={item.id}
            >
              <Tooltip>
                <styled.STName>{item.text}</styled.STName>
              </Tooltip>
              {item.extra && <styled.STExtra>{item.extra}</styled.STExtra>}
            </styled.STTag>
          );
        } else if (index === fold) {
          return (
            <styled.STTag
              active={activeTag >= fold}
              onClick={handleFoldIconClick}
              ref={moreRef}
            >
              <More />
              {showList && (
                <styled.STFoldList style={{ zIndex }}>
                  {tagList.slice(fold, tagList.length).map((item, subIndex) => (
                    <Tooltip>
                      <styled.STFoldListItem
                        onClick={handleChangeTag(index + subIndex)}
                        active={activeTag === index + subIndex}
                        key={item.id}
                      >
                        {`${item.text} ${item.extra ?? ""}`}
                      </styled.STFoldListItem>
                    </Tooltip>
                  ))}
                </styled.STFoldList>
              )}
            </styled.STTag>
          );
        } else {
          return null;
        }
      })}
    </styled.STTagContainer>
  );
};
/**
 * @param {ITagsProps} props
 * @param {number} [props.fold] 可选，超过多少开始折叠，默认不折叠
 * @param {number} [props.defaultActiveKey] 可选，默认激活的tag，默认第一个
 * @param {{ [key: string]: any, id: any }[]} props.tagList 必传，数据源，每个item需要id来作为唯一标识，如果你需要额外展示内容，请在数组内传入extra。
 * @param {string} props.target 必传，对象中的哪个key，用于展示
 * @param {(index: number) => void} [props.onChange] 必传，切换tag回调
 * @param {number | string} [zIndex] 可选，超过fold之后会出现折叠，折叠下拉的弹层的z-index，默认为1
 */
export default React.memo(Tags);

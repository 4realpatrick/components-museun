import React from "react";
const SvgComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    preserveAspectRatio="xMidYMid"
    color={props.color}
  >
    <rect
      className="one"
      x="6"
      rx="1"
      ry="1"
      width="2"
      height="3.5"
      fill="currentColor"
    ></rect>
    <rect
      className="two"
      x="6"
      rx="1"
      ry="1"
      width="2"
      height="3.5"
      fill="currentColor"
      transform="rotate(45 7 7)"
    ></rect>
    <rect
      className="three"
      x="6"
      rx="1"
      ry="1"
      width="2"
      height="3.5"
      fill="currentColor"
      transform="rotate(90 7 7)"
    ></rect>
    <rect
      className="four"
      x="6"
      rx="1"
      ry="1"
      width="2"
      height="3.5"
      fill="currentColor"
      transform="rotate(135 7 7)"
    ></rect>
    <rect
      className="five"
      x="6"
      rx="1"
      ry="1"
      width="2"
      height="3.5"
      fill="currentColor"
      transform="rotate(180 7 7)"
    ></rect>
    <rect
      className="six"
      x="6"
      rx="1"
      ry="1"
      width="2"
      height="3.5"
      fill="currentColor"
      transform="rotate(225 7 7)"
    ></rect>
    <rect
      className="seven"
      x="6"
      rx="1"
      ry="1"
      width="2"
      height="3.5"
      fill="currentColor"
      transform="rotate(270 7 7)"
    ></rect>
    <rect
      className="eight"
      x="6"
      rx="1"
      ry="1"
      width="2"
      height="3.5"
      fill="currentColor"
      transform="rotate(315 7 7)"
    ></rect>
  </svg>
);
export default SvgComponent;

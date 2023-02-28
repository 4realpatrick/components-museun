import React from "react";
const More = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>icon/syst/more</title>
      <g
        id="icon/syst/more"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="矩形"
          fillRule="nonzero"
          x="0"
          y="0"
          width="18"
          height="18"
        ></rect>
        <g
          id="tag_more"
          transform="translate(2.000000, 7.000000)"
          fill={props.color || "#83898F"}
        >
          <path
            d="M2,0.5 C2.82842712,0.5 3.5,1.17157288 3.5,2 C3.5,2.82842712 2.82842712,3.5 2,3.5 C1.17157288,3.5 0.5,2.82842712 0.5,2 C0.5,1.17157288 1.17157288,0.5 2,0.5 Z M7,0.5 C7.82842712,0.5 8.5,1.17157288 8.5,2 C8.5,2.82842712 7.82842712,3.5 7,3.5 C6.17157288,3.5 5.5,2.82842712 5.5,2 C5.5,1.17157288 6.17157288,0.5 7,0.5 Z M12,0.5 C12.8284271,0.5 13.5,1.17157288 13.5,2 C13.5,2.82842712 12.8284271,3.5 12,3.5 C11.1715729,3.5 10.5,2.82842712 10.5,2 C10.5,1.17157288 11.1715729,0.5 12,0.5 Z"
            id="合并形状"
          ></path>
        </g>
      </g>
    </svg>
  );
};
export default More;

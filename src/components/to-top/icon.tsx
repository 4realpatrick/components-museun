import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title></title>
    <g fill="none" fillRule="evenodd">
      <g>
        <circle fill="rgba(0, 0, 0, 0.2)" cx={20} cy={20} r={20} />
        <path
          d="M21.2 19.83v7.97a1.2 1.2 0 1 1-2.4 0v-7.97l-2.679 2.79a1.207 1.207 0 0 1-1.756 0 1.334 1.334 0 0 1 0-1.83l4.714-4.91c.243-.259.588-.397.942-.38.34-.005.666.133.9.38l4.715 4.91a1.334 1.334 0 0 1 0 1.83 1.207 1.207 0 0 1-1.757 0L21.2 19.83ZM14 11h12c1 0 1.5.5 1.5 1.5S27 14 26 14H14c-1 0-1.5-.5-1.5-1.5S13 11 14 11Z"
          fill="#FFF"
        />
      </g>
    </g>
  </svg>
)

export default SvgComponent

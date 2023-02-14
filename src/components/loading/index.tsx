import * as React from "react";
import * as styled from "./styled.st";
function Loading(props: React.SVGProps<SVGSVGElement>) {
  const { color, width = 50, height = 50, ...rest } = props;
  return (
    <styled.svg
      width={width}
      height={height}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <styled.circle fill="none" cx={33} cy={33} r={30} />
    </styled.svg>
  );
}

export default Loading;

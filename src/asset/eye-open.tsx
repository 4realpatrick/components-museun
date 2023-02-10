import * as React from "react";
// 密码处使用，眼睛睁开icon
function Eyeopen(props: React.SVGProps<SVGSVGElement>) {
  const num = Math.round(Math.random() * 100).toString();
  const { color, width = 14, height = 14, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 14 14"
      {...rest}
    >
      <defs>
        <clipPath id={`prefix__eyeOpen_a_${num}`}>
          <rect width={14} height={14} rx={0} />
        </clipPath>
      </defs>
      <g clipPath={`url(#prefix__eyeOpen_a_${num})`}>
        <path
          d="M1.463 6.645Q3.973 9.917 7 9.917q3.026 0 5.537-3.272L13 7l-.463.355Q10.027 4.083 7 4.083q-3.026 0-5.537 3.272L1 7l.463-.355zm-.926.71q-.029-.038-.051-.08-.023-.042-.038-.087-.016-.046-.024-.093Q.417 7.048.417 7t.007-.095q.008-.047.024-.093.015-.045.038-.087.022-.042.051-.08Q3.4 2.917 7 2.917t6.463 3.728q.029.038.051.08.023.042.038.087.016.046.024.093.007.047.007.095t-.008.095q-.007.047-.023.093-.015.045-.038.087-.022.042-.051.08Q10.6 11.083 7 11.083T.537 7.355z"
          fill="#FFF"
        />
        <path
          d="M6.125 7q0 .875.875.875.362 0 .619-.256.256-.256.256-.619 0-.875-.875-.875T6.125 7zM4.958 7q0-.846.598-1.444T7 4.958q2.042 0 2.042 2.042 0 .846-.598 1.444T7 9.042q-.846 0-1.444-.598T4.958 7z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
}

export default Eyeopen;

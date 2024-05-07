import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} stroke={props.color ?? "#667085"} strokeWidth={1.5} />
      <Path
        d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.502 2.502 0 01-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.502 2.502 0 012.503 2.5z"
        stroke={props.color ?? "#667085"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent

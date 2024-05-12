import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Flash(props) {
  return (
    <Svg
      width={40}
      height={42}
      viewBox="0 0 37 38"
      fill={props.fill ?? "transparent"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.367 20.483l12.675-16.9L18.5 15.917h10.333a1 1 0 01.8 1.6l-12.675 16.9L18.5 22.083H8.167a1 1 0 01-.8-1.6z"
        stroke={props?.color ?? "#fff"}
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Flash

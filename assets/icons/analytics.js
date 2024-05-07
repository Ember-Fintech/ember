import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Analytics(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7 17v-4M12 17V7M17 17v-6"
        stroke={props.color ?? "#667085"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.717 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.717 2.5 16.479 2.5 12z"
        stroke={props.color ?? "#667085"}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Analytics

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Wallet(props) {
  return (
    <Svg
      width={22}
      height={18}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 9c0-3.537 0-5.306 1.053-6.487.168-.189.354-.364.554-.522C3.862 1 5.741 1 9.5 1h3c3.759 0 5.638 0 6.892.99.201.16.387.334.555.523C21 3.693 21 5.463 21 9s0 5.306-1.053 6.487a4.376 4.376 0 01-.555.522C18.138 17 16.26 17 12.5 17h-3c-3.759 0-5.638 0-6.893-.99a4.377 4.377 0 01-.554-.523C1 14.307 1 12.537 1 9z"
        stroke={props.color ?? "#667085"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 13h1.5M13.5 13H17"
        stroke={props.color ?? "#667085"}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M1 6h20" stroke="#667085" strokeWidth={1.5} strokeLinejoin="round" />
    </Svg>
  )
}

export default Wallet

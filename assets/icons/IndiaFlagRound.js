import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function IndiaFlagRound(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_2054_383)">
        <Path
          d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
          fill="#F0F0F0"
        />
        <Path d="M10-.001A10 10 0 00.992 5.651h18.016A10 10 0 0010 0z" fill="#FF9811" />
        <Path d="M10 20a10 10 0 009.008-5.652H.992A10 10 0 0010 20z" fill="#6DA544" />
        <Path d="M10 13.477a3.478 3.478 0 100-6.956 3.478 3.478 0 000 6.956z" fill="#0052B4" />
        <Path d="M10 12.174a2.174 2.174 0 100-4.348 2.174 2.174 0 000 4.348z" fill="#F0F0F0" />
        <Path
          d="M10 7.317l.671 1.521 1.653-.18L11.342 10l.982 1.341-1.653-.18-.67 1.521-.671-1.52-1.653.18L8.66 10l-.982-1.341 1.653.18.67-1.522z"
          fill="#0052B4"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2054_383">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default IndiaFlagRound

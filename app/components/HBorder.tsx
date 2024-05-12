import React from "react"
import { View } from "react-native"
const HBorder = ({
  mt,
  mb,
  mr,
  ml,
  color,
}: {
  mt?: number
  mb?: number
  mr?: number
  ml?: number
  color?: string
}) => {
  return (
    <View
      style={{
        borderColor: color || "#D0D5DD",
        borderBottomWidth: 1,
        marginRight: mr,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
      }}
    />
  )
}

export default HBorder

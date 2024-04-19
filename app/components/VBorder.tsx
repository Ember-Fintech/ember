import React from "react"
import { View } from "react-native"
const VBorder = ({
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
        borderLeftWidth: 1,
        marginRight: mr,
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        height: 20,
      }}
    />
  )
}

export default VBorder

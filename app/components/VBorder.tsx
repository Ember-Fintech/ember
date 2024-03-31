import React from "react"
import { View } from "@gluestack-ui/themed"
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
      bg={"red"}
      flexDirection={"row"}
      borderLeftWidth={1}
      width={1}
      borderColor={color ?? "$border"}
      mr={mr}
      mt={mt}
      ml={ml}
      mb={mb}
    />
  )
}

export default VBorder

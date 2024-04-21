import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { Spacings } from "react-native-ui-lib"
import { useTheme } from "app/hooks/useTheme"

interface IProps {
    title: string;
    onPress: () => void;
}

const SecondaryButton = (props: IProps) => {
  const { colors } = useTheme()
  const { title, onPress } = props

  return (
    <TouchableOpacity
      activeOpacity={.9}
      style={{
        width: "95%",
        backgroundColor: colors.white,
        borderRadius: Spacings.s2,
        marginLeft: "2.5%",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: colors.primaryColor,
          textAlign: "center",
          paddingVertical: 14,
          fontFamily: "Inter-SemiBold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default SecondaryButton

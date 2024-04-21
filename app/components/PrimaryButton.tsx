import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { Spacings } from "react-native-ui-lib"
import { useTheme } from "app/hooks/useTheme"

interface IProps {
    title: string;
    onPress: () => void;
    disabled: boolean;
}

const PrimaryButton = (props: IProps) => {
  const { colors } = useTheme()
  const { title, onPress, disabled } = props

  return (
    <TouchableOpacity
      activeOpacity={.9}
      style={{
        width: "95%",
        backgroundColor: disabled ? colors.disabled : colors.primaryColor,
        borderRadius: Spacings.s2,
        marginLeft: "2.5%",
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          color: disabled ? colors.disabledText : colors.white,
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

export default PrimaryButton

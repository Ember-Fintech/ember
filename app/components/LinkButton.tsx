import { Text, View } from "@gluestack-ui/themed"
import React from "react"
import { TextStyle, TouchableOpacity, ViewStyle } from "react-native"

interface IProps {
  title: string
  showRightArrow: boolean
  type: "border" | "underline" | "default"
  disabled: boolean
  onPress: () => void
  textColor: string
  textStyle: TextStyle
  viewStyle: ViewStyle
}

const LinkButton = (props: IProps): JSX.Element => {
  const {
    title,
    showRightArrow,
    type = "default",
    disabled,
    onPress,
    textColor,
    textStyle,
    viewStyle,
  } = props

  return (
    <TouchableOpacity
      onPress={() => {
        if (disabled) return
        onPress()
      }}
      style={[
        { flexDirection: "row", justifyContent: "flex-start", alignItems: "center", alignSelf: 'flex-start', padding: 2 },
        viewStyle,
        type === 'border' && {
            borderWidth: 1,
            borderColor: textColor
        }
      ]}
    >
      <Text style={
        type === 'underline' && {
            textDecorationLine: 'underline',
        }}>
        <Text color={textColor} style={[{fontFamily: 'Inter-Medium', fontSize: 14}, textStyle]}>
          {title}
        </Text>
        {showRightArrow && (
          <Text
            color={textColor}
            style={[{
              fontFamily: 'Inter-Medium',
              height: 22,
              width: 22,
              fontSize: 14
            }]}
          >
            {' '}&#8250;
          </Text>
        )}
      </Text>
    </TouchableOpacity>
  )
}

export default LinkButton

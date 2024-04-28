import React, { useMemo } from "react"
import { Button as UILibButton, ButtonProps, Colors } from "react-native-ui-lib"
import { ActivityIndicator, ViewStyle } from "react-native"
import Text from "app/components/typography/Text"

type IProps = {
  wrap?: boolean
  loading?: boolean
  size?: "lg" | "sm"
  loaderColor?: string
} & ButtonProps

const Button = (props: IProps) => {
  const {
    loading,
    label,
    size = "lg",
    onPress,
    disabled,
    labelStyle,
    style,
    disabledBackgroundColor,
    wrap,
    loaderColor,
    ...rest
  } = props

  const defaultLabelStyle = useMemo(
    () => ({
      fontSize: size === "lg" ? 16 : 12,
      fontFamily: "Inter-SemiBold",
      lineHeight: size === "lg" ? 24 : 18,
      color: disabled ? "#98A2B3" : Colors.white,
    }),
    [disabled, size],
  )

  const defaultButtonStyle: Partial<ViewStyle> = useMemo(
    () => ({
      backgroundColor: disabled ? disabledBackgroundColor ?? "#F2F4F7" : Colors.primaryColor,
      borderRadius: 10,
      width: wrap ? undefined : "100%",
      height: size === "lg" ? 52 : 38,
    }),
    [disabled, disabledBackgroundColor, wrap, size],
  )

  return (
    <UILibButton
      label={undefined}
      onPress={onPress}
      disabled={disabled}
      style={[defaultButtonStyle, style]}
      disabledBackgroundColor={"#F2F4F7"}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          size={"small"}
          color={loaderColor || (disabled ? "#98A2B3" : Colors.white)}
        />
      ) : (
        <Text.Body style={[defaultLabelStyle, labelStyle]}>{label}</Text.Body>
      )}
    </UILibButton>
  )
}

const Primary = (props: IProps) => {
  return <Button {...props} />
}

const Outlined = (props: IProps) => {
  const { style, labelStyle, disabled, ...rest } = props
  return (
    <Button
      style={[
        {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: !disabled ? Colors.primaryColor : "#D0D5DD",
        },
        style,
      ]}
      labelStyle={[{ color: !disabled ? Colors.primaryColor : "gray" }, labelStyle]}
      loaderColor={Colors.primaryColor}
      {...rest}
    />
  )
}

const Light = (props: IProps) => {
  const { style, labelStyle, disabled, disabledBackgroundColor, ...rest } = props
  return (
    <Button
      style={[
        { backgroundColor: disabled ? disabledBackgroundColor || "#F9FAFB" : "#BAAEDE" },
        style,
      ]}
      labelStyle={[{ color: Colors.primaryColor }, labelStyle]}
      loaderColor={Colors.primaryColor}
      {...rest}
    />
  )
}

const Ghost = (props: IProps) => {
  const { style, labelStyle, disabled, ...rest } = props
  return (
    <Button
      style={[{ backgroundColor: "transparent" }, style]}
      labelStyle={[{ color: !disabled ? Colors.primaryColor : "gray" }, labelStyle]}
      loaderColor={Colors.primaryColor}
      {...rest}
    />
  )
}

Button.Primary = Primary
Button.Outlined = Outlined
Button.Ghost = Ghost
Button.Light = Light
export default Button

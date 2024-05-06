import { TextProps, Text as LibText, TextStyle } from "react-native"
import { useTheme } from "app/hooks/useTheme"
type HeaderSize = "xl" | "lg" | "sm" | "md" | "xs"
type BodySize = "lg" | "sm" | "md"
type Weight = "regular" | "medium" | "semi-bold" | "bold"
interface IText extends TextProps {
  weight?: Weight
  underline?: boolean
  uppercase?: boolean
}

export const HEADER_STYLE_MAP: { [r: HeaderSize]: Partial<TextStyle> } = {
  xl: { fontSize: 48, lineHeight: 60 },
  lg: { fontSize: 36, lineHeight: 44 },
  md: { fontSize: 30, lineHeight: 38 },
  sm: { fontSize: 24, lineHeight: 32 },
  xs: { fontSize: 20, lineHeight: 30 },
}
const BODY_STYLE_MAP: { [r: HeaderSize]: Partial<TextStyle> } = {
  lg: { fontSize: 18, lineHeight: 28 },
  md: { fontSize: 16, lineHeight: 24 },
  sm: { fontSize: 14, lineHeight: 20 },
}

const FONT_WEIGHT_MAP: { [r: Weight]: string } = {
  regular: "Sans-Regular",
  medium: "Sans-Medium",
  "semi-bold": "Sans-SemiBold",
  bold: "Sans-Bold",
}

export const Text = (props: IText) => {
  const { style, color, uppercase, underline, children, weight, ...rest } = props
  const { colors } = useTheme()

  const displayValue = uppercase && typeof children === "string" ? children.toUpperCase() : children

  return (
    <LibText
      {...rest}
      style={[
        {
          color: color || colors.text,
          textDecorationLine: underline ? "underline" : "none",
          flexShrink: 1,
          fontFamily: FONT_WEIGHT_MAP[weight ?? "regular"],
        },
        style,
      ]}
    >
      {displayValue}
    </LibText>
  )
}

const Heading = (props: IText & { size?: HeaderSize }) => {
  const { children, style, size, ...rest } = props
  return (
    <Text {...rest} style={[HEADER_STYLE_MAP[size ?? "lg"], style]}>
      {children}
    </Text>
  )
}

const Body = (props: IText & { size?: BodySize }) => {
  const { children, style, size, ...rest } = props
  return (
    <Text {...rest} style={[BODY_STYLE_MAP[size ?? "md"], style]}>
      {children}
    </Text>
  )
}

const Caption = (props: IText) => {
  const { children, style, ...rest } = props
  return (
    <Text {...rest} style={[{ fontSize: 12, lineHeight: 18 }, style]}>
      {children}
    </Text>
  )
}

Text.Heading = Heading
Text.Body = Body
Text.Caption = Caption

export default Text

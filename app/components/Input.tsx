import React, {
  ForwardedRef,
  forwardRef,
  Fragment,
  ReactNode,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import { StyleSheet, TextInput, TextInputProps, View } from "react-native"
import VBorder from "app/components/VBorder"
import { Text } from "react-native-ui-lib"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import InfoCircle from "../../assets/icons/InfoCircle.js"

interface Props extends TextInputProps {
  ref?: React.RefObject<TextInput>
  leftElement?: ReactNode
  leftIcon?: ReactNode
  rightElement?: ReactNode
  rightIcon?: ReactNode
  isDisabled?: boolean
  errorMessage?: string
  label?: string
  infoMessage?: string
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<TextInput, Props>((props, ref: ForwardedRef<TextInput | undefined>) => {
  const {
    leftElement,
    leftIcon,
    rightIcon,
    rightElement,
    isDisabled,
    errorMessage,
    label,
    infoMessage,
  } = props
  const internalInputRef = useRef<TextInput>()
  const [isFocused, setIsFocused] = useState<boolean>(false)
  useImperativeHandle(ref, () => internalInputRef.current, [internalInputRef])

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const getBorderColor = () => {
    if (isDisabled) return "#D0D5DD"
    if (isFocused) return "#7D5DDB"
    if (errorMessage) return "#D92D20"
    return "#EAECF0"
  }

  const getOuterBorderColor = () => {
    if (isFocused) return "#A393D3"
    if (errorMessage) return "#FECDCA"
    return "transparent"
  }

  const borderColor = useMemo(getBorderColor, [isDisabled, isFocused, errorMessage])
  const outerBorderColor = useMemo(getOuterBorderColor, [isFocused, errorMessage])

  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={{
          padding: 2,
          borderColor: outerBorderColor,
          borderWidth: 1.2,
          borderRadius: 13,
          marginBottom: 5,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            internalInputRef.current?.focus()
          }}
          style={{
            flexDirection: "row",
            backgroundColor: isDisabled ? "#F2F4F7" : "transparent",
            borderWidth: 1.5,
            borderRadius: 10,
            height: 46,
            borderColor: borderColor,
            paddingHorizontal: 5,
            alignItems: "center",
          }}
        >
          {leftElement && (
            <>
              <View style={{ paddingLeft: 10 }}>{leftElement}</View>
              <VBorder ml={10} mt={10} mb={10} />
            </>
          )}
          {leftIcon && <View paddingLeft={10}>{leftIcon}</View>}
          <TextInput
            readOnly={isDisabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              marginHorizontal: 10,
              flexGrow: 1,
              height: "100%",
              fontSize: 16,
            }}
          />
          {rightIcon && <View style={{ paddingRight: 10 }}>{rightIcon}</View>}

          {rightElement && (
            <>
              <VBorder mr={10} mt={10} mb={10} />
              <View style={{ paddingRight: 10 }}>{rightElement}</View>
            </>
          )}
        </TouchableWithoutFeedback>
      </View>

      {infoMessage && (
        <View style={styles.row}>
          <InfoCircle width={14} />
          <Text style={[styles.bottomText]}>{infoMessage}</Text>
        </View>
      )}
      {errorMessage && (
        <View style={styles.row}>
          <InfoCircle width={14} fill={"#D92D20"} />
          <Text style={{ ...styles.bottomText, color: "#D92D20" }}>{errorMessage}</Text>
        </View>
      )}
    </>
  )
})

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 12,
    marginLeft: 4,
  },
})
export default Input

import React, {
  ForwardedRef,
  forwardRef,
  Fragment,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"
import { StyleSheet, TextInput, TextInputProps, View } from "react-native"
import VBorder from "app/components/VBorder"
import { Checkbox, Text } from "react-native-ui-lib"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"
import InfoCircle from "../../assets/icons/InfoCircle.js"
import Animated, { useSharedValue, withTiming } from "react-native-reanimated"
import { FontAwesome6 } from "@expo/vector-icons"

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
  options?: Array<{}>
  selectedItem?: any
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
    options,
    selectedItem,
    ...restProps
  } = props
  const internalInputRef = useRef<TextInput>()
  const [isFocused, setIsFocused] = useState<boolean>(false)
  useImperativeHandle(ref, () => internalInputRef.current, [internalInputRef])
  const [position, setPosition] = useState({})
  const [showOptions, setShowOptions] = useState(false)
  const opacity = useSharedValue(0)

  useEffect(() => {
    internalInputRef.current?.measure((x, y, width, height, px, py) => {
      setPosition({ x, y, width, height })
    })
  }, [])

  const handleFocus = () => {
    setIsFocused(true)
    setShowOptions(true)
    opacity.value = withTiming(1, { duration: 200 })
  }

  const handleBlur = () => {
    setIsFocused(false)
    setShowOptions(false)
    opacity.value = withTiming(0, { duration: 200 })
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
    <View style={{ position: "relative", zIndex: 1, elevation: 1 }}>
      <View>
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
              ref={internalInputRef}
              readOnly={isDisabled || !!options?.length}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={{
                marginHorizontal: 10,
                flexGrow: 1,
                height: "100%",
                fontSize: 16,
                outline: "none",
              }}
              {...restProps}
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
      </View>
      {showOptions && options ? (
        <Animated.View
          style={{
            marginTop: 4,
            padding: 8,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#EAECF0",
            position: "absolute",
            top: position.x + position.height + 20,
            left: position.y,
            width: position.width + 35,
            backgroundColor: "white",
            zIndex: 9999,
            elevation: 9999,
            opacity: opacity,
          }}
        >
          {options?.map((singleOption) => {
            const isSelected = singleOption?.title === selectedItem?.title
            return (
              <View style={styles.optionContainer(isSelected)}>
                <View style={styles.titleContainer}>
                  <Checkbox
                    value={true}
                    onValueChange={() => {
                      console.log("selected")
                      setShowOptions(false)
                    }}
                    color="#533D95"
                    iconColor="#fff"
                  />
                  <Text style={styles.title}>{singleOption?.title}</Text>
                </View>

                {isSelected && <FontAwesome6 name="check" color={"#533D95"} size={12} />}
              </View>
            )
          })}
        </Animated.View>
      ) : null}
    </View>
  )
})

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    marginBottom: 5,
    color: "black",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomText: {
    fontSize: 12,
    marginLeft: 4,
  },
  optionContainer: (isSelected: boolean) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: isSelected ? "isSelected" : "white",
  }),
  title: {
    marginLeft: 8,
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: "#101828",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
})
export default Input

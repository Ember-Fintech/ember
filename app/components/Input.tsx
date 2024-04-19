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
import {
  InputField,
  Input as GSInput,
  InputSlot,
  VStack,
  Text,
  HStack,
  Icon,
  InfoIcon,
} from "@gluestack-ui/themed"
import { TextInput, TextInputProps, View } from "react-native"
import VBorder from "app/components/VBorder"
import { Spacings, TextField } from "react-native-ui-lib"
import { err } from "react-native-svg/lib/typescript/xml"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

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

  const borderColor = useMemo(getBorderColor, [isDisabled, isFocused, errorMessage])

  return (
    <>
      {label && (
        <Text size={"xs"} bold pb={5}>
          {label}
        </Text>
      )}
      <TouchableWithoutFeedback
        onPress={() => {
          internalInputRef.current?.focus()
        }}
        style={{
          flexDirection: "row",
          backgroundColor: isDisabled ? "#F2F4F7" : "transparent",
          borderWidth: 1.5,
          borderRadius: 10,
          height: 40,
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
            marginHorizontal: 5,
            flexGrow: 1,
            height: "100%",
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
      {infoMessage && (
        <HStack pt={5} alignItems={"center"}>
          <Icon mr={5} as={InfoIcon} color={"$textLight700"} size={"xs"} />
          <Text
            sx={{
              _dark: {
                color: "$textLight700",
              },
              _light: {
                color: "$error600",
              },
            }}
            size={"xs"}
          >
            {infoMessage}
          </Text>
        </HStack>
      )}
      {errorMessage && (
        <HStack pt={5} alignItems={"center"}>
          <Icon mr={5} as={InfoIcon} color={"$error600"} size={"xs"} />
          <Text color={"$error600"} size={"xs"}>
            {errorMessage}
          </Text>
        </HStack>
      )}
    </>
  )

  return (
    <VStack>
      <GSInput
        borderRadius={10}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isDisabled={isDisabled}
        isInvalid={!!errorMessage}
      >
        <InputField place {...(props as TextInputProps)} ref={ref} />
      </GSInput>
    </VStack>
  )
})
export default Input

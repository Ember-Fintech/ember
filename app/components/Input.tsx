import React, { forwardRef, Fragment, ReactNode, useState } from "react"
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
const Input = forwardRef<TextInput, Props>((props, ref) => {
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
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const Wrapper = isFocused ? View : Fragment

  return (
    <VStack>
      {label && (
        <Text size={"xs"} bold pb={5}>
          {label}
        </Text>
      )}
      <GSInput
        borderRadius={10}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isDisabled={isDisabled}
        isInvalid={!!errorMessage}
      >
        {leftElement && (
          <>
            <InputSlot paddingLeft={10}>{leftElement}</InputSlot>
            <VBorder ml={10} mt={10} mb={10} />
          </>
        )}
        {leftIcon && <InputSlot paddingLeft={10}>{leftIcon}</InputSlot>}

        <InputField {...(props as TextInputProps)} ref={ref} />
        {rightIcon && <InputSlot paddingRight={10}>{rightIcon}</InputSlot>}

        {rightElement && (
          <>
            <VBorder mr={10} mt={10} mb={10} />
            <InputSlot paddingRight={10}>{rightElement}</InputSlot>
          </>
        )}
      </GSInput>

      {infoMessage && (
        <HStack pt={5} alignItems={"center"}>
          <Icon mr={5} as={InfoIcon} color={"$textLight700"} size={"xs"} />
          <Text color={"$textLight700"} size={"xs"}>
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
    </VStack>
  )
})
export default Input

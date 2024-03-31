import React from "react"
import { InputField, Input, InputSlot, Text } from "@gluestack-ui/themed"
import { TextInputProps } from "react-native"

interface Props extends TextInputProps {}
export const CustomInput = (props: Props) => {
  return (
    <Input>
      <InputSlot>
        <Text>Rad</Text>
      </InputSlot>
      <InputSlot>
        <Text>Rad</Text>
      </InputSlot>
      <InputField {...props} />
      <InputSlot>
        <Text>Rad</Text>
      </InputSlot>
    </Input>
  )
}

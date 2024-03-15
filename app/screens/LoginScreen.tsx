import React, { FC } from "react"
import { Text, View } from "react-native"
import { AppStackScreenProps } from "../navigators"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = (_props) => {
  return (
    <View>
      <Text>{"Login screen"}</Text>
    </View>
  )
}

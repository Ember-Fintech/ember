import React from "react"
import { View, Text, Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"

type PhoneInputScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.PhoneInput>
}

export const PhoneInputScreen: React.FC<PhoneInputScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>PhoneInputScreen</Text>
      <Button title="Next" onPress={() => navigation.navigate(AppRoutes.OtpInputScreen)} />
    </View>
  )
}

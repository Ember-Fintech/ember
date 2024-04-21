import React from "react"
import { View, Text, Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"

type OtpInputScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.OtpInputScreen>
}

export const OtpInputScreen: React.FC<OtpInputScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>OtpInputScreen</Text>
      <Button title="Next" onPress={() => navigation.navigate(AppRoutes.OnboardSuccess)} />
    </View>
  )
}

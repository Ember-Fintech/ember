import React from "react"
import { Text, Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"

type WelcomeScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.Welcome>
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <Screen>
      <Text>Welcome Screen</Text>
      <Button title="Next" onPress={() => navigation.navigate(AppRoutes.PhoneInput)} />
    </Screen>
  )
}

import React from "react"
import { View, Text, Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"

type WelcomeScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.Welcome>
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button title="Next" onPress={() => navigation.navigate(AppRoutes.LanguageSelection)} />
    </View>
  )
}

import React from "react"
import { View, Text, Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"

type ChooseLanguageScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.LanguageSelection>
}

export const ChooseLanguageScreen: React.FC<ChooseLanguageScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Language Screen</Text>
      <Button title="Next" onPress={() => navigation.navigate(AppRoutes.PhoneInput)} />
    </View>
  )
}

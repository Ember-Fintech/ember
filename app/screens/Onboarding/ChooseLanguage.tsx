import React from "react"
import { View, Text } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"

type LanguageSelectionProps = {
  navigation: NativeStackScreenProps<OnboardingStackParams, AppRoutes.LanguageSelection>
}

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Language</Text>
      {/* <Button title="Next" onPress={() => navigation.(ScreenNames.LanguageSelection)} /> */}
    </View>
  )
}

export default LanguageSelection

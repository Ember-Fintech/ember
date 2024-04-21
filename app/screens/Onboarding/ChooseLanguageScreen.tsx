import React from "react"
import { Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import { useTheme } from "app/hooks/useTheme"
import { Text } from "react-native-ui-lib"

type ChooseLanguageScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.LanguageSelection>
}

export const ChooseLanguageScreen: React.FC<ChooseLanguageScreenProps> = ({ navigation }) => {
  const { colors } = useTheme()
  return (
    <Screen bgSource={require("../../../assets/background/ripple-top-right.png")}>
      <Text style={{ color: colors.$textDefault }}>Language Screen</Text>
      <Button title="Next" onPress={() => navigation.navigate(AppRoutes.Welcome)} />
    </Screen>
  )
}

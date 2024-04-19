import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import WelcomeScreen from "app/screens/Onboarding/WelcomeScreen"
import LanguageSelection from "app/screens/Onboarding/ChooseLanguage"

export type OnboardingStackParams = {
  [AppRoutes.Welcome]: undefined
  [AppRoutes.LanguageSelection]: undefined
  [AppRoutes.Success]: undefined
}

const Stack = createStackNavigator<OnboardingStackParams>()

const OnboardingStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={AppRoutes.Welcome}>
      <Stack.Screen name={AppRoutes.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={AppRoutes.LanguageSelection} component={LanguageSelection} />
      {/* <Stack.Screen name={AppRoutes.Success} component={SuccessScreen} /> */}
    </Stack.Navigator>
  )
}

export default OnboardingStack

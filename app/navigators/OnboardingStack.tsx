import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { WelcomeScreen } from "app/screens/Onboarding/WelcomeScreen"
import { ChooseLanguageScreen } from "app/screens/Onboarding/ChooseLanguageScreen"
import { PhoneInputScreen } from "app/screens/Onboarding/PhoneInputScreen"
import { OtpInputScreen } from "app/screens/Onboarding/OtpInputScreen"
import { CompanyDetailsScreen } from "app/screens/Onboarding/CompanyDetailsScreen"
import { OnboardSuccessScreen } from "app/screens/Onboarding/OnboardSuccessScreen"

export type OnboardingStackParams = {
  [AppRoutes.Welcome]: undefined
  [AppRoutes.LanguageSelection]: undefined
  [AppRoutes.OnboardSuccess]: undefined
  [AppRoutes.OtpInputScreen]: undefined
  [AppRoutes.PhoneInput]: undefined
  [AppRoutes.CompanyDetails]: undefined
}

const Stack = createStackNavigator<OnboardingStackParams>()

const OnboardingStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={AppRoutes.Welcome}>
      <Stack.Screen name={AppRoutes.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={AppRoutes.LanguageSelection} component={ChooseLanguageScreen} />
      <Stack.Screen name={AppRoutes.PhoneInput} component={PhoneInputScreen} />
      <Stack.Screen name={AppRoutes.OtpInputScreen} component={OtpInputScreen} />
      <Stack.Screen name={AppRoutes.CompanyDetails} component={CompanyDetailsScreen} />
      <Stack.Screen name={AppRoutes.OnboardSuccess} component={OnboardSuccessScreen} />
    </Stack.Navigator>
  )
}

export default OnboardingStack

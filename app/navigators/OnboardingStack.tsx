import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { WelcomeScreen } from "app/screens/Onboarding/WelcomeScreen"
import { ChooseLanguageScreen } from "app/screens/Onboarding/ChooseLanguageScreen"
import { PhoneInputScreen } from "app/screens/Onboarding/PhoneInputScreen"
import { OtpInputScreen } from "app/screens/Onboarding/OtpInputScreen"
import { CompanyDetailsScreen } from "app/screens/Onboarding/CompanyDetailsScreen"
import { OnboardSuccessScreen } from "app/screens/Onboarding/OnboardSuccessScreen"
import { View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

export type OnboardingStackParams = {
  [AppRoutes.Welcome]: undefined
  [AppRoutes.LanguageSelection]: undefined
  [AppRoutes.OnboardSuccess]: undefined
  [AppRoutes.OtpInputScreen]: { phoneNumber: string }
  [AppRoutes.PhoneInput]: undefined
  [AppRoutes.CompanyDetails]: undefined
}

const Stack = createStackNavigator<OnboardingStackParams>()

const OnboardingStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AppRoutes.LanguageSelection}
    >
      <Stack.Screen name={AppRoutes.Welcome} component={WelcomeScreen} />
      <Stack.Screen name={AppRoutes.LanguageSelection} component={ChooseLanguageScreen} />
      <Stack.Screen name={AppRoutes.PhoneInput} component={PhoneInputScreen} />
      <Stack.Screen name={AppRoutes.OtpInputScreen} component={OtpInputScreen} />
      <Stack.Screen name={AppRoutes.CompanyDetails} options={{
          headerShown: true,
          title: 'My home',
          headerStyle: {
            backgroundColor: 'rgba(104, 77, 182, 1)',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center'
          },
          headerRight: (props) => {
            return (<View
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: "#8C79C8",
              borderRadius: 10,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              marginRight: 24
            }}
          >
            <AntDesign name="questioncircleo" size={16} color={'#FFF'} />
          </View>)
          }
        }} component={CompanyDetailsScreen} />
      <Stack.Screen name={AppRoutes.OnboardSuccess} component={OnboardSuccessScreen} />
    </Stack.Navigator>
  )
}

export default OnboardingStack

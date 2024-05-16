import { createStackNavigator } from "@react-navigation/stack"
import CardsDetails from "app/screens/Cards/CardsDetails"
import CardsLock from "app/screens/Cards/CardsLockScreen"
import React from "react"
import { AppRoutes } from "./constants/appRoutes"
import CardsLimit from "app/screens/Cards/CardsLimitScreen"
import { HomePage } from "app/screens/HomePage/HomePage"
import { KycVerification } from "app/screens/HomePage/KycVerification"
import { OnboardSuccessScreen } from "app/screens/Onboarding/OnboardSuccessScreen"

export type CardsStackParams = {
  [AppRoutes.HomePage]: undefined
  [AppRoutes.CardsDetail]: undefined
  [AppRoutes.CardsLock]: undefined
  [AppRoutes.CardsLimit]: undefined
}

const Stack = createStackNavigator<CardsStackParams>()

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={AppRoutes.HomePage}>
      <Stack.Screen name={AppRoutes.HomePage} component={HomePage} />
      <Stack.Screen name={AppRoutes.KYC} component={KycVerification} />
      <Stack.Screen name={AppRoutes.OnboardSuccess} component={OnboardSuccessScreen} />
      <Stack.Screen name={AppRoutes.CardsDetail} component={CardsDetails} />
      <Stack.Screen name={AppRoutes.CardsLock} component={CardsLock} />
      <Stack.Screen name={AppRoutes.CardsLimit} component={CardsLimit} />
    </Stack.Navigator>
  )
}

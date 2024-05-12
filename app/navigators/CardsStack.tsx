import { createStackNavigator } from "@react-navigation/stack"
import CardsDetails from "app/screens/Cards/CardsDetails"
import CardsLock from "app/screens/Cards/CardsLockScreen"
import React from "react"
import { AppRoutes } from "./constants/appRoutes"
import CardsLimit from "app/screens/Cards/CardsLimitScreen"

export type CardsStackParams = {
  [AppRoutes.CardsDetail]: undefined
  [AppRoutes.CardsLock]: undefined
  [AppRoutes.CardsLimit]: undefined
}

const Stack = createStackNavigator<CardsStackParams>()

const CardsStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={AppRoutes.CardsDetail}
    >
      <Stack.Screen name={AppRoutes.CardsDetail} component={CardsDetails} />
      <Stack.Screen name={AppRoutes.CardsLock} component={CardsLock} />
      <Stack.Screen name={AppRoutes.CardsLimit} component={CardsLimit} />
    </Stack.Navigator>
  )
}

export default CardsStack

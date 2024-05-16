import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { UpiScanner } from "app/screens/ScanAndPay/UpiScanner"
import { PaymentConfig } from "app/screens/ScanAndPay/PaymentConfig"
import { TransactionSuccess } from "app/screens/ScanAndPay/TransactionSuccess"
import { UpiPinScreen } from "app/screens/ScanAndPay/UpiPinScreen"

export type ScanAndPayStackParams = {
  [AppRoutes.UpiScanner]: undefined
  [AppRoutes.PaymentConfig]: undefined
  [AppRoutes.TransactionSuccess]: undefined
}

const Stack = createStackNavigator<ScanAndPayStackParams>()

const ScanAndPayStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false,  }} initialRouteName={AppRoutes.UpiScanner}>
      <Stack.Screen name={AppRoutes.UpiScanner} component={UpiScanner} />
      <Stack.Screen name={AppRoutes.PaymentConfig} component={PaymentConfig} />
      <Stack.Screen name={AppRoutes.UpiPinScreen} component={UpiPinScreen} />
      <Stack.Screen name={AppRoutes.TransactionSuccess} component={TransactionSuccess} />
    </Stack.Navigator>
  )
}

export default ScanAndPayStack

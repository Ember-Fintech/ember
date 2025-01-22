import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { ClinicLanding } from "app/screens/LoanApplication/ClinicLanding"
import Summary from "app/screens/LoanApplication/Summary"

export type LoanStackParams = {
  [AppRoutes.Landing]: undefined
  [AppRoutes.Summary]: undefined
}

const Stack = createStackNavigator<LoanStackParams>()

const Loan: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={AppRoutes.Landing}>
      <Stack.Screen name={AppRoutes.Landing} component={ClinicLanding} />
      <Stack.Screen name={AppRoutes.Summary} component={Summary} />
    </Stack.Navigator>
  )
}

export default Loan

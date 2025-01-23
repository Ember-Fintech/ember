import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { ClinicLanding } from "app/screens/LoanApplication/ClinicLanding"
import Summary from "app/screens/LoanApplication/Summary"
import PatientsDetailsPage1 from "app/screens/LoanApplication/PatientDetails/PatientDeatilsPage1"
import PatientsDetailsPage2 from "app/screens/LoanApplication/PatientDetails/PatientDetailsPage2"

export type LoanStackParams = {
  [AppRoutes.Landing]: undefined
  [AppRoutes.Summary]: undefined
  [AppRoutes.PatientDetailsPage1]: undefined
  [AppRoutes.PatientDetailsPage2]: undefined
}

const Stack = createStackNavigator<LoanStackParams>()

const Loan: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={AppRoutes.Landing}>
      <Stack.Screen name={AppRoutes.Landing} component={ClinicLanding} />
      <Stack.Screen name={AppRoutes.Summary} component={Summary} />
      <Stack.Screen name={AppRoutes.PatientDetailsPage1} component={PatientsDetailsPage1} />
      <Stack.Screen name={AppRoutes.PatientDetailsPage2} component={PatientsDetailsPage2} />
    </Stack.Navigator>
  )
}

export default Loan

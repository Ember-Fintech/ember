import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { ClinicLanding } from "app/screens/LoanApplication/ClinicLanding"
import Summary from "app/screens/LoanApplication/Summary"
import PatientsDetailsPage1 from "app/screens/LoanApplication/PatientDetails/PatientDeatilsPage1"
import PatientsDetailsPage2 from "app/screens/LoanApplication/PatientDetails/PatientDetailsPage2"
import LoanApplicationStatus from "app/screens/LoanApplication/LoanApplicationStatus/LoanApplicationStatus"
import PatientsDetailsPage3 from "app/screens/LoanApplication/PatientDetails/PatientDetailsPage3"
import RedirectingScreen from "app/screens/LoanApplication/RedirectingScreen"
import LoanStatusScreen from "app/screens/LoanApplication/LoanStatusScreen"
import { OTPVerificationScreen } from "app/screens/LoanApplication/OTPVerification"

export type LoanStackParams = {
  [AppRoutes.Landing]: undefined
  [AppRoutes.Summary]: undefined
  [AppRoutes.PatientDetailsPage1]: undefined
  [AppRoutes.PatientDetailsPage2]: undefined
  [AppRoutes.PatientDetailsPage3]: undefined
  [AppRoutes.Redirect]: undefined
  [AppRoutes.LoanStatus]: undefined
  [AppRoutes.StatusPage]: { response: any }
  [AppRoutes.OTPVerification]: { phoneNumber: string }
}

const Stack = createStackNavigator<LoanStackParams>()

const Loan: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName={AppRoutes.PatientDetailsPage3}
    >
      <Stack.Screen name={AppRoutes.Landing} component={ClinicLanding} />
      <Stack.Screen name={AppRoutes.Summary} component={Summary} />
      <Stack.Screen name={AppRoutes.PatientDetailsPage1} component={PatientsDetailsPage1} />
      <Stack.Screen name={AppRoutes.PatientDetailsPage2} component={PatientsDetailsPage2} />
      <Stack.Screen name={AppRoutes.StatusPage} component={LoanApplicationStatus} />
      <Stack.Screen name={AppRoutes.PatientDetailsPage3} component={PatientsDetailsPage3} />
      <Stack.Screen name={AppRoutes.Redirect} component={RedirectingScreen} />
      <Stack.Screen name={AppRoutes.LoanStatus} component={LoanStatusScreen} />
      <Stack.Screen name={AppRoutes.OTPVerification} component={OTPVerificationScreen} />
    </Stack.Navigator>
  )
}

export default Loan

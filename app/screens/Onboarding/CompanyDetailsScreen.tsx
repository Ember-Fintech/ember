import React from "react"
import { View, Text, Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"

type CompanyDetailsScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.CompanyDetails>
}

export const CompanyDetailsScreen: React.FC<CompanyDetailsScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>CompanyDetailsScreen</Text>
      <Button title="Next" onPress={() => navigation.navigate(AppRoutes.OnboardSuccess)} />
    </View>
  )
}

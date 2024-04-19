import React from "react"
import { View, Text, Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"

type OnboardSuccessScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.OnboardSuccess>
}

export const OnboardSuccessScreen: React.FC<OnboardSuccessScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>OnboardSuccessScreen</Text>
      <Button title="Next" onPress={() => navigation.navigate(AppRoutes.CompanyDetails)} />
    </View>
  )
}

import React from "react"
import { Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"

type OtpInputScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.OtpInputScreen>
}

export const OtpInputScreen: React.FC<OtpInputScreenProps> = ({ navigation }) => {
  return (
    <Screen>
      <Text.Heading size={"lg"} weight={"bold"} color={"blue"}>
        Heading size = "lg" and weight = "bold"
      </Text.Heading>
      <Text.Heading size={"xs"} weight={"regular"} color={"pink"}>
        Heading size = "xs" "regular"
      </Text.Heading>
      <Text.Heading size={"xs"} weight={"semi-bold"} color={"red"}>
        Heading size = "xs"
      </Text.Heading>
      <Text.Body size={"lg"} weight={"semi-bold"}>
        I'm a large body text
      </Text.Body>
      <Text.Caption>I'm a Caption</Text.Caption>
      <Button title="Next" onPress={() => navigation.navigate(AppRoutes.OnboardSuccess)} />
    </Screen>
  )
}

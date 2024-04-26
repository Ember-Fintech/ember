import React from "react"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { Avatar, Colors } from "react-native-ui-lib"

type OtpInputScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.OtpInputScreen>
}

export const OtpInputScreen: React.FC<OtpInputScreenProps> = ({ navigation }) => {
  const phoneNumber = "+91 9212338924"
  return (
    <Screen>
      <View style={{ alignItems: "center" }}>
        <Avatar
          size={100}
          backgroundColor={"#D1C9E9"}
          source={require("../../../assets/icons/otp.png")}
          imageStyle={{ resizeMode: "contain", height: 50, top: 25, left: 8 }}
        />
        <Text.Heading weight={"semi-bold"} size={"sm"}>
          Enter OTP
        </Text.Heading>
        <Text.Body weight={"regular"} size={"sm"} color={Colors.textQuarterary}>
          OTP sent to{" "}
          <Text.Body weight={"semi-bold"} size={"sm"} color={Colors.textQuarterary}>
            {phoneNumber}
          </Text.Body>
        </Text.Body>
      </View>
    </Screen>
  )
}

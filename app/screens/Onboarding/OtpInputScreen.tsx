import React, { useState } from "react"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { Avatar, Colors } from "react-native-ui-lib"
import { OtpInput } from "react-native-otp-entry"

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
        <OtpInput
          outerBorderFocusColor={"#A393D3"}
          numberOfDigits={4}
          focusColor={Colors.primaryColor}
          focusStickBlinkingDuration={500}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
          theme={{
            containerStyle: {
              width: 300,
            },
            pinCodeContainerStyle: {
              width: 60,
              backgroundColor: "#F9FAFB",
              borderColor: "#D0D5DD",
              borderWidth: 1.2,
            },
            pinCodeTextStyle: {
              fontSize: 20,
            },
            filledPinCodeContainerStyle: { backgroundColor: "transparent" },
            focusedPinCodeContainerStyle: {
              width: 60,
              backgroundColor: "transparent",
              borderColor: Colors.primaryColor,
              borderWidth: 1.51,
            },
          }}
        />
      </View>
    </Screen>
  )
}

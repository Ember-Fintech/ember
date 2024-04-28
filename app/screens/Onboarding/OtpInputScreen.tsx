import React, { useCallback, useState } from "react"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { Avatar, Colors, Spacings } from "react-native-ui-lib"
import { OtpInput } from "react-native-otp-entry"
import useCountdown from "app/hooks/useCountdown"

type OtpInputScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.OtpInputScreen>
  routes
}
const millisecondsToMMSS = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}
enum OtpState {
  Valid,
  Invalid,
  None,
  Waiting,
}

const getPinContainerStyle = (otpState: OtpState) => {
  const defaultStyle = {
    width: 60,
    borderWidth: 1.2,
  }
  switch (otpState) {
    case OtpState.Invalid:
      return {
        ...defaultStyle,
        backgroundColor: "#FED3F2",
        borderColor: "#D92D20",
      }
    case OtpState.Valid:
      return {
        ...defaultStyle,
        borderColor: "#17B26A",
        backgroundColor: "#ECFDF3",
      }
    default:
      return {
        ...defaultStyle,
        backgroundColor: "transparent",
        borderColor: "#D0D5DD",
      }
  }
}

export const OtpInputScreen: React.FC<OtpInputScreenProps> = ({ navigation, routes }) => {
  const phoneNumber = "+91 9212338924"
  const [otpState, setOtpState] = useState<OtpState>(OtpState.None)
  const { countDown, restart } = useCountdown(12000)

  const BottomText = useCallback(() => {
    if (otpState === OtpState.Invalid)
      return <Text.Caption color={"#344054"}>Code Invalid</Text.Caption>

    if (otpState === OtpState.Valid)
      return <Text.Caption color={"#344054"}>Verification success</Text.Caption>

    if (otpState === OtpState.None) {
      if (countDown <= 0) {
        return (
          <Text.Caption color={"#344054"}>
            Didn't get it?{" "}
            <Text.Caption onPress={restart} color={Colors.primaryColor}>
              Resend Code
            </Text.Caption>
          </Text.Caption>
        )
      } else {
        return (
          <Text.Caption color={"#344054"}>
            Code will resend in{" "}
            <Text.Caption color={Colors.primaryColor}>{millisecondsToMMSS(countDown)}</Text.Caption>
          </Text.Caption>
        )
      }
    }
  }, [otpState, countDown])

  return (
    <Screen>
      <View style={{ alignItems: "center" }}>
        <Avatar
          size={100}
          backgroundColor={"#D1C9E9"}
          source={require("../../../assets/icons/otp.png")}
          imageStyle={{ resizeMode: "contain", height: 50, top: 25, left: 8 }}
        />
        <Text.Heading
          style={{ marginTop: Spacings.s6, marginBottom: Spacings.s3 }}
          weight={"semi-bold"}
          size={"sm"}
        >
          Enter OTP
        </Text.Heading>
        <Text.Body
          weight={"regular"}
          size={"sm"}
          color={Colors.textQuarterary}
          style={{ marginBottom: Spacings.s8 }}
        >
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
              marginBottom: Spacings.s6,
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
            filledPinCodeContainerStyle: getPinContainerStyle(otpState),
            focusedPinCodeContainerStyle: {
              width: 60,
              backgroundColor: "transparent",
              borderColor: Colors.primaryColor,
              borderWidth: 1.51,
            },
          }}
        />
        <BottomText />
      </View>
    </Screen>
  )
}

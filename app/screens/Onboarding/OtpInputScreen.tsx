import React, { useCallback, useEffect, useState } from "react"
import { Platform, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { Avatar, Colors, Spacings } from "react-native-ui-lib"
import { OtpInput } from "react-native-otp-entry"
import useCountdown from "app/hooks/useCountdown"
import Button from "app/components/Button"
import auth from "@react-native-firebase/auth"

type OtpInputScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.OtpInputScreen>
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
    width: PIN_BOX_WIDTH,
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

const PIN_BOX_WIDTH = 45

export const OtpInputScreen: React.FC<OtpInputScreenProps> = ({ navigation, route }) => {
  const phoneNumber = route?.params?.phoneNumber
  const [confirm, setConfirm] = useState(null)
  const [otpState, setOtpState] = useState<OtpState>(OtpState.None)
  const { countDown, restart } = useCountdown(12000)

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
    setConfirm(confirmation)
  }

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      console.log("user >>> >", user)
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  async function confirmCode(code) {
    try {
      await confirm.confirm(code)
    } catch (error) {
      console.log("Invalid code.")
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  useEffect(() => {
    console.log("Going to send OTP")
    if (!Platform.OS === "ios") {
      signInWithPhoneNumber(phoneNumber)
    }
  }, [phoneNumber])

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
    <Screen contentContainerStyle={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginHorizontal: Spacings.s6,
        }}
      >
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
            numberOfDigits={6}
            focusColor={Colors.primaryColor}
            focusStickBlinkingDuration={500}
            onFilled={(text) => confirmCode(text)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            theme={{
              containerStyle: {
                marginBottom: Spacings.s6,
              },
              pinCodeContainerStyle: {
                width: PIN_BOX_WIDTH,
                backgroundColor: "#F9FAFB",
                borderColor: "#D0D5DD",
                borderWidth: 1.2,
              },
              pinCodeTextStyle: {
                fontSize: 20,
              },
              filledPinCodeContainerStyle: getPinContainerStyle(otpState),
              focusedPinCodeContainerStyle: {
                width: PIN_BOX_WIDTH,
                backgroundColor: "transparent",
                borderColor: Colors.primaryColor,
                borderWidth: 1.51,
              },
            }}
          />
          <BottomText />
        </View>
        <Button.Primary
          onPress={() => {
            navigation.navigate(AppRoutes.OnboardSuccess, {
              heading: 'Hurray! You are Verified! ',
              subHeading: 'You are just a few steps away to begin your Emberful journey with us.',
              ctaLabel: 'Get Started',
              navigateTo: AppRoutes.CompanyDetails
            })
          }}
          label={"Verify"}
          style={{ marginBottom: Spacings.s5 }}
        />
      </View>
    </Screen>
  )
}

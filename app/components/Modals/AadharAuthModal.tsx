import React, { useCallback, useState } from "react"
import { Modal, TouchableOpacity, View } from "react-native"
import Text from "../typography/Text"
import { OtpState } from "app/screens/Onboarding/OtpInputScreen"
import { Avatar, Colors, Spacings } from "react-native-ui-lib"
import { OtpInput } from "react-native-otp-entry"
import useCountdown from "app/hooks/useCountdown"
import Button from "../Button"
import { useAadharAuth } from "app/hooks/useAadharAuth"
import { ESteps, usePage } from "app/hooks/usePageVerification"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

const PIN_BOX_WIDTH = 45

const AadharAuthModal = () => {
  const { isVisible, setIsVisible } = useAadharAuth()
  const { setPage, setSetpsDone, stepsDone } = usePage()
  const [otp, setOtp] = useState<string>("")
  const [otpState, setOtpState] = useState<OtpState>(OtpState.None)
  const { countDown, restart } = useCountdown(12000)

  const millisecondsToMMSS = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const BottomText = useCallback(() => {
    if (otpState === OtpState.Invalid)
      return <Text.Caption color={"#344054"}>Code Invalid</Text.Caption>

    if (otpState === OtpState.Valid)
      return <Text.Caption color={"#344054"}>Verification success</Text.Caption>

    if (otpState === OtpState.None) {
      if (countDown <= 0) {
        return (
          <Text.Caption
            color={"#344054"}
            style={{
              textAlign: "center",
            }}
          >
            Didn't get it?{" "}
            <Text.Caption onPress={restart} color={Colors.primaryColor}>
              Resend Code
            </Text.Caption>
          </Text.Caption>
        )
      } else {
        return (
          <Text.Caption
            color={"#344054"}
            style={{
              textAlign: "center",
            }}
          >
            Code will resend in{" "}
            <Text.Caption color={Colors.primaryColor}>{millisecondsToMMSS(countDown)}</Text.Caption>
          </Text.Caption>
        )
      }
    }
  }, [otpState, countDown])

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

  async function confirmCode(code) {
    console.log(code)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(!isVisible)
      }}
    >
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }}>
        <TouchableOpacity style={{ flex: 0.6 }} onPress={() => setIsVisible(!isVisible)} />
        <View
          style={{
            backgroundColor: "#FFF",
            flex: 0.4,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 24,
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text.Heading
              size="xs"
              weight="semi-bold"
              style={{
                color: "rgba(16, 24, 40, 1)",
                textAlign: "center",
              }}
            >
              Aadhaar Authentication
            </Text.Heading>
            <Text.Body
              size="sm"
              style={{
                textAlign: "center",
                color: "rgba(102, 112, 133, 1)",
              }}
            >
              You will receive a OTP on your Aadhaar registered mobile number xx1234
            </Text.Body>
          </View>
          <OtpInput
            outerBorderFocusColor={"#A393D3"}
            numberOfDigits={4}
            focusColor={Colors.primaryColor}
            focusStickBlinkingDuration={500}
            onFilled={(text) => confirmCode(text)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            onTextChange={(text) => {
              setOtp(text)
            }}
            theme={{
              containerStyle: {
                width: 300,
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

          <Button.Primary
            label="Continue"
            disabled={otp.length < 4}
            onPress={() => {
              setPage(0)
              setSetpsDone([...stepsDone, ESteps.AADHAR])
              setIsVisible(false)
            }}
          />
        </View>
      </View>
      {/* <TouchableWithoutFeedback style={{ f }}></TouchableWithoutFeedback> */}
    </Modal>
  )
}

export default AadharAuthModal

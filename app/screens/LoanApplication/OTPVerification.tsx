import React, { useCallback, useEffect, useState } from "react"
import { View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { Avatar, Colors, Spacings } from "react-native-ui-lib"
import { OtpInput } from "react-native-otp-entry"
import useCountdown from "app/hooks/useCountdown"
import Button from "app/components/Button"
import { LoanStackParams } from "app/navigators/Loan"
import { usePhoneAuth } from "app/hooks/usePhoneAuth"
import { User } from "firebase/auth"

type OTPVerificationScreenProps = {
  navigation: StackScreenProps<LoanStackParams, AppRoutes.OTPVerification>
}
const millisecondsToMMSS = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}
export enum OtpState {
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

export const OTPVerificationScreen: React.FC<OTPVerificationScreenProps> = ({ navigation, route }) => {
  const phoneNumber = route?.params?.phoneNumber ?? '+919212338924'
  const { countDown, restart } = useCountdown(12000)
  
  const [otp, setOtp] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [otpState, setOtpState] = useState<OtpState>(OtpState.None)
  const { loading, error, sendOTP, verifyOTP, setupRecaptcha } = usePhoneAuth();

  const handleSendOTP = useCallback(async () => {
    setupRecaptcha('recaptcha-container');
    
    const success = await sendOTP(phoneNumber);
    console.log("Otp sent successfully", success);
    if (success) {
      restart()
    }
  }, [setupRecaptcha, sendOTP, phoneNumber, restart]);
  
  useEffect(()=>{
    handleSendOTP();
  }, [phoneNumber])

  const handleVerifyOTP = useCallback(async (fromInput?: string) => {
    setOtpState(OtpState.Waiting)
    try{
        const result = await verifyOTP(fromInput ?? otp);
        if (result.success && result.user) {
          setOtpState(OtpState.Valid)
          setUser(result.user);
          //todo: navigate to desired Screen
        //   navigation.navigation.navigate()
        }else{
          setOtpState(OtpState.Invalid);
        }
    }catch(e){
        setOtpState(OtpState.Invalid);
    }
  }, [otp, verifyOTP]);

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
            <Text.Caption onPress={handleSendOTP} color={Colors.primaryColor}>
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
    <Screen
    safeAreaEdges={["top"]}
    style={{
      minWidth: 375,
      justifyContent: "space-between",
      paddingHorizontal: Spacings.s4,
      paddingTop: Spacings.s8
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
            onFilled={(text) => handleVerifyOTP(text)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            onTextChange={(text) => {
              setOtp(text)
            }}
            theme={{
              containerStyle: {
                marginBottom: Spacings.s6,
                width: 320
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
          <Text>{error}</Text>
        </View>
        <Button.Primary
          onPress={() => {
            if (otp.length === 6) {
              handleVerifyOTP();
            }
          }}
          loading={loading}
          label={"Verify"}
          disabled={otp.length < 6}
          style={{ marginVertical: Spacings.s6 }}
        />
    </Screen>
  )
}

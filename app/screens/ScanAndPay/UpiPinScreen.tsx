import React, { useEffect } from "react"
import { Screen } from "app/components"
import { Colors, Image, Spacings } from "react-native-ui-lib"
import { View } from "react-native"
import Text from "app/components/typography/Text"
import { useNavigation } from "@react-navigation/native"
import { OtpInput } from "react-native-otp-entry"
import { AppRoutes } from "app/navigators/constants/appRoutes"
const PIN_BOX_WIDTH = 45

export const UpiPinScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: () => (
        <Text.Body size={"lg"} weight={"semi-bold"} color={"#FFFFFF"}>
          Paying to
        </Text.Body>
      ),
      headerTintColor: "#FFFFFF",
      headerBackTitle: " ",
      headerTitleStyle: { color: "white" },
      headerTransparent: true,
    })
  }, [])
  return (
    <Screen backgroundColor={"white"}>
      <View style={{ height: "100%" }}>
        <Image style={{ width: "100%" }} source={require("../../../assets/images/upi-mock.png")} />
        <View style={{ alignItems: "center", marginHorizontal: Spacings.s10 }}>
          <Text.Body
            style={{ fontStyle: "Inter-Regular", marginVertical: Spacings.s6 }}
            color={"#344054"}
          >
            {"Enter 4-digit UPI PIN".toUpperCase()}
          </Text.Body>
          <OtpInput
            autoFocus={true}
            outerBorderFocusColor={"#A393D3"}
            numberOfDigits={4}
            focusColor={Colors.primaryColor}
            focusStickBlinkingDuration={500}
            onFilled={(text) => {
              navigation.navigate(AppRoutes.TransactionSuccess)
            }}
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
              // filledPinCodeContainerStyle: getPinContainerStyle(otpState),
              focusedPinCodeContainerStyle: {
                width: PIN_BOX_WIDTH,
                backgroundColor: "transparent",
                borderColor: Colors.primaryColor,
                borderWidth: 1.51,
              },
            }}
          />
        </View>
      </View>
    </Screen>
  )
}

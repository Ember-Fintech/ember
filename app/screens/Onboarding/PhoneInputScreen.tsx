import React from "react"
import { View, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import { Avatar, Colors, Spacings } from "react-native-ui-lib"
import Input from "app/components/Input"
import IndiaFlagRound from "../../../assets/icons/IndiaFlagRound.js"
import { Formik } from "formik"
import * as Yup from "yup"
import PrimaryButton from "app/components/PrimaryButton"
import Text from "app/components/typography/Text"

type PhoneInputScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.PhoneInput>
}

const styles = StyleSheet.create({
  upperCurvedContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: Spacings.s5,
    borderTopLeftRadius: Spacings.s5,
    padding: Spacings.s4,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
})

const EmptyView = () => <View style={{ flex: 0.2 }} />

const phoneSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
})

export const PhoneInputScreen: React.FC<PhoneInputScreenProps> = ({ navigation }) => {
  return (
    <Screen bgSource={require("../../../assets/background/ripple-center.png")}>
      <View style={styles.container}>
        <EmptyView />
        <View style={styles.upperCurvedContainer}>
          <View style={{ position: "relative", alignItems: "center", marginBottom: Spacings.s8 }}>
            <Avatar
              containerStyle={{ position: "absolute", top: -55 }}
              size={80}
              backgroundColor={"#FDE272"}
              source={require("../../../assets/icons/mobile.png")}
              imageStyle={{ resizeMode: "contain", height: 40, top: 20 }}
            />
          </View>

          <Text.Heading size={"sm"} weight={"semi-bold"}>
            Sign Up
          </Text.Heading>
          <Text.Body size={"sm"} weight={"regular"} color={Colors.textQuarterary}>
            Lets sign you up for big things
          </Text.Body>
          <Formik
            initialValues={{ phoneNumber: "" }}
            validationSchema={phoneSchema}
            validateOnChange={false}
            onSubmit={(values, { setSubmitting }) => {
              // Your form submission logic here
              setSubmitting(false)
              navigation.navigate(AppRoutes.OtpInputScreen)
            }}
          >
            {(form) => (
              <View style={{ flex: 1, justifyContent: "space-between", marginTop: Spacings.s6 }}>
                <Input
                  label={"Mobile"}
                  leftElement={
                    <View style={styles.row}>
                      <IndiaFlagRound />
                      <Text.Body size={"md"} style={{ marginLeft: 10 }}>
                        +91
                      </Text.Body>
                    </View>
                  }
                  onChangeText={(text) => form.setFieldValue("phoneNumber", text)}
                  errorMessage={form?.errors?.phoneNumber}
                  onEndEditing={form.submitForm}
                />
                <View>
                  <Text.Caption>
                    By continuing, you agree to our{" "}
                    <Text.Caption color={Colors.primaryColor}>Terms and Conditions</Text.Caption>
                  </Text.Caption>
                  <PrimaryButton onPress={form.submitForm} title={"Send OTP"} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </Screen>
  )
}

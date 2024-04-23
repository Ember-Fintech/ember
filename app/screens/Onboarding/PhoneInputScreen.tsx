import React from "react"
import { View, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import { Spacings, Text } from "react-native-ui-lib"
import Input from "app/components/Input"
import IndiaFlagRound from "../../../assets/icons/IndiaFlagRound.js"
import { Formik } from "formik"
import * as Yup from "yup"
import PrimaryButton from "app/components/PrimaryButton"

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
          <Formik
            initialValues={{ phoneNumber: "" }}
            validationSchema={phoneSchema}
            validateOnChange={false}
            onSubmit={(values, { setSubmitting }) => {
              // Your form submission logic here
              console.log("Submitted:", values)
              setSubmitting(false)
            }}
          >
            {(form) => (
              <View style={{ flex: 1, justifyContent: "space-between" }}>
                <Input
                  label={"Mobile"}
                  leftElement={
                    <View style={styles.row}>
                      <IndiaFlagRound />
                      <Text text80 bold marginL-10>
                        +91
                      </Text>
                    </View>
                  }
                  onChangeText={(text) => form.setFieldValue("phoneNumber", text)}
                  errorMessage={form?.errors?.phoneNumber}
                  onEndEditing={form.submitForm}
                />
                <PrimaryButton onPress={form.submitForm} title={"Send OTP"} />
              </View>
            )}
          </Formik>
        </View>
      </View>
    </Screen>
  )
}

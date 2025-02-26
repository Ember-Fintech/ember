import Text from "app/components/typography/Text"
import Input from "app/components/Input"
import React, { useEffect } from "react"
import { ImageBackground, StyleSheet, View } from "react-native"
import Button from "app/components/Button"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import * as Yup from "yup"
import { Formik } from "formik"
import { useUser } from "../hooks/useUser"

const SchemaForVerification = Yup.object().shape({
  panId: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format")
    .required("PAN number is required"),
  dob: Yup.string()
    .matches(/^\d{4}\-\d{2}\-\d{2}$/, "Date of Birth must be in YYYY-MM-DD format")
    .required("Date of Birth is required"),
})

const PAN_DONE = "PAN_DONE"

const PatientsDetailsPage2 = ({ navigation, route }) => {
  const phoneNumber = route?.params?.phoneNumber ?? "+919212338924"
  const { createUser, user, fetchUser } = useUser()

  useEffect(() => {
    fetchUser({ mobileNumber: phoneNumber?.slice(3) })
  }, [])

  return (
    <ImageBackground
      style={{ height: "100%", width: "100%", position: "relative", zIndex: 1, elevation: 1 }}
      source={require("../../../../assets/background/ripple-center.png")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Text.Body size="md" weight="medium">
            2
          </Text.Body>
          <Text.Caption weight="medium">/3</Text.Caption>
        </View>
        <View style={styles.headingContainer}>
          <Text.Heading size="sm" weight="semi-bold">
            Identification details
          </Text.Heading>
          <Text.Body size="sm">Enter your PAN details</Text.Body>
        </View>
        <Formik
          initialValues={{
            panId: "",
            dob: "",
          }}
          validationSchema={SchemaForVerification}
          validateOnChange={false}
          validateOnBlur={true}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false)
            await createUser({ ...user, ...values, userCreationStatus: PAN_DONE }, user?.mobile)
            navigation.navigate(AppRoutes.PatientDetailsPage3, { phoneNumber: phoneNumber })
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.formContainer}>
              <View
                style={{
                  flex: 1,
                }}
              >
                <Input
                  label="PAN number"
                  placeholder="Enter PAN (e.g., ABCDE1234F)"
                  placeholderTextColor={"#98A2B3"}
                  isRequired={true}
                  value={values.panId}
                  onChangeText={(text) => handleChange("panId")(text.toUpperCase())}
                  onBlur={handleBlur("panId")}
                  errorMessage={touched.panId && errors.panId ? errors.panId : ""}
                />
                <Input
                  label="Date of birth"
                  placeholder="YYYY-MM-DD"
                  placeholderTextColor={"#98A2B3"}
                  isRequired={true}
                  keyboardType="number-pad"
                  value={values.dob}
                  onChangeText={handleChange("dob")}
                  onBlur={handleBlur("dob")}
                  errorMessage={touched.dob && errors.dob ? errors.dob : ""}
                />
              </View>
              <Button.Primary
                onPress={handleSubmit}
                label={"Next"}
                style={{
                  bottom: "7.5%",
                }}
              />
            </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  )
}

export default PatientsDetailsPage2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: "20%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  headingContainer: {
    marginTop: 24,
    rowGap: 8,
  },
  formContainer: {
    marginTop: 40,
    rowGap: 24,
    flex: 1,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    marginBottom: 5,
    color: "black",
  },
})

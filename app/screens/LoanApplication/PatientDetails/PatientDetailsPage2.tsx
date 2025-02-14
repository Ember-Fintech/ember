import Text from "app/components/typography/Text"
import Input from "app/components/Input"
import React from "react"
import { ImageBackground, StyleSheet, View } from "react-native"
import Button from "app/components/Button"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import * as Yup from "yup"
import { Formik } from "formik"

const SchemaForVerification = Yup.object().shape({
  panNumber: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format")
    .required("PAN number is required"),
  dateOfBirth: Yup.string()
    .matches(/^\d{4}\/\d{2}\/\d{2}$/, "Date of Birth must be in YYYY/MM/DD format")
    .required("Date of Birth is required"),
})

const PatientsDetailsPage2 = ({ navigation }) => {
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
            panNumber: "",
            dateOfBirth: "",
          }}
          validationSchema={SchemaForVerification}
          validateOnChange={false}
          validateOnBlur={true}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
            // navigation.navigate(AppRoutes.PatientDetailsPage3)
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
                  value={values.panNumber}
                  onChangeText={handleChange("panNumber")}
                  onBlur={handleBlur("panNumber")}
                  errorMessage={touched.panNumber && errors.panNumber ? errors.panNumber : ""}
                />
                <Input
                  label="Date of birth"
                  placeholder="YYYY/MM/DD"
                  placeholderTextColor={"#98A2B3"}
                  isRequired={true}
                  value={values.dateOfBirth}
                  onChangeText={handleChange("dateOfBirth")}
                  onBlur={handleBlur("dateOfBirth")}
                  errorMessage={touched.dateOfBirth && errors.dateOfBirth ? errors.dateOfBirth : ""}
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

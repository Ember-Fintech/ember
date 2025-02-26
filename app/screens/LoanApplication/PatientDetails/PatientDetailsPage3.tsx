import React, { useEffect, useState } from "react"
import { ImageBackground, StyleSheet, View } from "react-native"
import { Formik } from "formik"
import * as Yup from "yup"
import Text from "app/components/typography/Text"
import Input from "app/components/Input"
import Button from "app/components/Button"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { useUser } from "../hooks/useUser"

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  currentAddress: Yup.string().required("Required"),
  currentCity: Yup.string().required("Required"),
  currentState: Yup.string().required("Required"),
  currentPincode: Yup.string()
    .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits")
    .required("Pincode is required"),
  highestQualification: Yup.string().required("Required"),
  occupation: Yup.string(),
  typeOfBusiness: Yup.string().when("occupation", {
    is: "Self Employed",
    then: () => Yup.string().required("Required"),
  }),
  monthlyIncome: Yup.string().when("occupation", {
    is: "Self Employed",
    then: () => Yup.string().required("Required"),
  }),
  employerName: Yup.string().when("occupation", {
    is: (occupation) => occupation && occupation !== "Self Employed",
    then: () => Yup.string().required("Required"),
  }),
  annualIncome: Yup.string().when("occupation", {
    is: (occupation) => occupation && occupation !== "Self Employed",
    then: () => Yup.string().required("Required"),
  }),
})

const PatientsDetailsPage3 = ({ navigation, route }) => {
  const phoneNumber = route?.params?.phoneNumber ?? "+919212338924"
  const { createUser, fetchUser, user } = useUser()

  useEffect(() => {
    if (phoneNumber) {
      fetchUser({ mobileNumber: phoneNumber?.slice(3) })
    }
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
            3
          </Text.Body>
          <Text.Caption weight="medium">/3</Text.Caption>
        </View>
        <View style={styles.headingContainer}>
          <Text.Heading size="sm" weight="semi-bold">
            Additional Information
          </Text.Heading>
          <Text.Body size="sm">
            Share a few details to confirm your eligibility and finalize your application.
          </Text.Body>
        </View>
        <Formik
          initialValues={{
            email: "",
            currentAddress: "",
            currentCity: "",
            currentState: "",
            currentPincode: "",
            highestQualification: "",
            occupation: "",
            typeOfBusiness: "",
            monthlyIncome: "",
            employerName: "Apollo",
            annualIncome: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false)
            await createUser(
              {
                ...user,
                ...values,
                userCreationStatus: "UserCreationCompleted",
                employmentType: "Private",
              },
              user?.mobile,
            )
            navigation.navigate(AppRoutes.Redirect, { phoneNumber: phoneNumber })
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
            <View style={styles.formContainer}>
              <Input
                label="Email Id"
                placeholder="example@gmail.com"
                isRequired
                keyboardType="email-address"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                errorMessage={touched.email && errors.email}
                placeholderTextColor={"#98A2B3"}
              />
              <View>
                <Input
                  label="Address"
                  placeholder="Enter your current residential address"
                  isRequired
                  value={values.currentAddress}
                  onChangeText={handleChange("currentAddress")}
                  onBlur={handleBlur("currentAddress")}
                  errorMessage={touched.currentAddress && errors.currentAddress}
                  placeholderTextColor={"#98A2B3"}
                />
                <Input
                  label=""
                  placeholder="City"
                  isRequired
                  value={values.currentCity}
                  onChangeText={handleChange("currentCity")}
                  onBlur={handleBlur("currentCity")}
                  errorMessage={touched.currentCity && errors.currentCity}
                  placeholderTextColor={"#98A2B3"}
                />
                <Input
                  label=""
                  placeholder="State"
                  isRequired
                  value={values.currentState}
                  onChangeText={handleChange("currentState")}
                  onBlur={handleBlur("currentState")}
                  errorMessage={touched.currentState && errors.currentState}
                  placeholderTextColor={"#98A2B3"}
                />
                <Input
                  label=""
                  placeholder="Pincode"
                  isRequired
                  value={values.currentPincode}
                  onChangeText={handleChange("currentPincode")}
                  onBlur={handleBlur("currentPincode")}
                  errorMessage={touched.currentPincode && errors.currentPincode}
                  placeholderTextColor={"#98A2B3"}
                />
              </View>

              <Input
                label="Highest Qualification"
                placeholder="Select your highest Qualification"
                isRequired
                options={[
                  { title: "No formal Education" },
                  { title: "High school graduate" },
                  { title: "Bachelor's degree graduate" },
                ]}
                value={values.highestQualification}
                onChangeText={handleChange("highestQualification")}
                onBlur={handleBlur("highestQualification")}
                errorMessage={touched.highestQualification && errors.highestQualification}
                placeholderTextColor={"#98A2B3"}
                onOptionSelect={(value) => {
                  setFieldValue("highestQualification", value)
                }}
                selectedItem={values.highestQualification}
              />
              <Input
                label="Occupation"
                placeholder="Select your occupation"
                isRequired
                options={[
                  { title: "Self Employed" },
                  { title: "Salaried professional" },
                  { title: "Retired Individual" },
                ]}
                value={values.occupation}
                onChangeText={handleChange("occupation")}
                onBlur={handleBlur("occupation")}
                errorMessage={touched.occupation && errors.occupation}
                placeholderTextColor={"#98A2B3"}
                onOptionSelect={(value) => {
                  console.log("Occupation", value)
                  setFieldValue("occupation", value)
                }}
                selectedItem={values.occupation}
              />
              {values.occupation === "Self Employed" && (
                <>
                  <Input
                    label="Type of business"
                    placeholder="Enter business type (e.g. Retail)"
                    isRequired
                    value={values.typeOfBusiness}
                    onChangeText={handleChange("typeOfBusiness")}
                    onBlur={handleBlur("typeOfBusiness")}
                    errorMessage={touched.typeOfBusiness && errors.typeOfBusiness}
                    placeholderTextColor={"#98A2B3"}
                  />
                  <Input
                    label="Monthly income(before taxes)"
                    placeholder="Enter monthly income"
                    isRequired
                    value={values.monthlyIncome}
                    onChangeText={handleChange("monthlyIncome")}
                    onBlur={handleBlur("monthlyIncome")}
                    errorMessage={touched.monthlyIncome && errors.monthlyIncome}
                    placeholderTextColor={"#98A2B3"}
                  />
                </>
              )}
              {values.occupation && values.occupation !== "Self Employed" && (
                <>
                  <Input
                    label="Employer name"
                    placeholder="Enter employer name (e.g. AB Corp)"
                    isRequired
                    value={values.employerName}
                    onChangeText={handleChange("employerName")}
                    onBlur={handleBlur("employerName")}
                    errorMessage={touched.employerName && errors.employerName}
                    placeholderTextColor={"#98A2B3"}
                  />
                  <Input
                    label="Annual income(before taxes)"
                    placeholder="12 LPA"
                    isRequired
                    value={values.annualIncome}
                    onChangeText={handleChange("annualIncome")}
                    onBlur={handleBlur("annualIncome")}
                    errorMessage={touched.annualIncome && errors.annualIncome}
                    placeholderTextColor={"#98A2B3"}
                  />
                </>
              )}
              <Button.Primary onPress={handleSubmit} label="Next" style={{ marginVertical: 16 }} />
            </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  )
}

export default PatientsDetailsPage3

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
})

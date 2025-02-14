import Text from "app/components/typography/Text"
import Input from "app/components/Input"
import React from "react"
import { ImageBackground, StyleSheet, View, Text as LabelText } from "react-native"
import { RadioButton, RadioGroup } from "react-native-ui-lib"
import Button from "app/components/Button"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import * as Yup from "yup"
import { Formik } from "formik"
import { useUser } from "../hooks/useUser"

const SchemaForVerification = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters are allowed in first name")
    .required("First Name is required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only letters are allowed in last name")
    .required("Last Name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  gender: Yup.string().required("Gender is required"),
  treatmentType: Yup.string().required("Treatment type is required"),
  loanAmount: Yup.number()
    .typeError("Loan amount must be a number")
    .positive("Loan amount must be positive")
    .required("Loan amount is required"),
  isPatient: Yup.boolean().required("Patient selection is required"),
  patientName: Yup.string().when("isPatient", {
    is: false,
    then: (schema) => schema.required("Patient Name is required if you are not the patient"),
  }),
})

const PatientsDetailsPage1 = ({ navigation }) => {
  const { createUser } = useUser()

  return (
    <ImageBackground
      style={{ height: "100%", width: "100%", position: "relative", zIndex: 1, elevation: 1 }}
      source={require("../../../../assets/background/ripple-center.png")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Text.Body size="md" weight="medium">
            1
          </Text.Body>
          <Text.Caption weight="medium">/3</Text.Caption>
        </View>
        <View style={styles.headingContainer}>
          <Text.Heading size="sm" weight="semi-bold">
            Basic information
          </Text.Heading>
          <Text.Body size="sm">
            Provide details of the person responsible for paying the EMIs.
          </Text.Body>
        </View>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            mobile: "",
            gender: "",
            treatmentType: "",
            loanAmount: "",
            isPatient: true,
            patientName: "",
          }}
          validationSchema={SchemaForVerification}
          validateOnChange={false}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
            createUser(
              {
                ...values,
                // userCreationStatus: "CreateUserInitiation",
                merchantId: "0414f440-87a4-4311-8995-81697929713a",
              },
              values.mobile,
            )
            // navigation.navigate(AppRoutes.PatientDetailsPage2)
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
            <View style={styles.formContainer}>
              <Input
                label="First Name"
                placeholder="Enter your first name as on your PAN."
                placeholderTextColor="#98A2B3"
                isRequired
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
                errorMessage={touched.firstName && errors.firstName}
              />
              <Input
                label="Last Name"
                placeholder="Enter your last name as on your PAN."
                placeholderTextColor="#98A2B3"
                isRequired
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
                errorMessage={touched.lastName && errors.lastName}
              />
              <Input
                label="Phone Number"
                placeholder="Enter a 10-digit mobile number."
                placeholderTextColor="#98A2B3"
                isRequired
                onChangeText={handleChange("mobile")}
                onBlur={handleBlur("phoneNumber")}
                value={values.mobile}
                errorMessage={touched.mobile && errors.mobile}
              />
              <Input
                label="Gender"
                placeholder="Select your gender"
                placeholderTextColor="#98A2B3"
                isRequired
                value={values.gender}
                errorMessage={touched.gender && errors.gender}
                options={[{ title: "Male" }, { title: "Female" }]}
                selectedItem={values.gender}
                onOptionSelect={(value) => {
                  setFieldValue("gender", value)
                }}
              />
              <Input
                label="Treatment Type"
                placeholder="Enter a treatment type (e.g. Dental)"
                placeholderTextColor="#98A2B3"
                isRequired
                onChangeText={handleChange("treatmentType")}
                value={values.treatmentType}
                errorMessage={touched.treatmentType && errors.treatmentType}
              />
              <Input
                label="Payment amount"
                placeholder="Enter required loan amount"
                placeholderTextColor="#98A2B3"
                isRequired
                onChangeText={handleChange("loanAmount")}
                value={values.loanAmount}
                errorMessage={touched.loanAmount && errors.loanAmount}
              />
              <View>
                <View style={styles.flexRow}>
                  <LabelText style={styles.label}>Are you the patient?</LabelText>
                  <Text style={{ color: "#D92D20" }}> *</Text>
                </View>
                <RadioGroup
                  onValueChange={(value) => setFieldValue("isPatient", value === "Yes")}
                  initialValue={values.isPatient ? "Yes" : "No"}
                  style={styles.flexRow}
                >
                  <RadioButton label="Yes" value="Yes" color="#65558F" />
                  <RadioButton label="No" value="No" />
                </RadioGroup>
              </View>
              {!values.isPatient && (
                <Input
                  label="Patient Name"
                  placeholder="Enter Patient's Name"
                  placeholderTextColor="#98A2B3"
                  isRequired
                  onChangeText={handleChange("patientName")}
                  value={values.patientName}
                  errorMessage={touched.patientName && errors.patientName}
                />
              )}
              <Button.Primary
                onPress={handleSubmit}
                label={"Next"}
                style={{ marginBottom: 16, marginTop: 24 }}
              />
            </View>
          )}
        </Formik>
      </View>
    </ImageBackground>
  )
}

export default PatientsDetailsPage1

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
    columnGap: 12,
  },
  headingContainer: {
    marginTop: 24,
    rowGap: 8,
  },
  formContainer: {
    marginTop: 40,
    rowGap: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    marginBottom: 5,
    color: "black",
  },
})

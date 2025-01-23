import Text from "app/components/typography/Text"
import Input from "app/components/Input"
import React from "react"
import { ImageBackground, StyleSheet, View, Text as LableText } from "react-native"
import { RadioButton, RadioGroup } from "react-native-ui-lib"
import Button from "app/components/Button"
import { AppRoutes } from "app/navigators/constants/appRoutes"

const PatientsDetailsPage1 = ({ navigation }) => {
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
        <View style={styles.formContainer}>
          <Input
            label="First Name"
            placeholder="Enter your first name as on your PAN."
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Last Name"
            placeholder="Enter your last name as on your PAN."
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Phone Number"
            placeholder="Enter a 10-digit mobile number."
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Gender"
            placeholder="Select your gender"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
            options={[{ title: "Male" }, { title: "Female" }]}
          />
          <Input
            label="Treatment Type"
            placeholder="Enter a treatment type"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Payment amount"
            placeholder="Enter required loan amount"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <LableText style={styles.label}>Are you the patient?</LableText>
              <Text style={{ color: "#D92D20" }}> *</Text>
            </View>

            <View style={[styles.flexRow, { columnGap: 40, paddingTop: 8 }]}>
              <RadioButton label="Yes" selected={true} color="#65558F"></RadioButton>
              <RadioButton label="No"></RadioButton>
            </View>
          </View>
          <Input
            label="Patient Name"
            placeholder="Enter Patient's Name"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
        </View>
        <Button.Primary
          onPress={() => {
            navigation.navigate(AppRoutes.PatientDetailsPage2)
          }}
          label={"Next"}
          style={{
            marginBottom: 16,
            marginTop: 24,
          }}
        />
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

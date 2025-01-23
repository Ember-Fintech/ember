import Text from "app/components/typography/Text"
import Input from "app/components/Input"
import React from "react"
import { ImageBackground, StyleSheet, View } from "react-native"
import Button from "app/components/Button"
import { AppRoutes } from "app/navigators/constants/appRoutes"

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
          <Text.Body size="sm">Enter your PAN details and select treatment type</Text.Body>
        </View>
        <View style={styles.formContainer}>
          <Input
            label="PAN number"
            placeholder="Enter PAN (e.g., ABCDE1234F)"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Date of birth"
            placeholder="YYYY/MM/DD"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
        </View>
        <Button.Primary
          onPress={() => {
            navigation.navigate(AppRoutes.PatientDetailsPage1)
          }}
          label={"Next"}
          style={{
            bottom: "7.5%",
          }}
        />
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

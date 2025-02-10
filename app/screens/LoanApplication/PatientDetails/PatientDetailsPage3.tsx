import Text from "app/components/typography/Text"
import Input from "app/components/Input"
import React from "react"
import { ImageBackground, StyleSheet, View } from "react-native"
import Button from "app/components/Button"
import { AppRoutes } from "app/navigators/constants/appRoutes"

const PatientsDetailsPage3 = ({ navigation }) => {
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
        <View style={styles.formContainer}>
          <Input
            label="Email Id"
            placeholder="exapmler@gmail.com"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Address"
            placeholder="Enter your current residential address"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Highest qualification"
            placeholder="Select your highest qualification"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
            options={[
              { title: "No formal Education" },
              { title: "High school graduate" },
              { title: "Bachelor's degree graduate" },
            ]}
          />
          <Input
            label="Occupation"
            placeholder="Enter your current residential address"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
            options={[
              { title: "Self Employed" },
              { title: "Salaried professional" },
              { title: "Retired Indiviual" },
            ]}
          />
          <Input
            label="Type of business"
            placeholder="Enter business type (e.g. Retail)"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Monthly income(before taxes)"
            placeholder="Enter monthly income"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Employer name"
            placeholder="Enter employer name (e.g. AB Corp)"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
          <Input
            label="Annual income(before taxes)"
            placeholder="12 LPA"
            placeholderTextColor={"#98A2B3"}
            isRequired={true}
          />
        </View>
        <Button.Primary
          onPress={() => {
            navigation.navigate(AppRoutes.Redirect)
          }}
          label={"Next"}
          style={{
            marginVertical: 16,
          }}
        />
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
    position: "relative",
    zIndex: 1,
    elevation: 1,
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
    position: "relative",
    zIndex: 1,
    elevation: 1,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 20,
    marginBottom: 5,
    color: "black",
  },
})

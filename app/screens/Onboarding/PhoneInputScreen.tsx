import React, { useEffect } from "react"
import { View, Button, StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import { Spacings, Text } from "react-native-ui-lib"
import Input from "app/components/Input"
import InfoCircle from "../../../assets/icons/InfoCircle.js"

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
})

const EmptyView = () => <View style={{ flex: 0.2 }} />

export const PhoneInputScreen: React.FC<PhoneInputScreenProps> = ({ navigation }) => {
  return (
    <Screen bgSource={require("../../../assets/background/ripple-center.png")}>
      <View style={styles.container}>
        <EmptyView />
        <View style={styles.upperCurvedContainer}>
          <Input
            label={"Mobile"}
            leftElement={
              <Text text80 bold>
                +91
              </Text>
            }
            rightIcon={<InfoCircle />}
            leftIcon={<InfoCircle />}
            rightElement={
              <Text text80 bold>
                +91
              </Text>
            }
            infoMessage={"this is info"}
            errorMessage={"das"}
          />
        </View>
      </View>
    </Screen>
  )
}

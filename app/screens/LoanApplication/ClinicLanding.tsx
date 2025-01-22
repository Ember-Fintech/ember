import React, { useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import { useTheme } from "app/hooks/useTheme"
import { Colors, Spacings, View } from "react-native-ui-lib"
import RadioButtonCard from "app/components/RadioButtonGroup"
import { languageSelectionData } from "app/constants/languageSelectionData"
import Button from "app/components/Button"
import Text from "app/components/typography/Text"
import { LoanStackParams } from "app/navigators/Loan"
import { Image } from "react-native"

type ClinicLandingProps = {
  navigation: StackScreenProps<LoanStackParams, AppRoutes.Landing>
}

export const ClinicLanding: React.FC<ClinicLandingProps> = ({ navigation }) => {
  return (
    <Screen
      bgSource={require("../../../assets/background/ripple-top-bottom.png")}
      safeAreaEdges={["top"]}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >     
        <View 
          style={{ 
            minHeight: 400,
            maxWidth: 320,
            marginHorizontal: Spacings.s4,
            backgroundColor: "white",
            borderRadius: 12,
            padding: Spacings.s4,
            justifyContent: "space-between"
          }}
        >
          <View style={{alignItems: "flex-start"}}>
          <Image
            source={require("../../../assets/background/ripple-top-right.png")}
            style={{
              width: "100%",
              height: 140,
              marginBottom: Spacings.s4,
              borderRadius: 12
            }}
            resizeMode="cover"
          />
          <View style={{paddingHorizontal: Spacings.s2}}>
          <Text.Heading
          size="sm"
            weight="medium"
            style={{
              marginBottom: 0
            }}
          >
          Mayo Clinic
          </Text.Heading>
          <Text.Body
            size="sm"
            style={{
              marginBottom: 32,
            }}
            color={Colors.textQuarterary}
          >
            Bangalore
          </Text.Body>
          </View>
          {/* {todo: add the features} */}
          </View>
          <View>
            <Text.Caption color={Colors.textQuarterary} style={{textAlign: "center", marginBottom: Spacings.s2}}>(Partnered with Ember for seamless payments)</Text.Caption>
          <Button
            label="Proceed to Apply"
            style={{width: "100%"}}
          />
          </View>

        </View>
    </Screen>
  )
}

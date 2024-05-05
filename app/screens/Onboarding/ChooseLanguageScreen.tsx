import React, { useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import { useTheme } from "app/hooks/useTheme"
import { Spacings, View } from "react-native-ui-lib"
import RadioButtonCard from "app/components/RadioButtonGroup"
import { languageSelectionData } from "app/constants/languageSelectionData"
import Button from "app/components/Button"
import Text from "app/components/typography/Text"

type ChooseLanguageScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.LanguageSelection>
}

export const ChooseLanguageScreen: React.FC<ChooseLanguageScreenProps> = ({ navigation }) => {
  const [selected, setSelected] = useState<string>("english")
  const { colors } = useTheme()

  const onPressPrimaryCTA = () => {
    // TODO:- save the user language preferrence and move to the next screen
    navigation.navigate(AppRoutes.Welcome)
  }

  return (
    <Screen
      bgSource={require("../../../assets/background/ripple-top-right.png")}
      safeAreaEdges={["top"]}
    >
      <View
        style={{
          height: "100%",
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.19,
              marginHorizontal: 24,
              marginBottom: 30,
              justifyContent: "flex-end",
            }}
          >
            <Text.Heading
              color={"#FFFFFF"}
              size={"sm"}
              style={{
                fontFamily: "Sans-SemiBold",
                marginBottom: Spacings.s1,
              }}
            >
              Choose Your Language
            </Text.Heading>
            <Text.Body size={"sm"} color={"#A393D3"}>
              Select your preferred language to use Ember easily
            </Text.Body>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              flex: 1,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              justifyContent: "space-between",
              paddingBottom: Spacings.s5,
            }}
          >
            <View>
              <RadioButtonCard
                data={languageSelectionData}
                selected={selected}
                setSelected={setSelected}
              />
            </View>
            <View style={{ marginHorizontal: Spacings.s5 }}>
              <Button.Primary label={"Continue"} onPress={onPressPrimaryCTA} />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  )
}

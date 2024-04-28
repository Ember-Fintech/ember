import React, { useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import { useTheme } from "app/hooks/useTheme"
import { Text, View } from "react-native-ui-lib"
import RadioButtonCard from "app/components/RadioButtonGroup"
import { languageSelectionData } from "app/constants/languageSelectionData"
import PrimaryButton from "app/components/Button"

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
    <Screen bgSource={require("../../../assets/background/ripple-top-right.png")}>
      <View
        style={{
          height: "100%",
        }}
      >
        <View
          style={{
            marginHorizontal: 24,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "Sans-SemiBold",
              fontSize: 24,
              marginTop: 14,
            }}
          >
            Choose Your Language
          </Text>
          <Text
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 14,
              marginTop: 12,
              lineHeight: 20,
              color: colors.textSecondary,
            }}
          >
            Select your preferred language to use Ember easily
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flex: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <View>
            <RadioButtonCard
              data={languageSelectionData}
              selected={selected}
              setSelected={setSelected}
            />
          </View>
          <View>
            <PrimaryButton title={"Continue"} onPress={onPressPrimaryCTA} disabled={false} />
          </View>
        </View>
      </View>
    </Screen>
  )
}

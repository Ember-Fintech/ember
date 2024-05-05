import React from "react"
import { View, Text, ImageBackground } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { useTheme } from "app/hooks/useTheme"
import verified from "app/assets/images/verified.png"
import PrimaryButton from "app/components/Button"
import Button from "app/components/Button"
import { useLoggedIn } from "app/hooks/useLoggedIn"

type OnboardSuccessScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.OnboardSuccess>
}

export const OnboardSuccessScreen: React.FC<OnboardSuccessScreenProps> = ({ navigation, route }) => {
  const { colors } = useTheme()
  const { changeLoggedInStatus } = useLoggedIn();
  const {heading, subHeading, ctaLabel, navigateTo} = route?.params;

  const onPressCta = () => {
    // TODO:- navigate to the next screen
    if(navigateTo === AppRoutes.MainAppStack) {
      changeLoggedInStatus();
      return;
    }
    navigation.navigate(navigateTo)
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primaryColor,
      }}
    >
      <ImageBackground
        style={{
          paddingTop: 60,
          flex: 0.72,
        }}
        source={verified}
      ></ImageBackground>
      <View
        style={{
          flex: 0.28,
          backgroundColor: colors.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 16,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Sans-SemiBold",
              fontSize: 24,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            {heading}
          </Text>
          <Text
            style={{
              fontFamily: "Inter-Regular",
              fontSize: 14,
              textAlign: "center",
              marginTop: 12,
            }}
          >
            {subHeading}
          </Text>
        </View>
        <View
          style={{
            marginBottom: 10,
          }}
        >
          <Button.Primary label={ctaLabel} onPress={onPressCta} disabled={false} />
        </View>
      </View>
    </View>
  )
}

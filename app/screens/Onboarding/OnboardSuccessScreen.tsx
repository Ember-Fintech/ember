import React from "react"
import { View, Text, Button, ImageBackground } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { OnboardingStackParams } from "app/navigators/OnboardingStack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { useTheme } from "app/hooks/useTheme"
import verified from "app/assets/images/verified.png"
import PrimaryButton from "app/components/PrimaryButton"

type OnboardSuccessScreenProps = {
  navigation: StackScreenProps<OnboardingStackParams, AppRoutes.OnboardSuccess>
}

export const OnboardSuccessScreen: React.FC<OnboardSuccessScreenProps> = ({ navigation }) => {
  const { colors } = useTheme()

    const onPressCta = () => {
      // TODO:- navigate to the next screen
      navigation.navigate(AppRoutes.CompanyDetails);
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
              Hurray! You are Verified!
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 14,
                textAlign: "center",
                marginTop: 12,
              }}
            >
              You are just a few steps away to begin your Emberful journey with us.
            </Text>
          </View>
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <PrimaryButton title={"Get Started"} onPress={onPressCta} disabled={false} />
          </View>
        </View>
      </View>
    )
}

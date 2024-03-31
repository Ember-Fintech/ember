import React, { FC, useState } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button } from "app/components"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import { useHeader } from "../utils/useHeader"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import LinkButton from "app/components/LinkButton"
import RadioButtonWithLabel from "app/components/RadioButtonWithLabel"
import { Icon, Text } from "@gluestack-ui/themed"
import CustomInput from "app/components/Input"
import ThreeDView1 from "assets/icons/ThreeDView1.js"

const welcomeLogo = require("../../assets/images/logo.png")

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = (_props) => {
  const { navigation } = _props
  const [value, setValue] = useState('banana');

  function goNext() {
    navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
  }

  useHeader(
    {
      rightTx: "common.logOut",
      onRightPress: () => {},
    },
    [],
  )

  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        <Text
          testID="welcome-heading"
          style={$welcomeHeading}
          tx="welcomeScreen.readyForLaunch"
          preset="heading"
        />
        
        <Text fontFamily="Sans-SemiBold">Hello</Text>
        <RadioButtonWithLabel
          label={"Label"}
          subLabel={"subLabel"}
          description={"description"}
          size={"sm"}
          JsxElement={() => (
            <LinkButton
              title={"Link Button"}
              showRightArrow={false}
              type={"default"}
              disabled={false}
              onPress={() => {
                console.log("pressed")
              }}
              textColor={"#444CE7"}
              textStyle={{}}
              viewStyle={{}}
            />
          )}
          onChange={(e) => {
            console.log('this is the element', e);
            setValue(e);
          }}
          value={value}
         />

        <CustomInput
          errorMessage={"Sample Error"}
          infoMessage={"Here goes the information"}
          leftElement={<Text>{"Prefix"}</Text>}
          rightElement={<Text>{"Suffix"}</Text>}
          leftIcon={
            <Icon as={ThreeDView1} color={"red"} size="sm" onPress={() => console.log("hello")} />
          }
          rightIcon={
            <Icon as={ThreeDView1} color={"red"} size="sm" onPress={() => console.log("hello")} />
          }
          placeholder={"Placeholder"}
          label={"Address"}
        />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <Text tx="welcomeScreen.postscript" size="md" />

        <Button
          testID="next-screen-button"
          preset="reversed"
          tx="welcomeScreen.letsGo"
          onPress={goNext}
        />
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
}
const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.xxl,
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
}

import React, { ReactElement, useEffect, useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text, { HEADER_STYLE_MAP } from "app/components/typography/Text"
import { ScanAndPayStackParams } from "app/navigators/ScanAndPayStack"
import { ImageURISource, TextInput, View, ViewStyle } from "react-native"
import { Avatar, ListItem, Spacings } from "react-native-ui-lib"
import Button from "app/components/Button"
import { useHeaderHeight } from "@react-navigation/elements"
import { useNavigation } from "@react-navigation/native"
import { useUpiTransaction } from "app/hooks/useUpiTransaction"

export const PaymentProvider = ({
  title,
  subtitle,
  avatarSource,
  rightElement,
  disabled,
  containerStyle,
}: {
  title: string
  subtitle: string
  avatarSource: ImageURISource
  rightElement?: ReactElement
  disabled?: boolean
  containerStyle?: ViewStyle
}) => {
  return (
    <ListItem
      style={{
        paddingHorizontal: Spacings.s2,
        backgroundColor: "white",
        borderRadius: Spacings.s4,
        ...containerStyle,
      }}
      disabled={disabled}
    >
      <ListItem.Part left>
        <Avatar size={35} source={avatarSource} />
      </ListItem.Part>
      <ListItem.Part middle containerStyle={{ marginLeft: Spacings.s4 }}>
        <View>
          <Text.Body size={"md"} weight={"semi-bold"}>
            {title}
          </Text.Body>
          <Text.Caption color={"#667085"}>{subtitle}</Text.Caption>
        </View>
        <ListItem.Part right>{rightElement}</ListItem.Part>
      </ListItem.Part>
    </ListItem>
  )
}

type PaymentConfigProps = {
  navigation: StackScreenProps<ScanAndPayStackParams, AppRoutes.PaymentConfig>
}
export const PaymentConfig: React.FC<PaymentConfigProps> = () => {
  const navigation = useNavigation()
  const setAmount = useUpiTransaction((state) => state.setAmount)
  const amount = useUpiTransaction((state) => state.amount)

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <Text.Body size={"lg"} weight={"semi-bold"} color={"#FFFFFF"}>
          Paying to
        </Text.Body>
      ),
      headerTintColor: "#FFFFFF",
      headerBackTitle: " ",
      headerTitleStyle: { color: "white" },
      headerTransparent: true,
    })
  }, [])
  return (
    <Screen
      keyboardOffset={0}
      safeAreaEdges={["top"]}
      preset={"fixed"}
      style={{ marginTop: useHeaderHeight() }}
      bgSource={require("../../../assets/background/ripple-top-right.png")}
    >
      <View style={{ height: "100%" }}>
        <View style={{ flex: 0.7, paddingHorizontal: Spacings.s5, marginTop: Spacings.s2 }}>
          <PaymentProvider
            disabled={true}
            title={"Hello"}
            subtitle={"I'm subtitle"}
            avatarSource={require("../../../assets/images/app-icon-all.png")}
            containerStyle={{ backgroundColor: "#D0C0FF" }}
          />
          <View style={{ alignItems: "center", marginTop: Spacings.s10 }}>
            <Text.Body color={"white"} size={"sm"} style={{ marginBottom: Spacings.s2 }}>
              Enter amount
            </Text.Body>
            <View style={{ flexDirection: "row" }}>
              <Text.Heading
                size={"xl"}
                color={"white"}
                style={{ marginRight: Spacings.s4, fontFamily: "Sans-Medium" }}
              >
                ₹
              </Text.Heading>
              <TextInput
                returnKeyType={"done"}
                keyboardType={"numeric"}
                value={amount}
                onChangeText={setAmount}
                style={{
                  ...HEADER_STYLE_MAP.xl,
                  fontFamily: "Sans-Medium",
                  color: "white",
                  minWidth: 50,
                }}
                autoFocus
                cursorColor={"#FDE272"}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.3,
            backgroundColor: "#F9FAFB",
            paddingHorizontal: Spacings.s5,
            borderTopRightRadius: Spacings.s4,
            borderTopLeftRadius: Spacings.s4,
            justifyContent: "space-evenly",
            minHeight: 80,
          }}
        >
          <PaymentProvider
            disabled={true}
            title={"Hello"}
            subtitle={"I'm subtitle"}
            avatarSource={require("../../../assets/images/app-icon-all.png")}
            rightElement={<Button.Outlined size={"sm"} wrap={true} label={"Edit"} />}
          />
          <Button.Primary
            onPress={() => {
              navigation.navigate(AppRoutes.UpiPinScreen)
            }}
            disabled={Number(amount) === 0}
            label={`Pay ${Number(amount) > 0 ? `₹${amount}` : ""}`}
          />
        </View>
      </View>
    </Screen>
  )
}

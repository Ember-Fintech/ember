import React from "react"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { ImageURISource, Pressable, View } from "react-native"
import { Avatar, Spacings } from "react-native-ui-lib"
import { useNavigation } from "@react-navigation/native"
import { AppRoutes } from "app/navigators/constants/appRoutes"

const AVATAR_SIZE = 60
const QuickActionItem = (props: { label: string; img: ImageURISource; onPress: () => void }) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{ paddingHorizontal: Spacings.s2, flex: 1, alignItems: "center" }}
    >
      <Avatar
        size={AVATAR_SIZE}
        backgroundColor={"#D1C9E9"}
        source={props.img}
        imageStyle={{ resizeMode: "contain", height: 30, top: 15 }}
      />
      <Text.Caption style={{ textAlign: "center", marginTop: Spacings.s1 }}>
        {props.label}
      </Text.Caption>
    </Pressable>
  )
}

export const HomePage = (): React.FC => {
  const navigation = useNavigation()
  return (
    <Screen bgSource={require("../../../assets/background/ripple-center.png")}>
      <View style={{ height: "100%" }}>
        <View style={{ flex: 0.25 }}></View>
        <View
          style={{
            flex: 0.75,
            backgroundColor: "white",
            borderTopRightRadius: Spacings.s10,
            borderTopLeftRadius: Spacings.s10,
          }}
        >
          <View
            style={{
              marginHorizontal: Spacings.s6,
              marginTop: Spacings.s10,
              paddingVertical: Spacings.s2,
              borderRadius: Spacings.s4,
              backgroundColor: "#EAECF0",
              flexDirection: "row",
            }}
          >
            <QuickActionItem
              img={require("../../../assets/icons/withdraw.png")}
              onPress={() => {
                navigation.navigate(AppRoutes.KYC)
              }}
              label={"Withdraw"}
            />
            <QuickActionItem
              img={require("../../../assets/icons/scan-and-pay.png")}
              onPress={() => {
                navigation.navigate(AppRoutes.ScanAndPayStack, { screen: AppRoutes.UpiScanner })
              }}
              label={"Scan & Pay"}
            />
            <QuickActionItem
              img={require("../../../assets/icons/card-settings.png")}
              onPress={() => {
                navigation.navigate(AppRoutes.CardsDetail)
              }}
              label={"Card Settings"}
            />
          </View>
        </View>
      </View>
    </Screen>
  )
}

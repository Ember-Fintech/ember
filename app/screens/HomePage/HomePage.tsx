import React from "react"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { ImageBackground, ImageURISource, Pressable, View } from "react-native"
import { Avatar, Spacings } from "react-native-ui-lib"
import { useNavigation } from "@react-navigation/native"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import background from "assets/background/complete-kyc.png"
import Button from "app/components/Button"

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

const frontCardContent = (navigation: any) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={background}
      style={{
        flex: 1,
        zIndex: 2,
        paddingHorizontal: 12,
        paddingVertical: 20,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ justifyContent: "space-between", flex: 1, marginVertical: Spacings.s1 }}>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}
        >
          <Text.Body weight={"semi-bold"} color={"#684DB6"}>
            Get upto{"\n"}
            <Text.Heading weight={"semi-bold"} size={"md"} color={"#684DB6"}>
              ₹50,000
            </Text.Heading>
          </Text.Body>
          <Text.Body style={{ textAlign: "right" }} weight={"semi-bold"} color={"#684DB6"}>
            Next Salary on{"\n"}
            <Text.Body size={"md"} weight={"semi-bold"} color={"#684DB6"}>
              1st June’24
            </Text.Body>
          </Text.Body>
        </View>
        <Button.Primary
          onPress={() => navigation.navigate(AppRoutes.KYC)}
          style={{ backgroundColor: "#926CFF" }}
          label={"Complete KYC"}
        />
      </View>
    </ImageBackground>
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
              position: "absolute",
              top: "-25%",
              width: "90%",
              height: 200,
              backgroundColor: "#fff",
              backfaceVisibility: "hidden",
              borderRadius: 15,
              marginHorizontal: "5%",
              marginTop: 12,
            }}
          >
            {frontCardContent(navigation)}
          </View>

          <View
            style={{
              marginHorizontal: Spacings.s6,
              marginTop: "25%",
              paddingVertical: Spacings.s2,
              borderRadius: Spacings.s4,
              backgroundColor: "#EAECF0",
              flexDirection: "row",
            }}
          >
            {/* <QuickActionItem */}
            {/*   img={require("../../../assets/icons/withdraw.png")} */}
            {/*   onPress={() => { */}
            {/*     navigation.navigate(AppRoutes.KYC) */}
            {/*   }} */}
            {/*   label={"Withdraw"} */}
            {/* /> */}
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

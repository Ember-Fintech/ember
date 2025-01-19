import React, { useState } from "react"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { Image, ImageBackground, ImageURISource, Pressable, View } from "react-native"
import { Avatar, Spacings } from "react-native-ui-lib"
import { useNavigation } from "@react-navigation/native"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import background from "assets/background/complete-kyc.png"
import Button from "app/components/Button"
import company from "assets/home/company.png"
import notification from "assets/home/NotificationBell.png"
import { usePage } from "app/hooks/usePageVerification"
import FlippableCard from "app/components/Cards/FlipableCard"
import backgroundF from "assets/background/card-background.png"
import brand from "assets/cards/brand.png"
import rupay from "assets/cards/rupay.png"
import { Ionicons as Icons } from "@expo/vector-icons"
import { ProgressBar } from "react-native-ui-lib"

const AVATAR_SIZE = 60
const QuickActionItem = (props: { label: string; img: ImageURISource; onPress: () => void }) => {
  return (
    <Pressable
      onPress={props?.onPress}
      style={{ paddingHorizontal: Spacings.s2, flex: 1, alignItems: "center" }}
    >
      <Avatar
        size={AVATAR_SIZE}
        backgroundColor={"#D1C9E9"}
        source={props?.img}
        imageStyle={{ resizeMode: "contain", height: 30, top: 15 }}
      />
      <Text.Caption style={{ textAlign: "center", marginTop: Spacings.s1 }}>
        {props?.label}
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

const frontCardContentFlippable = () => {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={backgroundF}
      style={{
        flex: 1,
        zIndex: 1,
        paddingHorizontal: 12,
        paddingVertical: 20,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <Image
            source={brand}
            style={{
              height: 34,
              width: 34,
            }}
          />
          <Text.Body
            size="lg"
            weight="bold"
            style={{
              lineHeight: 20,
              color: "#FFF",
            }}
          >
            xx2224
          </Text.Body>
          <Icons name="eye-off-outline" color={"#FFF"} size={20} style={{ opacity: 0 }} />
        </View>
        <View>
          <Image
            source={rupay}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </View>
      </View>
      <View>
        <Text.Body
          size="lg"
          weight="bold"
          style={{
            lineHeight: 18,
            color: "#FFF",
          }}
        >
          ₹ 37,500
          <Text.Caption
            style={{
              fontFamily: "Sans-Medium",
              color: "#FFF",
            }}
          >
            {"  "}of{"  "}
          </Text.Caption>
          <Text.Body
            size="lg"
            weight="bold"
            style={{
              color: "#FFF",
            }}
          >
            ₹ 50,000{"  "}
          </Text.Body>
          <Text.Caption
            style={{
              fontFamily: "Sans-Medium",
              color: "#FFF",
            }}
          >
            available
          </Text.Caption>
        </Text.Body>
        <ProgressBar
          progress={80}
          progressColor={"rgba(83, 62, 146, 1)"}
          style={{
            backgroundColor: "#FFF",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text.Caption
            style={{
              color: "#FFF",
            }}
          >
            Card Details
          </Text.Caption>
          <Text.Body
            size="sm"
            weight="semi-bold"
            style={{
              textDecorationLine: "underline",
              color: "#FFF",
            }}
          >
            Click Here
          </Text.Body>
        </View>
        <View>
          <Text.Caption
            style={{
              color: "#FFF",
            }}
          >
            Next Salary On
          </Text.Caption>
          <Text.Body
            size="sm"
            weight="semi-bold"
            style={{
              color: "#FFF",
            }}
          >
            9th April’24
          </Text.Body>
        </View>
      </View>
    </ImageBackground>
  )
}

const backCardContent = (cvvHidden, setCvvHidden) => {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={backgroundF}
      style={{
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 20,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <Image
            source={brand}
            style={{
              height: 34,
              width: 34,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              columnGap: 10,
              opacity: 0,
            }}
          >
            <Text.Body
              size="lg"
              weight="bold"
              style={{
                lineHeight: 20,
              }}
            >
              2224...
            </Text.Body>
            <Icons name="eye-off-outline" color={"#FFF"} size={20} />
          </View>
        </View>
        <View>
          <Image
            source={rupay}
            resizeMode="contain"
            style={{
              height: 20,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text.Caption
            style={{
              fontFamily: "Sans-Medium",
              color: "#FFF",
            }}
          >
            Credit card number
          </Text.Caption>
          <Text.Body
            size="sm"
            weight="semi-bold"
            style={{
              color: "#FFF",
            }}
          >
            {cvvHidden ? "1233 1233 1233 2858" : "•••• •••• •••• 2858"}
          </Text.Body>
        </View>
        <View>
          <Text.Caption
            style={{
              color: "#FFF",
            }}
          >
            CVV
          </Text.Caption>
          <Text.Body
            size="sm"
            weight="semi-bold"
            style={{
              color: "#FFF",
            }}
          >
            {cvvHidden ? "•••" : "534"}
          </Text.Body>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text.Body
          size="sm"
          weight="semi-bold"
          style={{
            textDecorationLine: "underline",
            color: "#FFF",
          }}
        >
          Click to Flip
        </Text.Body>
        <View
          style={{
            flexDirection: "row",
            columnGap: 5,
            alignItems: "center",
          }}
        >
          <Icons name={cvvHidden ? "eye-outline" : "eye-off-outline"} color={"#FFF"} size={14} />
          <Text.Body
            size="sm"
            weight="semi-bold"
            onPress={() => {
              setCvvHidden((prev) => !prev)
            }}
            style={{
              textDecorationLine: "underline",
              color: "#FFF",
            }}
          >
            {cvvHidden ? "View CVV" : "Hide CVV"}
          </Text.Body>
        </View>
      </View>
    </ImageBackground>
  )
}

export const HomePage = (): React.FC => {
  const navigation = useNavigation()
  const { stepsDone } = usePage()
  const [cvvHidden, setCvvHidden] = useState<boolean>(false)
  return (
    <Screen bgSource={require("../../../assets/background/ripple-center.png")}>
      <View style={{ height: "100%" }}>
        <View style={{ flex: 0.3, marginHorizontal: 24, paddingTop: 14 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 12,
              }}
            >
              <Image
                source={company}
                resizeMode="contain"
                style={{
                  height: 46,
                  width: 46,
                }}
              />
              <View>
                <Text.Body
                  size="sm"
                  style={{
                    color: "#FFF",
                  }}
                >
                  Welcome 👋
                </Text.Body>
                <Text.Heading
                  size="xs"
                  weight="semi-bold"
                  style={{
                    color: "#FFF",
                  }}
                >
                  Ashita Taneja
                </Text.Heading>
              </View>
            </View>
            <View>
              <Image
                source={notification}
                resizeMode="contain"
                style={{
                  height: 46,
                  width: 46,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.75,
            backgroundColor: "white",
            borderTopRightRadius: Spacings.s10,
            borderTopLeftRadius: Spacings.s10,
          }}
        >
          {stepsDone.length >= 3 ? (
            <View
              style={{
                position: "absolute",
                top: "-25%",
                width: "100%",
                backfaceVisibility: "hidden",
              }}
            >
              <FlippableCard
                frontContent={frontCardContentFlippable()}
                backContent={backCardContent(cvvHidden, setCvvHidden)}
                frontStyle={undefined}
                backStyle={undefined}
                isFlippable
              />
            </View>
          ) : (
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
          )}

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

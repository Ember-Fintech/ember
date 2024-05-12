import TopTabBar, { SingleTopTabDataPoint } from "app/components/TopTabBar"
import Text from "app/components/typography/Text"
import React, { useCallback, useEffect, useState } from "react"
import { FlatList, Image, View } from "react-native"
import card from "assets/cards/card.png"
import { useNavigation } from "@react-navigation/native"
import { useHeaderHeight } from "@react-navigation/elements"
import { Screen } from "app/components"

interface ICardLimitData {
  index: number
  title: string
  limit: string
}

const topBarData: Array<SingleTopTabDataPoint> = [
  {
    index: 0,
    title: "Domestic",
  },
  {
    index: 1,
    title: "International",
  },
]

const cardLimitData: Array<ICardLimitData> = [
  {
    index: 0,
    title: "Online Transaction",
    limit: "₹40,000",
  },
  {
    index: 1,
    title: "Card Swipe",
    limit: "₹50,000",
  },
  {
    index: 2,
    title: "ATM Withdrawal",
    limit: "₹30,000",
  },
  {
    index: 3,
    title: "Contactless (Tap & Pay)",
    limit: "₹20,000",
  },
]

const CardsLimit = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <Text.Body size={"lg"} weight={"semi-bold"} color={"#000000"}>
          Manage Card Limits
        </Text.Body>
      ),
      headerTintColor: "#000000",
      headerBackTitle: " ",
      headerTitleStyle: { color: "white" },
      headerTransparent: true,
    })
  }, [])
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0)

  const renderDomesticCardLimitListItem = ({ item }: { item: ICardLimitData }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 17,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 16,
          }}
        >
          <View
            style={{
              padding: 14,
              backgroundColor: "rgba(249, 250, 251, 1)",
              borderRadius: 12,
            }}
          >
            <Image
              source={card}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
              }}
            />
          </View>
          <View>
            <Text.Body
              style={{
                color: "rgba(16, 24, 40, 1)",
                textAlign: "left",
                fontFamily: "Inter-Medium",
              }}
            >
              {item?.title}
            </Text.Body>
            <Text.Body
              style={{
                color: "rgba(97, 100, 108, 1)",
                textAlign: "left",
                fontFamily: "Inter-Medium",
              }}
            >
              {item?.limit}
            </Text.Body>
            <Text.Caption
              style={{
                color: "rgba(102, 112, 133, 1)",
                textAlign: "left",
                fontFamily: "Inter-Regular",
                fontSize: 10,
              }}
            >
              Set to per transaction limit
            </Text.Caption>
          </View>
        </View>
        <Text.Body
          style={{
            color: "rgba(125, 93, 219, 1)",
            textAlign: "left",
            fontFamily: "Inter-SemiBold",
          }}
        >
          Edit
        </Text.Body>
      </View>
    )
  }

  const renderDomesticCardLimits = () => {
    return (
      <View>
        <FlatList
          data={cardLimitData}
          renderItem={renderDomesticCardLimitListItem}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderColor: "rgba(242, 244, 247, 1)",
              }}
            />
          )}
        />
      </View>
    )
  }

  const renderInternationalCardLimitListItem = ({ item }: { item: ICardLimitData }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 17,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 16,
          }}
        >
          <View
            style={{
              padding: 14,
              backgroundColor: "rgba(249, 250, 251, 1)",
              borderRadius: 12,
            }}
          >
            <Image
              source={card}
              resizeMode="contain"
              style={{
                height: 20,
                width: 20,
              }}
            />
          </View>
          <View>
            <Text.Body
              style={{
                color: "rgba(16, 24, 40, 1)",
                textAlign: "left",
                fontFamily: "Inter-Medium",
              }}
            >
              {item?.title}
            </Text.Body>
            <Text.Body
              style={{
                color: "rgba(97, 100, 108, 1)",
                textAlign: "left",
                fontFamily: "Inter-Medium",
              }}
            >
              {item?.limit}
            </Text.Body>
            <Text.Caption
              style={{
                color: "rgba(102, 112, 133, 1)",
                textAlign: "left",
                fontFamily: "Inter-Regular",
                fontSize: 10,
              }}
            >
              Set to per transaction limit
            </Text.Caption>
          </View>
        </View>
        <Text.Body
          style={{
            color: "rgba(125, 93, 219, 1)",
            textAlign: "left",
            fontFamily: "Inter-SemiBold",
          }}
        >
          Edit
        </Text.Body>
      </View>
    )
  }

  const renderInternationalCardLimits = () => {
    return (
      <View>
        <FlatList
          data={cardLimitData}
          renderItem={renderInternationalCardLimitListItem}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderColor: "rgba(242, 244, 247, 1)",
              }}
            />
          )}
        />
      </View>
    )
  }

  const renderComponentAccordingToMenuIndex = useCallback(() => {
    if (activeMenuIndex === 0) {
      return renderDomesticCardLimits()
    }
    return renderInternationalCardLimits()
  }, [activeMenuIndex])

  return (
    <Screen style={{ marginTop: useHeaderHeight() }}>
      <View
        style={{
          backgroundColor: "#FFF",
          height: "100%",
          paddingVertical: 10,
          paddingHorizontal: 24,
        }}
      >
        <TopTabBar
          data={topBarData}
          activeMenuIndex={activeMenuIndex}
          setActiveMenuIndex={setActiveMenuIndex}
        />
        {renderComponentAccordingToMenuIndex()}
      </View>
    </Screen>
  )
}

export default CardsLimit

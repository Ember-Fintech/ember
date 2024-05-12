import TopTabBar, { SingleTopTabDataPoint } from "app/components/TopTabBar"
import Text from "app/components/typography/Text"
import React, { useCallback, useEffect, useState } from "react"
import { FlatList, Image, View } from "react-native"
import card from "assets/cards/card.png"
import { Switch } from "react-native-ui-lib"
import { Screen } from "app/components"
import { useHeaderHeight } from "@react-navigation/elements"
import { useNavigation } from "@react-navigation/native"

interface ICardLockData {
  index: number
  title: string
  initialValue: boolean
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

const cardLockData: Array<ICardLockData> = [
  {
    index: 0,
    title: "Online Transaction",
    initialValue: true,
  },
  {
    index: 1,
    title: "Card Swipe",
    initialValue: false,
  },
  {
    index: 2,
    title: "ATM Withdrawal",
    initialValue: true,
  },
  {
    index: 3,
    title: "Contactless (Tap & Pay)",
    initialValue: true,
  },
]

const CardsLock = () => {
  const navigation = useNavigation()

  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0)

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <Text.Body size={"lg"} weight={"semi-bold"} color={"#000000"}>
          Card locks
        </Text.Body>
      ),
      headerTintColor: "#000000",
      headerBackTitle: " ",
      headerTitleStyle: { color: "white" },
      headerTransparent: true,
    })
  }, [])
  const renderDomesticCardLockListItem = ({ item }: { item: ICardLockData }) => {
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

          <Text.Body
            style={{
              color: "rgba(16, 24, 40, 1)",
              textAlign: "left",
              fontFamily: "Inter-Medium",
            }}
          >
            {item?.title}
          </Text.Body>
        </View>
        <Switch
          value={item?.initialValue}
          onValueChange={() => console.log("value changed")}
          thumbColor={"#FFF"}
          onColor={"rgba(83, 61, 149, 1)"}
          offColor={"rgba(242, 244, 247, 1)"}
        />
      </View>
    )
  }

  const renderDomesticCardLocks = () => {
    return (
      <View>
        <FlatList
          data={cardLockData}
          renderItem={renderDomesticCardLockListItem}
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

  const renderInternationalCardLockListItem = ({ item }: { item: ICardLockData }) => {
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

          <Text.Body
            style={{
              color: "rgba(16, 24, 40, 1)",
              textAlign: "left",
              fontFamily: "Inter-Medium",
            }}
          >
            {item?.title}
          </Text.Body>
        </View>
        <Switch
          value={item?.initialValue}
          onValueChange={() => console.log("value changed")}
          thumbColor={"#FFF"}
          onColor={"rgba(83, 61, 149, 1)"}
          offColor={"rgba(242, 244, 247, 1)"}
        />
      </View>
    )
  }

  const renderInternationalCardLocks = () => {
    return (
      <View>
        <FlatList
          data={cardLockData}
          renderItem={renderInternationalCardLockListItem}
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
      return renderDomesticCardLocks()
    }
    return renderInternationalCardLocks()
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

export default CardsLock

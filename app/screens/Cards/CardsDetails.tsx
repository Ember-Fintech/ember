import FlippableCard from "app/components/Cards/FlipableCard"
import Text from "app/components/typography/Text"
import React, { useCallback, useRef, useEffect, useState } from "react"
import { FlatList, Image, ImageBackground, TouchableOpacity, View } from "react-native"
import background from "assets/background/card-background.png"
import brand from "assets/cards/brand.png"
import rupay from "assets/cards/rupay.png"
import card from "assets/cards/card.png"
import block from "assets/cards/block.png"
import limits from "assets/cards/limits.png"
import resetPin from "assets/cards/resetPin.png"
import secure from "assets/cards/secure.png"
import budget from "assets/cards/budget.png"
import options from "assets/cards/options.png"
import banking from "assets/cards/banking.png"
import { Ionicons as Icons, Entypo } from "@expo/vector-icons"
import { useTheme } from "app/hooks/useTheme"
import { ProgressBar } from "react-native-ui-lib"
import TopTabBar, { SingleTopTabDataPoint } from "app/components/TopTabBar"
import BlockCardModal from "app/components/Modals/BlockCardModal"
import { AppRoutes } from "app/navigators/constants/appRoutes"
// import TakeAndConfirmSelfieModal from "app/components/Modals/TakeAndConfirmSelfie"
// import BankVerificationModal from "app/components/Modals/BankVerificationModal"
import AadharAuthModal from "app/components/Modals/AadharAuthModal"
import { Screen } from "app/components"
import { useHeaderHeight } from "@react-navigation/elements"

interface ICardManageData {
  index: number
  title: string
  icon: any
  onPress: () => void
}

const topBarData: Array<SingleTopTabDataPoint> = [
  {
    index: 0,
    title: "Manage Card",
  },
  {
    index: 1,
    title: "Card Details",
  },
]

const cardDetailsData: Array<any> = [
  {
    index: 0,
    heading: "Secure Transactions",
    subHeading: "Advanced protection, always.",
    backgroundColor: "rgba(204, 251, 239, 1)",
    icon: secure,
  },
  {
    index: 1,
    heading: "Smart Budgeting",
    subHeading: "Budget and track with ease.",
    backgroundColor: "rgba(254, 240, 199, 1)",
    icon: budget,
  },
  {
    index: 2,
    heading: "Investment Options",
    subHeading: "Diverse avenues to grow wealth.",
    backgroundColor: "rgba(220, 250, 230, 1)",
    icon: options,
  },
  {
    index: 3,
    heading: "Unified Banking",
    subHeading: "All accounts, one view.",
    backgroundColor: "rgba(186, 174, 222, 1)",
    icon: banking,
  },
]

const CardsDetails = ({ navigation }) => {
  const { colors } = useTheme()
  const [cvvHidden, setCvvHidden] = useState<boolean>(false)
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0)
  const [showBlockCardModal, setShowBlockCardModal] = useState<boolean>(false)

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <Text.Body size={"lg"} weight={"semi-bold"} color={"#000000"}>
          Edit Card
        </Text.Body>
      ),
      headerTintColor: "#000000",
      headerBackTitle: " ",
      headerTitleStyle: { color: "white" },
      headerTransparent: true,
    })
  }, [])
  const [showSelfieModal, setShowSelfieModal] = useState<boolean>(false)

  const manageCardData: Array<ICardManageData> = [
    {
      index: 0,
      title: "Card Locks",
      icon: card,
      onPress: () => {
        navigation.navigate(AppRoutes.CardsLock)
      },
    },
    {
      index: 1,
      title: "Manage Card Limits",
      icon: limits,
      onPress: () => {
        navigation.navigate(AppRoutes.CardsLimit)
      },
    },
    {
      index: 2,
      title: "Set/Reset PIN",
      icon: resetPin,
      onPress: () => {
        setShowSelfieModal(true)
      },
    },
    {
      index: 3,
      title: "Block Card",
      icon: block,
      onPress: () => {
        setShowBlockCardModal(true)
      },
    },
  ]

  const frontCardContent = () => {
    return (
      <ImageBackground
        resizeMode="stretch"
        source={background}
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
                color: colors.white,
              }}
            >
              2224...
            </Text.Body>
            <Icons name="eye-off-outline" color={colors.white} size={20} />
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
              color: colors.white,
            }}
          >
            ₹ 37,500
            <Text.Caption
              style={{
                fontFamily: "Sans-Medium",
                color: colors.white,
              }}
            >
              {"  "}of{"  "}
            </Text.Caption>
            <Text.Body
              size="lg"
              weight="bold"
              style={{
                color: colors.white,
              }}
            >
              ₹ 50,000{"  "}
            </Text.Body>
            <Text.Caption
              style={{
                fontFamily: "Sans-Medium",
                color: colors.white,
              }}
            >
              available
            </Text.Caption>
          </Text.Body>
          <ProgressBar
            progress={80}
            progressColor={colors.primaryColor}
            style={{
              backgroundColor: colors.white,
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
                color: colors.white,
              }}
            >
              Card Details
            </Text.Caption>
            <Text.Body
              size="sm"
              weight="semi-bold"
              style={{
                textDecorationLine: "underline",
                color: colors.white,
              }}
            >
              Click Here
            </Text.Body>
          </View>
          <View>
            <Text.Caption
              style={{
                color: colors.white,
              }}
            >
              Next Salary On
            </Text.Caption>
            <Text.Body
              size="sm"
              weight="semi-bold"
              style={{
                color: colors.white,
              }}
            >
              9th April’24
            </Text.Body>
          </View>
        </View>
      </ImageBackground>
    )
  }

  const backCardContent = () => {
    return (
      <ImageBackground
        resizeMode="stretch"
        source={background}
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
              <Icons name="eye-off-outline" color={colors.white} size={20} />
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
                color: colors.white,
              }}
            >
              Credit card number
            </Text.Caption>
            <Text.Body
              size="sm"
              weight="semi-bold"
              style={{
                color: colors.white,
              }}
            >
              {cvvHidden ? "1233 1233 1233 2858" : "•••• •••• •••• 2858"}
            </Text.Body>
          </View>
          <View>
            <Text.Caption
              style={{
                color: colors.white,
              }}
            >
              CVV
            </Text.Caption>
            <Text.Body
              size="sm"
              weight="semi-bold"
              style={{
                color: colors.white,
              }}
            >
              {cvvHidden ? "•••" : "534"}
            </Text.Body>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            columnGap: 5,
            alignItems: "center",
          }}
        >
          <Icons
            name={cvvHidden ? "eye-outline" : "eye-off-outline"}
            color={colors.white}
            size={14}
          />
          <Text.Body
            size="sm"
            weight="semi-bold"
            onPress={() => {
              setCvvHidden((prev) => !prev)
            }}
            style={{
              textDecorationLine: "underline",
              color: colors.white,
            }}
          >
            {cvvHidden ? "View CVV" : "Hide CVV"}
          </Text.Body>
        </View>
      </ImageBackground>
    )
  }

  const renderManageCardListItem = ({ item }: { item: ICardManageData }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          item.onPress()
        }}
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
              source={item?.icon}
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

        <Entypo name="chevron-right" color={"rgba(102, 112, 133, 1)"} size={20} />
      </TouchableOpacity>
    )
  }

  const renderManageCard = () => {
    return (
      <View>
        <FlatList
          data={manageCardData}
          renderItem={renderManageCardListItem}
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

  const renderCardDetailList = ({ item, index }) => {
    return (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          borderWidth: 1,
          borderRadius: 12,
          width: "48%",
          paddingVertical: 20,
          paddingHorizontal: 16,
          borderColor: "rgba(242, 244, 247, 1)",
          marginLeft: index % 2 === 0 ? "0" : "4%",
        }}
      >
        <View
          style={{
            height: 36,
            width: 36,
            backgroundColor: item.backgroundColor,
            borderRadius: 18,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={item.icon}
            style={{
              height: 20,
              width: 20,
            }}
          />
        </View>
        <Text.Caption
          style={{
            color: "rgba(16, 24, 40, 1)",
            textAlign: "center",
          }}
        >
          {item.heading}
        </Text.Caption>
        <Text.Caption
          style={{
            color: "rgba(102, 112, 133, 1)",
            textAlign: "center",
          }}
        >
          {item.subHeading}
        </Text.Caption>
      </View>
    )
  }

  const renderCardDetails = () => {
    return (
      <View>
        <View
          style={{
            marginTop: 16,
            marginBottom: 8,
          }}
        >
          <Text.Body
            size="md"
            weight="semi-bold"
            style={{
              color: "black",
            }}
          >
            Best offers on this card!
          </Text.Body>
        </View>
        <FlatList
          data={cardDetailsData}
          renderItem={renderCardDetailList}
          numColumns={2}
          contentContainerStyle={{
            rowGap: 14,
          }}
        />
      </View>
    )
  }

  const renderComponentAccordingToMenuIndex = useCallback(() => {
    if (activeMenuIndex === 0) {
      return renderManageCard()
    }
    return renderCardDetails()
  }, [activeMenuIndex])

  return (
    <Screen style={{ marginTop: useHeaderHeight() }}>
      <View style={{ height: "100%" }}>
        <FlippableCard
          frontContent={frontCardContent()}
          backContent={backCardContent()}
          frontStyle={undefined}
          backStyle={undefined}
          isFlippable
        />
        <View
          style={{
            marginTop: 230,
            backgroundColor: colors.white,
            flex: 1,
            paddingTop: 20,
            paddingHorizontal: 24,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <TopTabBar
            data={topBarData}
            activeMenuIndex={activeMenuIndex}
            setActiveMenuIndex={setActiveMenuIndex}
          />
          {renderComponentAccordingToMenuIndex()}
        </View>
      </View>

      <BlockCardModal isVisible={showBlockCardModal} setIsVisible={setShowBlockCardModal} />
      <AadharAuthModal isVisible={showSelfieModal} setIsVisible={setShowSelfieModal} />
    </Screen>
  )
}

export default CardsDetails

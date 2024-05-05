import FlippableCard from "app/components/Cards/FlipableCard"
import Text from "app/components/typography/Text"
import React, { useCallback, useState } from "react"
import { FlatList, Image, ImageBackground, View } from "react-native"
import background from "assets/background/card-background.png"
import brand from "assets/cards/brand.png"
import rupay from "assets/cards/rupay.png"
import card from "assets/cards/card.png"
import block from "assets/cards/block.png"
import limits from "assets/cards/limits.png"
import resetPin from "assets/cards/resetPin.png"
import { Ionicons as Icons, Entypo } from "@expo/vector-icons"
import { useTheme } from "app/hooks/useTheme"
import { ProgressBar } from "react-native-ui-lib"
import TopTabBar, { SingleTopTabDataPoint } from "app/components/TopTabBar"

interface ICardManageData {
  index: number
  title: string
  icon: any
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

const manageCardData: Array<ICardManageData> = [
  {
    index: 0,
    title: "Card Locks",
    icon: card,
  },
  {
    index: 1,
    title: "Manage Card Limits",
    icon: limits,
  },
  {
    index: 2,
    title: "Set/Reset PIN",
    icon: resetPin,
  },
  {
    index: 3,
    title: "Block Card",
    icon: block,
  },
]

const CardsDetails = () => {
  const { colors } = useTheme()
  const [cvvHidden, setCvvHidden] = useState<boolean>(false)
  const [activeMenuIndex, setActiveMenuIndex] = useState<number>(0)

  const frontCardContent = () => {
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
            <Text.Body
              size="lg"
              weight="bold"
              style={{
                lineHeight: 20,
                color: colors.white
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
              color: colors.white
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
            <Text.Body size="lg" weight="bold" style={{
              color: colors.white
            }}>
              ₹ 50,000{"  "}
            </Text.Body>
            <Text.Caption
              style={{
                fontFamily: "Sans-Medium",
                color: colors.white
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
            <Text.Caption style={{
              color: colors.white
            }}>Card Details</Text.Caption>
            <Text.Body
              size="sm"
              weight="semi-bold"
              style={{
                textDecorationLine: "underline",
                color: colors.white
              }}
            >
              Click Here
            </Text.Body>
          </View>
          <View>
            <Text.Caption style={{
              color: colors.white
            }}>Next Salary On</Text.Caption>
            <Text.Body size="sm" weight="semi-bold" style={{
              color: colors.white
            }}>
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
                color: colors.white
              }}
            >
              Credit card number
            </Text.Caption>
            <Text.Body size="sm" weight="semi-bold" style={{
              color: colors.white
            }}>
              {cvvHidden ? "1233 1233 1233 2858" : "•••• •••• •••• 2858"}
            </Text.Body>
          </View>
          <View>
            <Text.Caption style={{
              color: colors.white
            }}>CVV</Text.Caption>
            <Text.Body size="sm" weight="semi-bold" style={{
              color: colors.white
            }}>
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
              color: colors.white
            }}
          >
            {cvvHidden ? "View CVV" : "Hide CVV"}
          </Text.Body>
        </View>
      </ImageBackground>
    )
  }

  const renderManageCardListItem = ({ item }: {item: ICardManageData}) => {
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
      </View>
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

  const renderCardDetails = () => {
    return (
      <View>
        <Text.Body
          style={{
            color: "black",
          }}
        >
          Card Details
        </Text.Body>
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
    <View
      style={{
        flex: 1,
      }}
    >
      <FlippableCard
        frontContent={frontCardContent()}
        backContent={backCardContent()}
        frontStyle={undefined}
        backStyle={undefined}
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
  )
}

export default CardsDetails

import React, { useEffect, useMemo, useState } from "react"
import { Screen } from "app/components"
import { View } from "react-native"
import { Spacings } from "react-native-ui-lib"
import { useNavigation } from "@react-navigation/native"
import Text from "app/components/typography/Text"
import { useHeaderHeight } from "@react-navigation/elements"
import Button from "app/components/Button"
import { Activate } from "app/components/KycVerification/Activate"
import { TakeSelfie } from "app/components/KycVerification/TakeSelfie"
import { PanDetails } from "app/components/KycVerification/PanDetails"
import { AadharDetails } from "app/components/KycVerification/AadharDetails"

const RightElement = ({ page }: { page: number }) => {
  return (
    <View style={{ marginRight: Spacings.s4 }}>
      <Text.Body size={"md"} color={"white"}>
        {page === 0 ? "Steps" : `Step ${page} of 4`}
      </Text.Body>
    </View>
  )
}

const getPageDetails = (page: number) => {
  switch (page) {
    case 1:
      return {
        title: "Take Selfie",
        subtitle: "Take a selfie for verification",
        buttonLabel: "Continue",
      }
    case 2:
      return {
        title: "PAN Details",
        subtitle: "This is to access your CIBIL credit report",
        buttonLabel: "Continue",
      }
    case 3:
      return {
        title: "Address Proof",
        subtitle: "This is to access your CIBIL credit report",
        buttonLabel: "Confirm Verification",
      }
    case 4:
      return {
        title: "Activate Ember Account",
        subtitle: "Please update the following details",
        buttonLabel: "Confirm Verification",
      }
    default:
      return {
        title: "Activate Ember Account",
        subtitle: "Please update the following details",
        buttonLabel: "Confirm Verification",
      }
  }
}

export const KycVerification = (): React.FC => {
  const [page, setPage] = useState<number>(0)
  const navigation = useNavigation()
  const { title, subtitle, buttonLabel } = getPageDetails(page)
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerRight: () => <RightElement page={page} />,
      headerTintColor: "#FFFFFF",
      headerBackTitle: " ",
      headerTitle: "",
      headerTitleStyle: { color: "white" },
      headerTransparent: true,
    })
  }, [page])

  const renderContent = useMemo(() => {
    switch (page) {
      case 1:
        return TakeSelfie
      case 2:
        return PanDetails
      case 3:
        return AadharDetails
      case 4:
        return () => null
      default:
        return Activate
    }
  }, [page])
  return (
    <Screen
      style={{ marginTop: useHeaderHeight() }}
      bgSource={require("../../../assets/background/ripple-center.png")}
    >
      <View style={{ height: "100%" }}>
        <View style={{ flex: 0.35, marginHorizontal: Spacings.s5, marginTop: Spacings.s2 }}>
          <Text.Heading size={"sm"} weight={"semi-bold"} color={"#FFF"}>
            {title}
          </Text.Heading>
          <Text.Body size={"sm"} color={"#A393D3"} style={{ marginTop: Spacings.s2 }}>
            {subtitle}
          </Text.Body>
        </View>
        <View
          style={{
            flex: 0.65,
            backgroundColor: "#F2F4F7",
            borderTopRightRadius: Spacings.s10,
            borderTopLeftRadius: Spacings.s10,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: Spacings.s5,
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "white",
              position: "relative",
              top: "-30%",
              borderRadius: Spacings.s3,
              minHeight: 200,
            }}
          >
            {renderContent()}
          </View>
          <Button.Primary
            style={{
              marginBottom: Spacings.s10,
            }}
            onPress={() => {
              setPage((p) => p + 1)
            }}
            label={buttonLabel}
          />
        </View>
      </View>
    </Screen>
  )
}

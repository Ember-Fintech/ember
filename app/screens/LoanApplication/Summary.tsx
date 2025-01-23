import React, { useCallback } from "react"
import Text from "app/components/typography/Text"
import { ImageBackground, View } from "react-native"
import { Screen } from "app/components"
import { useHeaderHeight } from "@react-navigation/elements"
import { Spacings } from "react-native-ui-lib"
import Button from "app/components/Button"
import { TakeSelfie } from "app/components/KycVerification/TakeSelfie"
import { PanDetails } from "app/components/KycVerification/PanDetails"
import { AadharDetails } from "app/components/KycVerification/AadharDetails"
import { Activate } from "app/components/KycVerification/Activate"
import { usePage } from "app/hooks/usePageVerification"
import { AppRoutes } from "app/navigators/constants/appRoutes"

const Summary = ({ navigation }) => {
  const { page, setPage, setSetpsDone, stepsDone } = usePage()

  const RenderContent = useCallback(() => {
    switch (page) {
      case 1:
        return <TakeSelfie />
      case 2:
        return <PanDetails />
      case 3:
        return <AadharDetails />
      default:
        return <Activate stepsDone={stepsDone} />
    }
  }, [page])
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../../../assets/background/ripple-center.png")}
      resizeMode="cover"
    >
      <View style={{ height: "100%" }}>
        <View style={{ flex: 0.25, marginHorizontal: Spacings.s5, marginTop: Spacings.s6 }}>
          <Text.Body size={"lg"} weight={"medium"} color={"#FFF"}>
            Steps to Avail
          </Text.Body>
          <Text.Heading
            size={"md"}
            weight="semi-bold"
            color={"#f2f4f7"}
            style={{ marginTop: Spacings.s2 }}
          >
            0% Interest EMI
          </Text.Heading>
        </View>
        <View
          style={{
            flex: 0.75,
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
              top: "-10%",
              borderRadius: Spacings.s3,
              height: 416,
            }}
          >
            <RenderContent />
          </View>
          <Button.Primary
            onPress={() => {
              navigation.navigate(AppRoutes.PatientDetailsPage1)
            }}
            label={"Proceed to Apply"}
            style={{
              bottom: "7.5%",
            }}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default Summary

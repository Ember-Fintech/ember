import { ImageURISource, View } from "react-native"
import React from "react"
import { Avatar, ListItem, Spacings } from "react-native-ui-lib"
import Text from "app/components/typography/Text"
import { Octicons } from "@expo/vector-icons"
import { ESteps } from "app/hooks/usePageVerification"

const Step = ({
  title,
  subtitle,
  img,
  verified,
}: {
  title: string
  subtitle: string
  img: ImageURISource
  verified?: boolean
}) => {
  return (
    <View
      style={{
        paddingHorizontal: Spacings.s3,
        backgroundColor: "white",
        borderRadius: Spacings.s4,
        height: 104,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: 16,
      }}
    >
      <View>
        <Avatar
          size={56}
          backgroundColor={"#D1C9E9"}
          source={img}
          imageStyle={{ resizeMode: "contain", height: 40, top: 10 }}
        />
      </View>
      <View>
        <Text.Body size={"md"} weight="medium" color={"#101828"}>
          {title}
          {"  "}
          <Octicons
            style={{ marginLeft: Spacings.s2 }}
            name={"check-circle-fill"}
            size={18}
            color={verified ? "#17B26A" : "#98A2B3"}
          />
        </Text.Body>
        <Text.Body size={"sm"} color={"#475467"}>
          {subtitle}
        </Text.Body>
      </View>
    </View>
  )
}
export const Activate = ({ stepsDone }: { stepsDone: Array<string> }) => {
  return (
    <>
      <Step
        title={"Provide basic details"}
        subtitle={"Enter your name, phone no, etc"}
        img={require("../../../assets/icons/selfie.png")}
        verified={stepsDone.includes(ESteps.SELFIE)}
      />
      <Step
        title={"Complete your KYC"}
        subtitle={"Use PAN and Aadhaar"}
        img={require("../../../assets/icons/selfie.png")}
        verified={stepsDone.includes(ESteps.PAN)}
      />
      <Step
        title={"Select plan"}
        subtitle={"Select plan"}
        img={require("../../../assets/icons/id-card.png")}
        verified={stepsDone.includes(ESteps.AADHAR)}
      />
      <Step
        title={"Provide bank details"}
        subtitle={"Get funds within 24 hours"}
        img={require("../../../assets/icons/id-card.png")}
        verified={stepsDone.includes("BANK_KYC")}
      />
    </>
  )
}

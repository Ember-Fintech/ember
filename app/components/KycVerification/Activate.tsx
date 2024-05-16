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
    <ListItem
      style={{
        paddingHorizontal: Spacings.s3,
        backgroundColor: "white",
        borderRadius: Spacings.s4,
        height: 100,
      }}
      disabled={true}
    >
      <ListItem.Part left>
        <Avatar
          size={50}
          backgroundColor={"#D1C9E9"}
          source={img}
          imageStyle={{ resizeMode: "contain", height: 30, top: 10 }}
        />
      </ListItem.Part>
      <ListItem.Part middle containerStyle={{ marginLeft: Spacings.s4 }}>
        <View>
          <Text.Body size={"md"} color={"#101828"}>
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
      </ListItem.Part>
    </ListItem>
  )
}
export const Activate = ({ stepsDone }: { stepsDone: Array<string> }) => {
  return (
    <>
      <Step
        title={"Take a Selfie"}
        subtitle={"Selfie"}
        img={require("../../../assets/icons/selfie.png")}
        verified={stepsDone.includes(ESteps.SELFIE)}
      />
      <Step
        title={"Verify PAN Details"}
        subtitle={"Name, DoB, PAN"}
        img={require("../../../assets/icons/selfie.png")}
        verified={stepsDone.includes(ESteps.PAN)}
      />
      <Step
        title={"Address Proof"}
        subtitle={"Aadhaar Authentication"}
        img={require("../../../assets/icons/id-card.png")}
        verified={stepsDone.includes(ESteps.AADHAR)}
      />
      <Step
        title={"Bank V-KYC"}
        subtitle={"Video KYC"}
        img={require("../../../assets/icons/id-card.png")}
        verified={stepsDone.includes("BANK_KYC")}
      />
    </>
  )
}

import { View } from "react-native"
import React from "react"
import { Avatar, ListItem, Spacings } from "react-native-ui-lib"
import Text from "app/components/typography/Text"
import HBorder from "app/components/HBorder"

export const Tip = ({ text }: { text: string }) => {
  return (
    <ListItem
      style={{
        backgroundColor: "white",
        borderRadius: Spacings.s4,
        height: 100,
      }}
      disabled={true}
    >
      <ListItem.Part left>
        <Avatar
          size={40}
          backgroundColor={"#D1C9E9"}
          source={require("../../../assets/icons/bulb-filled.png")}
          imageStyle={{ resizeMode: "contain", height: 20, top: 10 }}
        />
      </ListItem.Part>
      <ListItem.Part middle containerStyle={{ marginLeft: Spacings.s4 }}>
        <Text.Body size={"sm"} color={"#667085"}>
          {text}
        </Text.Body>
      </ListItem.Part>
    </ListItem>
  )
}
export const TakeSelfie = () => {
  return (
    <View style={{ margin: Spacings.s7 }}>
      <View style={{ alignItems: "center" }}>
        <Avatar
          size={70}
          backgroundColor={"#D1C9E9"}
          source={require("../../../assets/icons/selfie.png")}
          imageStyle={{ resizeMode: "contain", height: 40, top: 15 }}
        />
        <Text.Heading size={"xs"} weight={"semi-bold"} style={{ marginTop: Spacings.s3 }}>
          Take a Selfie
        </Text.Heading>
      </View>

      <View style={{ marginTop: Spacings.s2 }}>
        <Text.Body
          size={"sm"}
          weight={"regular"}
          style={{ marginTop: Spacings.s3 }}
          color={"#475467"}
        >
          1. Center your face in the frame.
        </Text.Body>
        <Text.Body
          size={"sm"}
          weight={"regular"}
          style={{ marginTop: Spacings.s3 }}
          color={"#475467"}
        >
          2. Wait for the frame to turn blue.
        </Text.Body>
        <Text.Body
          size={"sm"}
          weight={"regular"}
          style={{ marginTop: Spacings.s3 }}
          color={"#475467"}
        >
          3. Ensure the photo is clear.
        </Text.Body>
        <HBorder mt={Spacings.s10} />
        <Tip
          text={
            "Tip: For best results, take your photo in a well-lit area and remove your glasses."
          }
        />
      </View>
    </View>
  )
}

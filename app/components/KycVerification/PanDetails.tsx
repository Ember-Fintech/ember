import { View } from "react-native"
import React from "react"
import { Avatar, Spacings } from "react-native-ui-lib"
import { Tip } from "app/components/KycVerification/TakeSelfie"
import Input from "app/components/Input"

export const PanDetails = () => {
  return (
    <View style={{ margin: Spacings.s7 }}>
      <View style={{ alignItems: "center" }}>
        <Avatar
          size={70}
          backgroundColor={"#D1C9E9"}
          source={require("../../../assets/icons/id-card.png")}
          imageStyle={{ resizeMode: "contain", height: 40, top: 15 }}
        />
      </View>
      <View style={{ marginTop: Spacings.s6 }}>
        <Input label={"PAN number"} placeholder={"Enter PAN number"} />
      </View>

      <Tip
        text={"Tip: For best results, take your photo in a well-lit area and remove your glasses."}
      />
    </View>
  )
}

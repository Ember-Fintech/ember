import React from "react"
import Text from "../typography/Text"
import { View, Modal, Image, TouchableOpacity } from "react-native"
import blockCard from "assets/cards/blockCard.png"
import Icons from "@expo/vector-icons/Entypo"
import Button from "../Button"

const BlockCardModal = ({ isVisible, setIsVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setIsVisible(!isVisible)
      }}
      style={{
        flex: 1,
      }}
    >
      <TouchableOpacity
				onPress={() => {
					setIsVisible(!isVisible)
				}}
				activeOpacity={1}
        style={{
          flex: 0.4,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />
      <View
        style={{
          backgroundColor: "#FFF",
          flex: 0.6,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 24,
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
          <Text.Heading
            size="xs"
            weight="semi-bold"
            style={{
              color: "rgba(16, 24, 40, 1)",
            }}
          >
            Block Confirmation
          </Text.Heading>
          <TouchableOpacity
            onPress={() => {
              setIsVisible(!isVisible)
            }}
            style={{
              borderWidth: 1,
              padding: 9,
              borderRadius: 10,
              borderColor: "rgba(208, 213, 221, 1)",
            }}
          >
            <Icons name="chevron-down" size={18} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "rgba(186, 174, 222, 1)",
            height: 90,
            width: 90,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            // marginTop: 44
          }}
        >
          <Image
            source={blockCard}
            resizeMode="contain"
            style={{
              height: 61,
              width: 54,
              marginBottom: 10,
            }}
          />
        </View>

        <View>
          <Text.Heading
            size="xs"
            weight="semi-bold"
            style={{
              color: "rgba(16, 24, 40, 1)",
              textAlign: "center",
            }}
          >
            Are you sure you want to block this card?
          </Text.Heading>
        </View>

        <View>
          <Button.Primary
            label="Yes, Block this Card"
            onPress={() => {
              // TODO:- do something
            }}
          ></Button.Primary>
          <Button.Outlined
            style={{
              marginTop: 16,
            }}
            label="Go Back"
            onPress={() => {
              setIsVisible(false)
            }}
          ></Button.Outlined>
        </View>
      </View>
    </Modal>
  )
}

export default BlockCardModal

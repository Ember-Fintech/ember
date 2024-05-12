import React from "react"
import { Image, Modal, TouchableOpacity, View, useWindowDimensions } from "react-native"
import Text from "../typography/Text"
import { Feather } from "@expo/vector-icons"
import bank from "assets/bank/Bank.png"
import Button from "../Button"

const BankVerificationModal = ({ isVisible, setIsVisible }) => {
  const { height, width } = useWindowDimensions()
  return (
    <Modal
      animationType="slide"
      // transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setIsVisible(!isVisible)
      }}
      style={{
        flex: 1,
        backgroundColor: "#f2f4f7",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          marginTop: 16,
          marginHorizontal: "5%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setIsVisible(!isVisible)
          }}
          style={{
            padding: 10,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: "rgba(208, 213, 221, 1)",
            backgroundColor: "#fff",
          }}
        >
          <Feather name="chevron-left" color={"black"} size={22} />
        </TouchableOpacity>
        <View>
          <Text.Body
            size="lg"
            weight="semi-bold"
            style={{
              color: "black",
              marginLeft: 16,
              marginBottom: 4,
            }}
          >
            Bank Account
          </Text.Body>
        </View>
      </View>
      <View
        style={{
          marginLeft: (width - 175) / 2,
          marginTop: 110,
        }}
      >
        <Image
          source={bank}
          resizeMode="contain"
          style={{
            height: 175,
            width: 175,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 12,
          marginHorizontal: 24,
        }}
      >
        <Text.Heading
          size="xs"
          weight="semi-bold"
          style={{
            textAlign: "center",
          }}
        >
          Bank V-KYC
        </Text.Heading>

        <Text.Body
          size="sm"
          style={{
            color: "rgba(102, 112, 133, 1)",
            textAlign: "center",
            marginTop: 8,
          }}
        >
          Link a bank account to view and manage your finances.
        </Text.Body>

        <View
          style={{
            marginTop: 32,
          }}
        >
          <Button.Primary
            label="Start V-KYC"
            onPress={() => {
              // TODO:- re-direct to bank page
            }}
          />
        </View>
      </View>
    </Modal>
  )
}

export default BankVerificationModal

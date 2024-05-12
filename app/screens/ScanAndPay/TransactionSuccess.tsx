import React, { useEffect, useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { ScanAndPayStackParams } from "app/navigators/ScanAndPayStack"
import { Avatar, Colors, Spacings } from "react-native-ui-lib"
import { Image, View } from "react-native"
import format from "date-fns/format"
import { PaymentProvider } from "app/screens/ScanAndPay/PaymentConfig"
import Button from "app/components/Button"
import { useUpiTransaction } from "app/hooks/useUpiTransaction"

type TransactionSuccessProps = {
  navigation: StackScreenProps<ScanAndPayStackParams, AppRoutes.TransactionSuccess>
}

export const TransactionSuccess: React.FC<TransactionSuccessProps> = ({ navigation }) => {
  const [success, setSuccess] = useState<boolean>(false)
  const amount = useUpiTransaction((state) => state.amount)
  const reset = useUpiTransaction((state) => state.reset)
  const { receiver } = useUpiTransaction()

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTintColor: "#FFFFFF",
      headerBackTitle: " ",
      headerTitleStyle: { color: "white" },
      headerTransparent: true,
    })
    setTimeout(() => {
      setSuccess(true)
    }, 1000)
  }, [])
  return (
    <Screen backgroundColor={Colors.primaryColor}>
      <View style={{ height: "100%", paddingHorizontal: Spacings.s5 }}>
        {!success ? (
          <View
            style={{
              flex: 0.9,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              source={require("../../../assets/icons/ember-logo.png")}
              size={60}
              containerStyle={{ marginBottom: Spacings.s6 }}
            />
            <Text.Heading size={"xs"} color={"white"} weight={"semi-bold"}>
              Connecting securely...
            </Text.Heading>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/transaction-success.png")}
                style={{ marginBottom: Spacings.s6, width: 250, height: 250 }}
              />
              <Text.Heading
                size={"sm"}
                color={"white"}
                weight={"semi-bold"}
                style={{ marginBottom: Spacings.s4 }}
              >
                Payment Successful
              </Text.Heading>
              <Text.Heading
                size={"lg"}
                color={"white"}
                weight={"semi-bold"}
                style={{ marginBottom: Spacings.s6 }}
              >
                ₹ {amount}
              </Text.Heading>
              <Text.Caption
                color={"#EAECF0"}
                style={{ textAlign: "center", marginBottom: Spacings.s6 }}
              >{`${format(new Date(), "MMM dd, yyyy h:mm a")} \nUPI transaction ID: ${Math.floor(
                Math.random() * 1000000000000,
              )}`}</Text.Caption>
              <PaymentProvider
                disabled={true}
                title={receiver?.name}
                subtitle={receiver?.upiId}
                containerStyle={{ backgroundColor: "#D0C0FF", width: "100%" }}
              />
            </View>

            <Button.Primary
              label={"Awesome!"}
              style={{ backgroundColor: "white" }}
              labelStyle={{ color: Colors.primaryColor }}
              onPress={() => {
                reset()
                navigation.reset({
                  index: 0,
                  routes: [{ name: AppRoutes.HomeStack }],
                })
              }}
            />
            <Button.Primary
              label={"View Receipt"}
              style={{ marginBottom: Spacings.s10, marginTop: Spacings.s4 }}
            />
          </View>
        )}
      </View>
    </Screen>
  )
}

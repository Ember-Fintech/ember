import React from "react"
import { View, StyleSheet, ImageURISource, ScrollView } from "react-native"
import { Screen } from "app/components"
import { Avatar, Colors, ListItem, Spacings } from "react-native-ui-lib"
import Text from "app/components/typography/Text"
import Button from "app/components/Button"
import { Entypo, Octicons } from "@expo/vector-icons"
import { useLoggedIn } from "app/hooks/useLoggedIn"

const styles = StyleSheet.create({
  upperCurvedContainer: {
    flex: 1,
    backgroundColor: "#F9F8FA",
    borderTopRightRadius: Spacings.s5,
    borderTopLeftRadius: Spacings.s5,
    padding: Spacings.s4,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
})

const EmptyView = () => {
  return (
    <View style={{ flex: 0.1, marginHorizontal: Spacings.s3, marginTop: 10 }}>
      <Text.Heading size={"sm"} weight={"semi-bold"} color={"white"}>
        Transaction History
      </Text.Heading>
    </View>
  )
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  } else {
    return text.substring(0, maxLength) + "..."
  }
}

const Step = ({
  title,
  subtitle,
  img,
  spent,
  showBorder = true,
}: {
  title: string
  subtitle: string
  img: ImageURISource
  spent: string
  showBorder?: boolean
}) => {
  return (
    <ListItem
      style={{
        overflow: "hidden",
        borderBottomWidth: showBorder ? 0.5 : 0,
        borderColor: "#F2F4F7",
      }}
      disabled={true}
    >
      <ListItem.Part left>
        <Avatar
          size={50}
          containerStyle={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#F2F4F7",
          }}
          backgroundColor={"transparent"}
          source={img}
          imageStyle={{ resizeMode: "contain", height: 30, top: 9 }}
        />
      </ListItem.Part>
      <ListItem.Part middle containerStyle={{ marginLeft: Spacings.s4 }}>
        <View>
          <Text.Body size={"sm"} weight={"semi-bold"} color={"#101828"}>
            {truncateText(title, 16)}
          </Text.Body>
          <Text.Caption size={"sm"} color={"#475467"}>
            {subtitle}
          </Text.Caption>
        </View>
      </ListItem.Part>
      <ListItem.Part right>
        <Text.Body size={"sm"} weight={"semi-bold"} color={"#475467"}>
          {spent}
        </Text.Body>
      </ListItem.Part>
    </ListItem>
  )
}

export const TransactionHistory: React.FC<PhoneInputScreenProps> = () => {
  return (
    <Screen bgSource={require("../../assets/background/ripple-top-right.png")}>
      <View style={styles.container}>
        <EmptyView />
        <View style={styles.upperCurvedContainer}>
          <ScrollView style={{ marginBottom: 100 }}>
            <View
              style={{
                borderRadius: Spacings.s6,
                backgroundColor: "white",
                paddingHorizontal: Spacings.s5,
                paddingVertical: Spacings.s2,
                marginBottom: Spacings.s3,
              }}
            >
              <Text.Body size={"sm"} weight={"semi-bold"} style={{ marginVertical: Spacings.s3 }}>
                13 January 2024
              </Text.Body>
              <Step
                title={"Mahaveer Enterprises"}
                subtitle={"Paid"}
                img={require("../../assets/icons/spent.png")}
                spent={"- ₹1500.00"}
              />
              <Step
                title={"Spotify"}
                subtitle={"Monthly Subscription"}
                img={require("../../assets/icons/spotify.png")}
                spent={"-₹2500.00"}
                showBorder={false}
              />
            </View>

            <View
              style={{
                borderRadius: Spacings.s6,
                backgroundColor: "white",
                paddingHorizontal: Spacings.s5,
                paddingVertical: Spacings.s2,
              }}
            >
              <Text.Body size={"sm"} weight={"semi-bold"} style={{ marginVertical: Spacings.s3 }}>
                05 January 2024
              </Text.Body>
              <Step
                title={"Highway King"}
                subtitle={"Paid"}
                img={require("../../assets/icons/spent.png")}
                spent={"- ₹1500.00"}
              />
              <Step
                title={"Aman Sharma"}
                subtitle={"Paid"}
                img={require("../../assets/icons/spent.png")}
                spent={"-₹5000.00"}
                showBorder={false}
              />
            </View>
            <View
              style={{
                borderRadius: Spacings.s6,
                backgroundColor: "white",
                paddingHorizontal: Spacings.s5,
                paddingVertical: Spacings.s2,
              }}
            >
              <Text.Body size={"sm"} weight={"semi-bold"} style={{ marginVertical: Spacings.s3 }}>
                31 December 2024
              </Text.Body>
              <Step
                title={"Salary Credit"}
                subtitle={"Received"}
                img={require("../../assets/icons/credit.png")}
                spent={"+ ₹37,000.00"}
              />
              <Step
                title={"Monthly Usage"}
                subtitle={"Paid"}
                img={require("../../assets/icons/spent.png")}
                spent={"-₹500.00"}
                showBorder={true}
              />
              <Step
                title={"Govinda Vashishtha"}
                subtitle={"Paid"}
                img={require("../../assets/icons/spent.png")}
                spent={"-₹2500.00"}
                showBorder={false}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Screen>
  )
}

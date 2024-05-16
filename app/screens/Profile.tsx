import React, { ReactElement } from "react"
import { View, StyleSheet, ImageURISource, ScrollView } from "react-native"
import { Screen } from "app/components"
import { Avatar, Colors, ListItem, Spacings } from "react-native-ui-lib"
import Text from "app/components/typography/Text"
import Button from "app/components/Button"
import { useLoggedIn } from "app/hooks/useLoggedIn"
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
  Entypo,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons"
import { usePage } from "app/hooks/usePageVerification"

const styles = StyleSheet.create({
  upperCurvedContainer: {
    flex: 1,
    backgroundColor: "white",
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
    <View style={{ flex: 0.2, marginHorizontal: Spacings.s3, marginTop: 10 }}>
      <Text.Heading size={"sm"} weight={"semi-bold"} color={"white"}>
        Profile
      </Text.Heading>
    </View>
  )
}

const AVATAR_SIZE = 80

const Step = ({
  title,
  subtitle,
  icon,
}: {
  title: string
  subtitle: string
  icon: ReactElement
}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "#EAECF0",
        borderRadius: Spacings.s6,
        marginVertical: Spacings.s2,
      }}
    >
      <ListItem
        containerStyle={{ borderWidth: 1 }}
        style={{
          overflow: "hidden",
          borderRadius: Spacings.s6,
          paddingHorizontal: Spacings.s2,
          backgroundColor: "white",
          height: 80,
        }}
        disabled={true}
      >
        <ListItem.Part left>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F9FAFB",
              borderColor: "#D0D5DD",
              borderWidth: 0.5,
              height: 40,
              width: 40,
              borderRadius: 40,
            }}
          >
            {icon}
          </View>
        </ListItem.Part>
        <ListItem.Part middle containerStyle={{ marginLeft: Spacings.s4 }}>
          <View>
            <Text.Body size={"sm"} weight={"semi-bold"} color={"#101828"}>
              {title}
            </Text.Body>
            <Text.Caption size={"sm"} color={"#475467"}>
              {subtitle}
            </Text.Caption>
          </View>
        </ListItem.Part>
        <ListItem.Part right>
          <Entypo name="chevron-right" color={"rgba(102, 112, 133, 1)"} size={24} />
        </ListItem.Part>
      </ListItem>
    </View>
  )
}

export const Profile: React.FC<PhoneInputScreenProps> = () => {
  const { changeLoggedInStatus } = useLoggedIn()
  const { clear } = usePage()
  return (
    <Screen bgSource={require("../../assets/background/ripple-top-right.png")}>
      <View style={styles.container}>
        <EmptyView />
        <View style={styles.upperCurvedContainer}>
          <View
            style={{
              position: "relative",
              alignItems: "center",
              marginBottom: Spacings.s8,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: Spacings.s1,
                borderRadius: AVATAR_SIZE,
                position: "absolute",
                top: -60,
              }}
            >
              <Avatar
                size={AVATAR_SIZE}
                name={"Sanjana Sharma"}
                imageStyle={{ resizeMode: "contain", height: 40, top: 20 }}
              />
            </View>
          </View>
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <Text.Heading size={"xs"} weight={"semi-bold"}>
              {"Sanjana Sharma"}
            </Text.Heading>
            <Text.Caption size={"sm"} weight={"regular"} color={Colors.textQuarterary}>
              {"sanjana.sharma@gmail.com"}
            </Text.Caption>
          </View>
          <ScrollView style={{ marginBottom: 100 }}>
            <Text.Body size={"sm"} weight={"semi-bold"} style={{ marginVertical: Spacings.s3 }}>
              Account Details
            </Text.Body>
            <Step
              title={"Profile Information"}
              subtitle={"Manage account details"}
              icon={<MaterialCommunityIcons name={"account-circle-outline"} size={24} />}
            />
            <Step
              title={"Linked Bank Accounts"}
              subtitle={"Manage your bank account"}
              icon={<FontAwesome name={"credit-card"} size={18} />}
            />
            <Text.Body
              size={"sm"}
              weight={"semi-bold"}
              style={{ marginVertical: Spacings.s3, color: "black" }}
            >
              Account Details
            </Text.Body>
            <Step
              title={"Security Settings"}
              subtitle={"Set PIN/biometrics"}
              icon={<MaterialCommunityIcons name={"lock-check-outline"} size={24} />}
            />
            <Step
              title={"Notifications"}
              subtitle={"Adjust your alert preferences"}
              icon={<MaterialCommunityIcons name={"bell-outline"} size={24} />}
            />
            <Text.Body size={"sm"} weight={"semi-bold"} style={{ marginVertical: Spacings.s3 }}>
              Account Details
            </Text.Body>
            <Step
              title={"About Us"}
              subtitle={"Know more information"}
              icon={<MaterialCommunityIcons name={"information-outline"} size={24} />}
            />
            <Step
              title={"Support Hub"}
              subtitle={"Access help and support"}
              icon={<Feather name={"headphones"} size={20} />}
            />
            <Step
              title={"Frequently Asked Question"}
              subtitle={"Quick answers"}
              icon={<SimpleLineIcons name={"question"} size={20} />}
            />
            <Step
              title={"Terms & Conditions"}
              subtitle={"Our terms & conditions"}
              icon={<Ionicons name={"newspaper-outline"} size={20} />}
            />
            <Button.Outlined
              onPress={() => {
                clear()
                changeLoggedInStatus(false)
              }}
              label={"Logout"}
              style={{ borderColor: "red" }}
              labelStyle={{ color: "red" }}
            />
          </ScrollView>
        </View>
      </View>
    </Screen>
  )
}

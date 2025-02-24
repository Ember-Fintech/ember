import Text from "app/components/typography/Text"
import React, { useEffect } from "react"
import { Image, Linking, View } from "react-native"
import rocket from "assets/loan/rocket.png"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { useUser } from "./hooks/useUser"

const RedirectingScreen = ({ navigation, route }) => {
  const phoneNumber = route?.params?.phoneNumber ?? "+919212338924"

  const { fetchUser, redrictionObject } = useUser()

  useEffect(() => {
    if (phoneNumber) {
      fetchUser({ mobileNumber: phoneNumber?.slice(3) })
    }
  }, [])

  const openLink = async () => {
    if (redrictionObject?.base64 && redrictionObject?.redirectionUrl) {
      const url = `${redrictionObject?.redirectionUrl}${redrictionObject?.base64}`
      const supported = await Linking.canOpenURL(url)
      if (supported) {
        console.log(`Redirecting`)
        Linking.openURL(url)
      }
    }
  }

  useEffect(() => {
    openLink()
  }, [redrictionObject])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          flex: 0.25,
        }}
      ></View>
      <View
        style={{
          flex: 0.75,
          alignContent: "center",
        }}
      >
        <Image
          source={rocket}
          height={100}
          width={100}
          style={{
            marginHorizontal: "auto",
          }}
        />
        <Text.Heading
          size="xs"
          weight="semi-bold"
          style={{
            textAlign: "center",
          }}
        >
          Hang tight!
        </Text.Heading>
        <Text.Body
          size="sm"
          style={{
            textAlign: "center",
          }}
        >
          We’re taking you to your destination…
        </Text.Body>
        <Text
          style={{
            fontSize: 14,
            color: "#667085",
            fontFamily: "Sans-Regular",
            textAlign: "center",
            marginTop: "auto",
            marginBottom: 16,
          }}
        >
          If you’re not redirected within a few seconds,{" "}
          <Text
            style={{
              fontFamily: "Sans-SemiBold",
              textDecorationLine: "underline",
              color: "#533d95",
            }}
            onPress={() => {
              openLink()
              navigation.navigate(AppRoutes.LoanStatus)
            }}
          >
            click here
          </Text>
        </Text>
      </View>
    </View>
  )
}

export default RedirectingScreen

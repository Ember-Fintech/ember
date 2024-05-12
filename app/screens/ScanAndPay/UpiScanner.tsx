import React, { useEffect, useState } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { ScanAndPayStackParams } from "app/navigators/ScanAndPayStack"
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera"
import { Pressable, View } from "react-native"
import Text from "app/components/typography/Text"
import { Ionicons } from "@expo/vector-icons"
import { SimpleLineIcons } from "@expo/vector-icons"
import { Image, Spacings } from "react-native-ui-lib"
import Flash from "../../../assets/icons/flash.js"
import { useNavigation } from "@react-navigation/native"
import { useUpiTransaction } from "app/hooks/useUpiTransaction"

type UpiScannerProps = {
  navigation: StackScreenProps<ScanAndPayStackParams, AppRoutes.UpiScanner>
}

const PermissionsPage = ({ requestPermission }: { requestPermission: () => void }) => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "blue", alignItems: "center", justifyContent: "center" }}
    >
      <Text.Body
        onPress={() => {
          requestPermission()
        }}
      >
        No permission, click to grant
      </Text.Body>
    </View>
  )
}

function extractNameAndUPI(urlString: string): { name: string; upiId: string } | null {
  const urlParts = urlString.split("?")
  if (urlParts.length !== 2) {
    return null // URL should have exactly one '?' character separating the base URL and the query string
  }

  const queryParamsString = urlParts[1]
  const queryParams = queryParamsString.split("&")

  let name: string | null = null
  let upiId: string | null = null

  for (const param of queryParams) {
    const [key, value] = param.split("=")
    if (key === "pn") {
      name = decodeURIComponent(value)
    } else if (key === "pa") {
      upiId = decodeURIComponent(value)
    }
  }

  if (name && upiId) {
    return { name: name, upiId: upiId }
  } else {
    return null
  }
}
// function extractNameAndUPI(urlString: string): { name: string; upiId: string } | null {
//   const parsedUrl = parse(urlString)
//   const queryParams = parseQuery(parsedUrl.query || "")
//
//   const name = queryParams.pn as string
//   const upiId = queryParams.pa as string
//
//   if (name && upiId) {
//     return { name: name, upiId: upiId }
//   } else {
//     return null
//   }
// }

export const UpiScanner: React.FC<UpiScannerProps> = ({}) => {
  const navigation = useNavigation()
  const device = useCameraDevice("back")
  const { hasPermission, requestPermission } = useCameraPermission()
  const [torch, setTorch] = useState<"on" | "off">("off")
  const { setReceiver, reset } = useUpiTransaction()
  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: (codes) => {
      const qrValue = codes?.[0]?.value
      const reciever = extractNameAndUPI(qrValue)
      console.log({ reciever })
      if (reciever) {
        setReceiver(reciever)
      }
      navigation.navigate(AppRoutes.PaymentConfig)
    },
  })

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,

      headerBackTitle: " ",
      headerTitleStyle: { color: "white" },
      headerTransparent: true,
    })
  }, [])

  useEffect(() => {
    if (!hasPermission) {
      requestPermission()
    }
  }, [hasPermission])

  return (
    <View style={{ flex: 1 }}>
      {device && (
        <Camera
          style={{ flex: 1 }}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
          torch={torch}
        />
      )}
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <View style={{ flex: 0.15, paddingTop: 80, backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Ionicons
              name={"chevron-back"}
              color={"white"}
              size={30}
              onPress={() => {
                reset()
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Home" }],
                })
              }}
            />
            <Text.Body
              size={"lg"}
              weight={"semi-bold"}
              color={"#FFFFFF"}
              style={{ textAlign: "center", flex: 0.8 }}
            >
              Scan to pay
            </Text.Body>
            <SimpleLineIcons name={"info"} color={"white"} size={24} />
          </View>
          <Text.Body
            size={"sm"}
            color={"#FFFFFF"}
            style={{ textAlign: "center", marginVertical: Spacings.s4 }}
          >
            Align QR code to fill inside the frame
          </Text.Body>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "transparent",
            borderRadius: Spacings.s10,
          }}
        >
          <View style={{ flex: 0.1, backgroundColor: "rgba(0,0,0,0.5)" }} />
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../../../assets/images/qr-frame.png")}
              style={{ width: 250, height: 250, resizeMode: "contain" }}
            />
          </View>
          <View style={{ flex: 0.1, backgroundColor: "rgba(0,0,0,0.5)" }} />
        </View>
        <View
          style={{
            flex: 0.3,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <Pressable
            onPress={() => {
              setTorch((prevState) => (prevState === "on" ? "off" : "on"))
            }}
          >
            <Flash fill={torch === "on" ? "white" : "transparent"} />
          </Pressable>
        </View>
      </View>
    </View>
  )
}

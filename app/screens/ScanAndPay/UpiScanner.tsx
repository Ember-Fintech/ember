import React, { useEffect } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { ScanAndPayStackParams } from "app/navigators/ScanAndPayStack"
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera"
import { View } from "react-native"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { useHeaderHeight } from "@react-navigation/elements"
import { Spacings } from "react-native-ui-lib"

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

export const UpiScanner: React.FC<UpiScannerProps> = ({ navigation }) => {
  const device = useCameraDevice("back")
  const { hasPermission, requestPermission } = useCameraPermission()
  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: (codes) => {
      console.log(codes)
    },
  })

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: () => (
        <Text.Body size={"lg"} weight={"semi-bold"} color={"#FFFFFF"}>
          Scan to pay
        </Text.Body>
      ),
      headerBackTitle: " ",
      headerTitleStyle: { color: "white" },
      headerTransparent: true,
    })
  }, [])

  return (
    <View style={{ flex: 1, paddingTop: useHeaderHeight() }}>
      {device && (
        <Camera
          style={{ flex: 1, backgroundColor: "black" }}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
      )}
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View style={{ flex: 0.15 }}>
          <Text.Body
            size={"sm"}
            color={"#FFFFFF"}
            style={{ textAlign: "center", marginTop: Spacings.s2 }}
          >
            Align QR code to fill inside the frame
          </Text.Body>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            borderRadius: Spacings.s10,
            marginHorizontal: Spacings.s10,
          }}
        >
          <View></View>
        </View>
        <View style={{ flex: 0.3, justifyContent: "center" }}>
          <Text.Body
            size={"sm"}
            color={"#FFFFFF"}
            style={{ textAlign: "center", marginTop: Spacings.s2 }}
          >
            Add a torch icon to me
          </Text.Body>
        </View>
      </View>
    </View>
  )
}

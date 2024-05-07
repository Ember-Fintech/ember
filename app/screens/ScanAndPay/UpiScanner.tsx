import React from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { ScanAndPayStackParams } from "app/navigators/ScanAndPayStack"
import { Camera, useCameraDevice, useCameraPermission } from "react-native-vision-camera"
import { View } from "react-native"
import Text from "app/components/typography/Text"
import { Screen } from "app/components"

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

  return (
    <Screen bgSource={require("../../../assets/background/ripple-top-right.png")}>
      <Text
        onPress={() => {
          navigation.navigate("Home")
        }}
      >
        Go Back
      </Text>
      <Text
        onPress={() => {
          navigation.navigate(AppRoutes.PaymentConfig)
        }}
      >
        Go to next screen
      </Text>
    </Screen>
  )

  if (!hasPermission) return <PermissionsPage requestPermission={requestPermission} />
  return <Camera style={{ flex: 1 }} device={device} isActive={true} />
}

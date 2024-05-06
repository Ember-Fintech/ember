import React from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { ScanAndPayStackParams } from "app/navigators/ScanAndPayStack"

type UpiScannerProps = {
  navigation: StackScreenProps<ScanAndPayStackParams, AppRoutes.UpiScanner>
}

export const UpiScanner: React.FC<UpiScannerProps> = ({ navigation }) => {
  return (
    <Screen>
      <Text.Body
        onPress={() => {
          navigation.navigate(AppRoutes.PaymentConfig)
        }}
      >
        Upi Scanner
      </Text.Body>
    </Screen>
  )
}

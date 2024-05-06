import React from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { ScanAndPayStackParams } from "app/navigators/ScanAndPayStack"

type PaymentConfigProps = {
  navigation: StackScreenProps<ScanAndPayStackParams, AppRoutes.PaymentConfig>
}

export const PaymentConfig: React.FC<PaymentConfigProps> = ({ navigation }) => {
  return (
    <Screen>
      <Text.Body
        onPress={() => {
          navigation.navigate(AppRoutes.TransactionSuccess)
        }}
      >
        Payment Config
      </Text.Body>
    </Screen>
  )
}

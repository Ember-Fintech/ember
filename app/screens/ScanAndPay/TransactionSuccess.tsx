import React from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { AppRoutes } from "app/navigators/constants/appRoutes"
import { Screen } from "app/components"
import Text from "app/components/typography/Text"
import { ScanAndPayStackParams } from "app/navigators/ScanAndPayStack"

type TransactionSuccessProps = {
  navigation: StackScreenProps<ScanAndPayStackParams, AppRoutes.TransactionSuccess>
}

export const TransactionSuccess: React.FC<TransactionSuccessProps> = ({ navigation }) => {
  return (
    <Screen>
      <Text.Body
        onPress={() => {
          navigation.pop()
        }}
      >
        Transaction Success
      </Text.Body>
    </Screen>
  )
}

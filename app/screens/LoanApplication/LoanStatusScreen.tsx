import React from "react"
import { Image, View } from "react-native"
import loanApproved from "assets/loan/loan_approved_image.png"
import Text from "app/components/typography/Text"
const LoanStatusScreen = () => {
  return (
    <View
      style={{
        marginHorizontal: 16,
      }}
    >
      <Image source={loanApproved} />

      <View>
        <Text.Heading size="xs" weight="semi-bold">
          {`Your loan has been \nprocessed`}
        </Text.Heading>
        <Text.Body size="sm" weight="regular">
          The amount will be transferred to the clinic’s account within a few hours
        </Text.Body>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D1C9E9",
          borderRadius: 12,
        }}
      >
        <Text.Caption
          style={{
            color: "#667085",
          }}
        >
          Application ID:
        </Text.Caption>
        <Text.Caption
          weight="semi-bold"
          style={{
            color: "#533D95",
          }}
        >
          ABC12345
        </Text.Caption>
      </View>
    </View>
  )
}

export default LoanStatusScreen

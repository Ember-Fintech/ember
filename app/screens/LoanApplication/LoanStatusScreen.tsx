import React from "react"
import { Image, View } from "react-native"
import loanApproved from "assets/loan/loan_approved_image.png"
import Text from "app/components/typography/Text"
import Button from "app/components/Button"
import { AppRoutes } from "app/navigators/constants/appRoutes"

const dummayData = [
  {
    title: "Total loan amount",
    value: "₹ 20,000",
  },
  {
    title: "Net disbursal amount",
    value: "₹ 21,900",
  },
  {
    title: "EMI amount",
    value: "₹ 7,350",
  },
  {
    title: "EMI tenure",
    value: "3 months",
  },
  {
    title: "Start EMI date",
    value: "05 Feb 2025",
  },
  {
    title: "Last EMI date",
    value: "05 Apr 2025",
  },
]

const LoanStatusScreen = ({ navigation }) => {
  return (
    <View
      style={{
        marginHorizontal: 16,
      }}
    >
      <Image
        source={loanApproved}
        style={{
          marginHorizontal: "auto",
          marginVertical: 32,
        }}
      />

      <View>
        <Text.Heading
          size="xs"
          weight="semi-bold"
          style={{
            textAlign: "center",
            color: "#101828",
          }}
        >
          {`Your loan has been \nprocessed`}
        </Text.Heading>
        <Text.Body
          size="sm"
          weight="regular"
          style={{
            textAlign: "center",
            marginBottom: 32,
            color: "#667085",
          }}
        >
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

      <View
        style={{
          marginTop: 32,
        }}
      >
        <Text.Body size="sm" weight="medium">
          Payee details
        </Text.Body>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#F2F4F7",
            backgroundColor: "#FFF",
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 15,
            marginTop: 8,
          }}
        >
          <Text.Caption
            style={{
              color: "#667085",
            }}
          >
            Clinic name
          </Text.Caption>
          <Text.Caption
            style={{
              color: "#475467",
            }}
            weight="semi-bold"
          >
            Springleaf, Bengaluru
          </Text.Caption>
        </View>
      </View>

      <View
        style={{
          marginTop: 32,
        }}
      >
        <Text.Body size="sm" weight="medium">
          Loan Summary
        </Text.Body>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#F2F4F7",
            backgroundColor: "#FFF",
            borderRadius: 15,
            paddingVertical: 15,
            paddingHorizontal: 20,
          }}
        >
          {dummayData?.map((singleData) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 15,
                  marginTop: 8,
                }}
              >
                <Text.Caption
                  style={{
                    color: "#667085",
                  }}
                >
                  {singleData?.title}
                </Text.Caption>
                <Text.Caption
                  style={{
                    color: "#475467",
                  }}
                  weight="semi-bold"
                >
                  {singleData.value}
                </Text.Caption>
              </View>
            )
          })}
        </View>
      </View>

      <Button.Primary
        onPress={() => {
          navigation.navigate(AppRoutes.Landing)
        }}
        label={"Close"}
        style={{
          marginBottom: 16,
          marginTop: 24,
        }}
      />
    </View>
  )
}

export default LoanStatusScreen

import React from "react"
import { View, StyleSheet, Image } from "react-native"
import { Spacings } from "react-native-ui-lib"
import Button from "app/components/Button"
import Text from "app/components/typography/Text"
import { TextConstants } from "app/constants/textConstants"
import { uiConfig } from "app/theme/config"

type LoanStatusCardProps = {
  status: "ineligible" | "inProgress"
  applicationId?: string
  onOkayPress?: () => void
}

const LoanStatusCard = ({ status, applicationId, onOkayPress }: LoanStatusCardProps) => {
  const isInEligible = status === "ineligible"

  const statusImage = isInEligible
    ? require("../../../assets/images/Failure.png")
    : require("../../../assets/images/Success.png")

  const arrowImage = require("../../../assets/images/arrow-right.png")

  const title = isInEligible
    ? TextConstants.ineligibleTitle
    : TextConstants.inProgressTitle

  const description = isInEligible
    ? TextConstants.ineligibleDescription
    : TextConstants.inProgressDescription

  return (
    <View style={styles.card}>
      <Image source={statusImage} style={styles.statusImage} resizeMode="contain" />
      <View style={styles.content}>
        <Text.Heading size="sm" weight="medium" style={styles.title}>
          {title}
        </Text.Heading>
        <Text.Body size="sm" style={styles.description}>
          {description}
        </Text.Body>
      </View>
      {isInEligible ? (
        <Button.Primary
          label={TextConstants.okay}
          onPress={onOkayPress}
        />
      ) : (
        <View style={styles.nextSteps}>
          <View style={styles.applicationIdContainer}>
            <Text style={styles.applicationIdText}>
              Application ID: <Text style={styles.applicationIdValue}>{applicationId || 'ABC12345'}</Text>
            </Text>
          </View>
          <Text.Caption style={styles.nextTitle}>
            {TextConstants.nextStep}
          </Text.Caption>
          <View style={styles.stepContainer}>
            <Image source={arrowImage} style={styles.arrowIcon} />
            <Text.Body size="sm" style={styles.stepText}>
              {TextConstants.nextStep1}
            </Text.Body>
          </View>
          <View style={styles.stepContainer}>
            <Image source={arrowImage} style={styles.arrowIcon} />
            <Text.Body size="sm" style={styles.stepText}>
              {TextConstants.nextStep2}
            </Text.Body>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  applicationIdContainer: {
    alignItems: "center", 
    alignSelf: "center",
    backgroundColor: uiConfig.tokens.colors.primary250,
    borderRadius: 15,
    padding: 10,
  },
  applicationIdText: {
    color: uiConfig.tokens.colors.textDark950,
    fontFamily: uiConfig.tokens.fonts["Inter-Regular"],
    fontSize: 12,
    textAlign: "center",
  },
  applicationIdValue: {
    color: uiConfig.tokens.colors.primary750,
    fontFamily: uiConfig.tokens.fonts["Inter-Medium"],
  },
  arrowIcon: {
    height: 16,
    marginRight: Spacings.s2,
    marginTop: 4,
    width: 16,
  },
  card: {
    backgroundColor: uiConfig.tokens.colors.white,
    borderRadius: 12,
    justifyContent: "space-between",
    marginHorizontal: Spacings.s4,
    maxWidth: 330,
    minHeight: 500,
    padding: Spacings.s4
  },
  content: {
    paddingHorizontal: Spacings.s2,
  },
  description: {
    color: uiConfig.tokens.colors.textLight600,
    fontFamily: uiConfig.tokens.fonts["Inter-Regular"],
    marginBottom: Spacings.s2,
    marginTop: Spacings.s4,
    textAlign: "center"
  },
  nextSteps: {
    marginTop: Spacings.s4,
  },
  nextTitle: {
    color: uiConfig.tokens.colors.black,
    fontFamily: uiConfig.tokens.fonts["Inter-Regular"],
    fontSize: 14,
    marginBottom: Spacings.s4,
    marginTop: Spacings.s4
  },
  statusImage: {
    borderRadius: 12,
    height: 140,
    marginBottom: Spacings.s3,
    marginTop: Spacings.s3,
    width: "100%",
  },
  stepContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginBottom: Spacings.s2,
  },
  stepText: {
    color: uiConfig.tokens.colors.textLight500,
    flex: 1, 
    fontFamily: uiConfig.tokens.fonts["Inter-Regular"],
    fontSize: 12
  },
  title: {
    fontFamily: uiConfig.tokens.fonts["Inter-Medium"],
    marginBottom: Spacings.s1,
    textAlign: "center"
  }
})

export default LoanStatusCard

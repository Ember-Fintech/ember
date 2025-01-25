/* eslint-disable react-native/no-color-literals */
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { LoanStackParams } from "app/navigators/Loan";
import { AppRoutes } from "app/navigators/constants/appRoutes";
import { getLoanApplicationStatusProps } from "./ApplicationStatusUtil";
import Button from "app/components/Button";
import { uiConfig } from "app/theme/config";
import { TextConstants } from "app/constants/textConstants";

type LoanApplicationStatusRouteProp = RouteProp<LoanStackParams, AppRoutes.StatusPage>;

interface LoanApplicationStatusProps {
  route: LoanApplicationStatusRouteProp;
}

const LoanApplicationStatus = ({ route }: LoanApplicationStatusProps) => {
  const { response } = route.params;
  const [statusProps, setStatusProps] = useState<any>(null);

  useEffect(() => {
    if (response) {
      const props = getLoanApplicationStatusProps(response);
      setStatusProps(props);
    }
  }, [response]);

  if (!statusProps) return null;

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
      <Image source={statusProps.image} style={styles.image} resizeMode="contain" />
      <View style={styles.content}>
      <Text style={styles.heading}>{statusProps.heading}</Text>
      <Text style={styles.description}>{statusProps.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {statusProps.buttons.map((button: any, index: any) => (
          <View key={index} style={styles.buttonWrapper}>
            {button.label === TextConstants.backBtnText ? (
              <Button.Outlined
                labelStyle={{ 
                  color: uiConfig.tokens.colors.textDark950
              }}
                label={button.label}
                onPress={button.onPress}
              />
            ) : (
              <Button.Primary
                label={button.label}
                onPress={button.onPress}
              />
            )}
          </View>
        ))}
      </View>
      {statusProps.applicationId && (
        <View style={styles.applicationIdContainer}>
          <Text style={styles.applicationIdText}>
            Application ID: <Text style={styles.applicationIdValue}>{statusProps.applicationId}</Text>
          </Text>
        </View>
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  applicationIdContainer: {
    backgroundColor: uiConfig.tokens.colors.primary250,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  applicationIdText: {
    color: uiConfig.tokens.colors.textDark950,
    fontFamily: uiConfig.tokens.fonts["Inter-Regular"],
    fontSize: 16,
    textAlign: "center",
  },
  applicationIdValue: {
    color: uiConfig.tokens.colors.primary750,
    fontFamily: uiConfig.tokens.fonts["Inter-Medium"],
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonWrapper: {
    marginHorizontal: 10,
  },
  container: {
    alignItems: "center",
    width: 300
  },
  containerWrapper: {
    alignItems: "center",
    backgroundColor: "white",
    flexGrow: 1,
    justifyContent: "center",
    padding: 20
    },
  content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: 350
    },
  description: {
    color: uiConfig.tokens.colors.textLight600,
    flexShrink: 1,
    fontFamily: uiConfig.tokens.fonts["Sans-Regular"],
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
    textDecorationLine: "none",
    width: 300,
  },
  heading: {
    flexShrink: 1,
    fontFamily: uiConfig.tokens.fonts["Sans-Medium"],
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 0,
    textAlign: "center",
    textDecorationLine: "none",
  },
  image: {
    height: 175,
    marginBottom: 20,
    width: 175,
  }
});

export default LoanApplicationStatus;

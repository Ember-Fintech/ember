import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "app/components/typography/Text";
import Button from "app/components/Button";
import { uiConfig } from "app/theme/config";

const DefaultErrorRoute = ({ onGoHome }: { onGoHome?: () => void }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../..//assets/images/404.png")}
                style={styles.image}
                resizeMode="contain"
            />

            <Text.Heading size="lg" weight="bold" style={styles.title}>
                Oops! Page Not Found
            </Text.Heading>
            <Text.Body size="md" style={styles.description}>
                We can't seem to find the page you're looking for. Please check the URL
                or return to the homepage.
            </Text.Body>

            <Button.Primary
                label="Go to Homepage"
                onPress={onGoHome}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        maxWidth: 300,
        width: "100%",
    },
    container: {
        alignItems: "center",
        backgroundColor: uiConfig.tokens.colors.white,
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    description: {
        color: uiConfig.tokens.colors.textLight600,
        marginBottom: 20,
        textAlign: "center",
    },
    image: {
        height: 250,
        marginBottom: 20,
        width: 250,
    },
    title: {
        color: uiConfig.tokens.colors.textDark950,
        marginBottom: 10,
        textAlign: "center",
    },
});

export default DefaultErrorRoute;
import React from "react"
import { ImageBackground, Platform, StyleSheet, View } from "react-native"
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome as Icon } from "@expo/vector-icons"
import { WelcomeScreen } from "app/screens/Onboarding/WelcomeScreen"
import { TabBarAdvancedButton } from "app/components/TabBarAdvancedButton"
import background from "assets/background/bottom-tab-image.png"
import ScanAndPayStack from "app/navigators/ScanAndPayStack"
import Analytics from "../../assets/icons/analytics.js"
import Wallet from "../../assets/icons/wallet.js"
import UserCircle from "../../assets/icons/UserCircle.js"
import Home from "../../assets/icons/home.js"
import { Colors } from "react-native-ui-lib"

const BottomBar = createBottomTabNavigator()

type Props = {
  barColor: string
}

export const TabBar: React.FC<Props> = ({ barColor }) => {
  return (
    <BottomBar.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
        </View>
      )}
      tabBarOptions={{
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: barColor,
        },
      }}
      screenOptions={{
        tabBarStyle: { position: "absolute", borderTopWidth: 0, elevation: 0 },
        tabBarBackground: () => (
          <ImageBackground
            source={background}
            style={{ height: Platform.OS === "ios" ? "100%" : "118%", width: "100%" }}
          />
        ),
        tabBarLabel: () => null,
        tabBarActiveTintColor: Colors.primaryColor,
      }}
    >
      <BottomBar.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <BottomBar.Screen
        name="Profile"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Analytics size={24} color={color} />,
        }}
      />
      <BottomBar.Screen
        name="Rocket"
        component={ScanAndPayStack}
        options={{
          tabBarButton: (props) => <TabBarAdvancedButton bgColor={barColor} {...props} />,
        }}
      />
      <BottomBar.Screen
        name="Messages"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Wallet size={24} color={color} />,
        }}
      />
      <BottomBar.Screen
        name="Settings"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ color }) => <UserCircle size={24} color={color} />,
        }}
      />
    </BottomBar.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigatorContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
    elevation: 30,
  },
  xFillLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },
})

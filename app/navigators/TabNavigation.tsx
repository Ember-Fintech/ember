import React from "react"
import { StyleSheet, View } from "react-native"
import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome as Icon } from "@expo/vector-icons"
import { WelcomeScreen } from "app/screens/Onboarding/WelcomeScreen"
import { TabBarAdvancedButton } from "app/components/TabBarAdvancedButton"
import ScanAndPayStack from "app/navigators/ScanAndPayStack"
import { getFocusedRouteNameFromRoute } from "@react-navigation/native"

const BottomBar = createBottomTabNavigator()

type Props = {
  barColor: string
}

export const TabBar: React.FC<Props> = ({ barColor }) => (
  <BottomBar.Navigator
    tabBar={(props) => (
      <View style={styles.navigatorContainer}>
        <BottomTabBar {...props} />
      </View>
    )}
    screenOptions={({ route }) => {
      console.log({ route })
      return {
        headerShown: false,
        tabBarStyle: {
          display: route.name === "UpiScanner" ? "none" : "flex",
        },
      }
    }}
    tabBarOptions={{
      showIcon: true,
      style: styles.navigator,
      tabStyle: {
        backgroundColor: barColor,
      },
    }}
  >
    <BottomBar.Screen
      name="Home"
      component={WelcomeScreen}
      options={{
        tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
      }}
    />
    <BottomBar.Screen
      name="Profile"
      component={WelcomeScreen}
      options={{
        tabBarIcon: ({ color }) => <Icon name="user" size={24} color={color} />,
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
        tabBarIcon: ({ color }) => <Icon name="wechat" size={24} color={color} />,
      }}
    />
    <BottomBar.Screen
      name="Settings"
      component={WelcomeScreen}
      options={{
        tabBarIcon: ({ color }) => <Icon name="gear" size={24} color={color} />,
      }}
    />
  </BottomBar.Navigator>
)

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

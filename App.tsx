import "@expo/metro-runtime"
import React, { RefObject, useEffect, useRef, useState } from "react"
import * as SplashScreen from "expo-splash-screen"
import App from "./app/app"
import useNotification from "./app/hooks/useNotification"
import * as Notifications from "expo-notifications"
import { Text } from "@gluestack-ui/themed"
import { TouchableOpacity } from "react-native"
import { nullPlaceholder } from "i18n-js"
import { useFonts } from "expo-font"

// SplashScreen.preventAutoHideAsync()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})

function IgniteApp() {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>("")
  const [notification, setNotification] = useState<any>()
  const notificationListener = useRef()
  const responseListener = useRef()

  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Sans-Bold' :require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'Sans-Medium' :require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
    'Sans-Regular' :require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    'Sans-SemiBold' :require('./assets/fonts/PlusJakartaSans-SemiBold.ttf')
  });

  const {
    registerForPushNotificationsAsync,
    schedulePushNotification,
    cancelPushNotification,
    createNotificationChannel,
  } = useNotification()

  useEffect(() => {
    // use this token to register for notifications
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token))

    // foreground
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification)
    })

    // background
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response)
    })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }, [])

  // return (
  //   <TouchableOpacity
  //     style={{
  //       flex: 1,
  //       marginTop: 40,
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //     onPress={() => {
  //       schedulePushNotification(
  //         "Notification Title",
  //         "Notification Body",
  //         {},
  //         { seconds: 1 },
  //         "default",
  //       )
  //     }}
  //   >
  //     <Text color={"$govinda100"}>Send Notification</Text>
  //   </TouchableOpacity>
  // )

  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default IgniteApp

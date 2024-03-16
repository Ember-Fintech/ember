import "@expo/metro-runtime"
import React, { RefObject, useEffect, useRef, useState } from "react"
import * as SplashScreen from "expo-splash-screen"
import App from "./app/app"
import useNotification from "./app/hooks/useNotification";
import * as Notifications from "expo-notifications"
import { Text, View, TouchableOpacity } from "react-native";
import { nullPlaceholder } from "i18n-js";


// SplashScreen.preventAutoHideAsync()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function IgniteApp() {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
  const [notification, setNotification] = useState<any>();
  const notificationListener = useRef();
  const responseListener = useRef();

  const {registerForPushNotificationsAsync, schedulePushNotification, cancelPushNotification, createNotificationChannel} = useNotification();

  useEffect(() => {
    // use this token to register for notifications
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // foreground
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // background
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return <TouchableOpacity 
  style={{
    flex : 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={() => {
    schedulePushNotification("Notification Title", "Notification Body", {}, { seconds: 1 }, "default");
  }}
  >
    <Text style={{
      fontSize: 18
    }}>Send Notification</Text>
  </TouchableOpacity>

  // return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default IgniteApp

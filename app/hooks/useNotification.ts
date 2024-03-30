import { Platform } from "react-native"
import * as Notifications from "expo-notifications"
import * as Device from "expo-device"

const useNotification = () => {
  async function registerForPushNotificationsAsync() {
    let token

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      })
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!")
        return
      }
      // Learn more about projectId:
      // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
      token = (await Notifications.getExpoPushTokenAsync({ projectId: "a617a564-cb1c-45e2-b309-379dfd08efeb" })).data
      console.log(token)
    } else {
      alert("Must use physical device for Push Notifications")
    }

    return token
  }

	async function schedulePushNotification(title: string, body: string, data: Object, trigger: Object, channelId?: string) {
		const notificationId = await Notifications.scheduleNotificationAsync({
			content: {
				title: title,
				body: body,
				data: { data: data },
			},
			trigger: {...trigger, channelId: channelId},
		});

		return notificationId;
	}

	async function cancelPushNotification(notificationUUID: string) {
		await Notifications.cancelScheduledNotificationAsync(notificationUUID);
	}


	async function createNotificationChannel(channelId: string, channel: any) {
		await Notifications.setNotificationChannelAsync(channelId, channel);
	}

	return {registerForPushNotificationsAsync, schedulePushNotification, cancelPushNotification, createNotificationChannel};
}

export default useNotification

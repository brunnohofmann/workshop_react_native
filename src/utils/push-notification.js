import {AsyncStorage} from 'react-native';
import firebase, {RemoteMessage} from 'react-native-firebase';

const messaging = firebase.messaging();
const notificating = firebase.notifications();

const checkPermissionAndListMessages = async () => {
  const enabled = await messaging.hasPermission();

  if (enabled) {
    await getToken();
  } else {
    await requestPermission();
  }
  notificationListener();
};

const getToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');

  if (!fcmToken) {
    fcmToken = await messaging.getToken();
    if (fcmToken) {
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  }
  console.log(fcmToken);
};

const requestPermission = async () => {
  try {
    await messaging.requestPermission();
    getToken();
  } catch (error) {
    console.log('permission rejected');
  }
};

const notificationListener = () => {
  notificating.onNotification((notification) => {
    console.log(notification);
    const channel = new firebase.notifications.Android.Channel(
      'daily',
      'Daily Reminders',
      firebase.notifications.Android.Importance.High,
    );

    notification.android.setChannelId(channel._channelId);
    notificating.android.createChannel(channel);
    notificating.displayNotification(notification);
  });
};

export const pushNotificationService = () => checkPermissionAndListMessages();

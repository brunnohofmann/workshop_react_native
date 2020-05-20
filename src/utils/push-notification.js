import {AsyncStorage, Alert} from 'react-native';
import firebase from 'react-native-firebase';

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
  return fcmToken;
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
    console.log('onNotification');
    console.log(notification);

    Alert.alert(notification._title, notification._body);
    const channel = new firebase.notifications.Android.Channel(
      'tasks',
      'tasks reminders',
      firebase.notifications.Android.Importance.High,
    );

    notification.android.setChannelId(channel._channelId);
    notificating.android.createChannel(channel);
    notificating.displayNotification(notification);
  });

  // notificating.onNotificationDisplayed((notification) => {
  //   console.log('onNotificationDisplayed');
  //   console.log(notification);
  // });

  notificating.onNotificationOpened((objMessage) => {
    console.log('onNotificationOpened');
    console.log(objMessage.notification);
    Alert.alert(objMessage.notification._title, objMessage.notification._body);
  });
};

export const pushNotificationService = () => checkPermissionAndListMessages();
export const getDeviceToken = getToken; 

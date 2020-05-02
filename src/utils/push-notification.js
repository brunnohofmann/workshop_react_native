import React from 'react';
import { AsyncStorage } from 'react-native';
import firebase, { RemoteMessage } from 'react-native-firebase';

const messaging = firebase.messaging();

const checkPermission = async () => {
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

export const pushNotificationCheckPermission = () => checkPermission();

const notificationListener = () => {
  messaging.onMessage((message: RemoteMessage) => {
    console.log(message);
  });

  firebase.notifications().onNotification((notification) => {
    console.log(notification);
  });
};

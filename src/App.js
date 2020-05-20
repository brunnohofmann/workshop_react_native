import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styled from 'styled-components';
import ThemeProvider, {ThemeProviderContext} from './ThemeProvider';
import ChangeThemeButton from './components/ChangeThemeButton';
import ViewContainer from './components/ViewContainer';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

const BoxText = styled(Text)`
  padding: 16px;
  margin-top: 24px;
`;
const SimpleText = styled(Text)`
  color: #919191;
`;
const Title = styled(Text)`
  color: #111111;
  flex: 1;
  margin: 10px;
`;

const App = () => {
  const [activeTheme, setActiveTheme] = useState('dark');
  //Remove this method to stop OneSignal Debugging
  OneSignal.setLogLevel(6, 0);

  // Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
  OneSignal.init('85e3de33-2b4c-483d-8ee8-b131551d773d', {
    kOSSettingsKeyAutoPrompt: false,
    kOSSettingsKeyInAppLaunchURL: false,
    kOSSettingsKeyInFocusDisplayOption: 2,
  });
  OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.

  // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
  OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

  useEffect(() => {
    OneSignal.addEventListener('received', onReceiveNotification);
    OneSignal.addEventListener('opened', openedNotification);
    OneSignal.addEventListener('ids', onIds);

    return () => {
      OneSignal.removeEventListener('received', onReceiveNotification);
      OneSignal.removeEventListener('opened', openedNotification);
      OneSignal.removeEventListener('ids', onIds);
    };
  }, []);

  const onReceiveNotification = (notification) => {
    console.log(notification);
  };

  const openedNotification = (openResult) => {
    console.log(openResult);
  };

  const onIds = (device) => {
    console.log('Device info: ', device);
  };

  const myiOSPromptCallback = (permission) => {
    // do something with permission value
  };

  return (
    <ThemeProviderContext.Provider value={{activeTheme, setActiveTheme}}>
      <ThemeProvider>
        <ViewContainer>
          <SafeAreaView>
            <ChangeThemeButton />
            {/*<Button>*/}
            {/*  <TextButton> Button test </TextButton>*/}
            {/*</Button>*/}
            <BoxText>
              <Title> Teste title </Title>
              <SimpleText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </SimpleText>
            </BoxText>
          </SafeAreaView>
        </ViewContainer>
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

export default App;

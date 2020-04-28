import {AppRegistry} from 'react-native';
import Providers from './src/ThemeProvider';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Providers);

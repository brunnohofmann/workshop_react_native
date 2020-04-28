import {AppRegistry} from 'react-native';
import Providers from './src/ThemeProviders';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Providers);

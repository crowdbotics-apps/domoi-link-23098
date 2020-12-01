import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial180588Navigator from '../features/Tutorial180588/navigator';
import NotificationList180560Navigator from '../features/NotificationList180560/navigator';
import Settings180559Navigator from '../features/Settings180559/navigator';
import Settings180551Navigator from '../features/Settings180551/navigator';
import UserProfile180549Navigator from '../features/UserProfile180549/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial180588: { screen: Tutorial180588Navigator },
NotificationList180560: { screen: NotificationList180560Navigator },
Settings180559: { screen: Settings180559Navigator },
Settings180551: { screen: Settings180551Navigator },
UserProfile180549: { screen: UserProfile180549Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

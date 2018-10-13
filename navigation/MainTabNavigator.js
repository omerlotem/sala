import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen';
import InfoScreen from '../screens/InfoScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'מפה',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      image={require('../assets/images/map_icon.png')}
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ScannerStack = createStackNavigator({
  Scanner: ScannerScreen,
});

ScannerStack.navigationOptions = {
  tabBarLabel: 'סורק',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      image={require('../assets/images/QR_icon.png')}
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const InfoStack = createStackNavigator({
  Info: InfoScreen,
});

InfoStack.navigationOptions = {
  tabBarLabel: 'מידע',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      image={require('../assets/images/info_icon.png')}
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ScannerStack,
  InfoStack,
});

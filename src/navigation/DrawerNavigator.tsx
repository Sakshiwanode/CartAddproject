import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen'; 
import SettingsScreen from '../screens/SettingsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabNavigator from './TabNavigator'; // Import TabNavigator

// Define the DrawerParamList to include all screens
export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Cart: undefined;
  Settings: undefined;
  Welcome: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
     <Drawer.Screen name="Welcome" component={WelcomeScreen} />
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

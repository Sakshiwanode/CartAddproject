import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="One" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Two" component={ProfileScreen}options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

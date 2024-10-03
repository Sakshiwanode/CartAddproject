import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';  // Import SplashScreen
import DrawerNavigator from './DrawerNavigator';      // This holds HomeScreen
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Login: undefined;
  Splash: undefined;  
  Main: undefined;
  Home: undefined;
  Hello:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Hello" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

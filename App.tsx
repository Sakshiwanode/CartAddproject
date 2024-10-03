import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';  // Ensure Redux provider is also properly set up
import store from './src/redux/store';  // Default import
 // Adjust path if necessary
import AppNavigator from './src/navigation/AppNavigator'; // Ensure correct path for AppNavigator

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
// Import the RegistrationScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Goa Institute Of Management"
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor: '#9A1B38', // Set the background color to red
            },
            headerTintColor: 'white', // Set the text color to white
          }}
        />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          {/* Add this line for RegistrationScreen */}

        {/* Add additional screens here, e.g., a Home screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


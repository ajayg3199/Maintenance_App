import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native'; // Import Image component
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import Complaint from './complaint';
import RegistrationScreen from './RegistrationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Goa Institute Of Management"
          component={LoginScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#9A1B38',
            },
            headerTintColor: 'white',
            headerLeft: () => (
              <Image
                source={require('./assets/GIM_LOGO.png')} // Replace with the actual path to your image
                style={{ width: 40, height: 40, marginLeft: 10 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerStyle: {
              backgroundColor: '#9A1B38',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="complaint"
          component={Complaint}
          options={{
            headerStyle: {
              backgroundColor: '#9A1B38',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            headerStyle: {
              backgroundColor: '#9A1B38',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

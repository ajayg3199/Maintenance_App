import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    if (username === 'abc' && password === 'abc') {
      // Authentication successful
      navigation.navigate('WelcomeScreen');
    } else {
      // Authentication failed
      alert('Invalid credentials');
    }
  };

  const handleForgotPassword = () => {
    // Navigate to a screen for password recovery or reset
    // For example, you can use navigation.navigate('ForgotPasswordScreen');
    // Implement the "ForgotPasswordScreen" component separately.
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        color="maroon" // Set the login button color to maroon
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  forgotPassword: {
    color: 'maroon', // Set the "Forgot Password" link text color to maroon
    marginTop: 10,
  },
});

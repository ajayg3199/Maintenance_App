import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Implement your password reset logic here.
    // This can include sending a reset link to the provided email address.
    alert(`Password reset request for ${email} has been sent.`);
    navigation.navigate('Login'); // Navigate back to the login screen.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <Button
        title="Reset Password"
        onPress={handleResetPassword}
        color="maroon" // Set the button color to maroon
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'maroon', // Set the title color to maroon
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default ForgotPasswordScreen;

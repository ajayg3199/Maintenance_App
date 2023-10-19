import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RegistrationScreen({ navigation }) {
  const [name, setName] = useState('');
  const [hostelNumber, setHostelNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('');

  const handleRegistration = () => {
    // Implement registration logic here (e.g., send registration data to a server).
    // Replace the following alert with your desired action.
    alert('Registration successful');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Hostel Number"
        onChangeText={text => setHostelNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Room Number"
        onChangeText={text => setRoomNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Branch"
        onChangeText={text => setBranch(text)}
      />
      <Button
        title="Register"
        onPress={handleRegistration}
        color="maroon" // Set the button color to maroon
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set the background color to white
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'maroon', // Set the title text color to maroon
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'maroon', // Set the input text color to maroon
  },
});

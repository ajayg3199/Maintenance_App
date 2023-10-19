import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Complaint = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complaint Types</Text>
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
    color: 'maroon',
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

export default Complaint;

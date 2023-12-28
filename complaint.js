import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const Complaint = ({ navigation }) => {
  const [complaintType, setComplaintType] = useState('');
  const [selectedType, setSelectedType] = useState('Electrical');

  const handlePress = () => {
    // Handle the submission or navigation logic here
    // For example, you can navigate to another screen using navigation.navigate('NextScreen')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>COMPLAINT TYPES</Text>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
        style={styles.dropdown}
        itemStyle={{ color: 'maroon' }}
      >const Electrical_Complaint = ['FAN RUNNING SLOW','FAN REGULATOR','TUBE LIGHT','CEILING LED  LIGHT','THREE PIN SOCKET']
        <Picker.Item label="ELECTRICAL" value='ELECTRICAL' />
        <Picker.Item label="FAN RUNNING SLOW" value='FAN RUNNING SLOW' />
        <Picker.Item label="FAN REGULATOR" value='FAN REGULATOR' />
        <Picker.Item label="TUBE LIGHT" value='TUBE LIGHT' />
        <Picker.Item label="CEILING LED  LIGHT" value='CEILING LED  LIGHT' />
        <Picker.Item label="THREE PIN SOCKET" value='THREE PIN SOCKET' />
      </Picker>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
        style={styles.dropdown}
        itemStyle={{ color: 'maroon' }}
      >const Plumbing_Complaint = ['HEALTH FAUCET','WC SEATER','FLUSH BUTTON','SHOWER','TAP','MIXTURE TAP','WASH BASIN','URINAL SENSOR','MIRROR','EXHAUST FAN','HOT WATER','NORMAL WATER']
        <Picker.Item label="PLUMBING" value="PLUMBING" />
        <Picker.Item label="HEALTH FAUCET" value="HEALTH FAUCET" />
        <Picker.Item label="WC SEATER" value="WC SEATER" />
        <Picker.Item label="FLUSH BUTTON" value="FLUSH BUTTON" />
        <Picker.Item label="SHOWER" value="SHOWER" />
        <Picker.Item label="TAP" value="TAP" />
        <Picker.Item label="MIXTURE TAP" value="MIXTURE TAP" />
        <Picker.Item label="WASH BASIN" value="WASH BASIN" />
        <Picker.Item label="URINAL SENSOR" value="URINAL SENSOR" />
        <Picker.Item label="MIRROR" value="MIRROR" />
        <Picker.Item label="EXHAUST FAN" value="EXHAUST FAN" />
        <Picker.Item label="HOT WATER" value="HOT WATER" />
        <Picker.Item label="NORMAL WATER" value="NORMAL WATER" />
        {/* Add more items as needed */}
      </Picker>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
        style={styles.dropdown}
        itemStyle={{ color: 'maroon' }}
      >const Carpentry_Complaint = ['DOOR LOCK','DOOR HANDLE','DOOR HINGES','WINDOW HANDLE','WINDOW HINGES','WINDOW GLASS','ALMERAHA',
      'COT','CLOTH HANGER','STUDY TABLE','CURTAINS','CURTAIN ROD']
        <Picker.Item label="CARPENTRY" value="CARPENTRY" />
        <Picker.Item label="DOOR LOCK" value="DOOR LOCK" />
        <Picker.Item label="DOOR HANDLE" value="DOOR HANDLE" />
        <Picker.Item label="DOOR HINGES" value="DOOR HINGES" />
        <Picker.Item label="WINDOW HANDLE" value="WINDOW HANDLE" />
        <Picker.Item label="WINDOW HINGES" value="WINDOW HINGES" />
        <Picker.Item label="WINDOW GLASS" value="WINDOW GLASS" />
        <Picker.Item label="ALMERAHA" value="ALMERAHA" />
        <Picker.Item label="COT" value="COT" />
        <Picker.Item label="CLOTH HANGER" value="CLOTH HANGER" />
        <Picker.Item label="STUDY TABLE" value="STUDY TABLE" />
        <Picker.Item label="CURTAINS" value="CURTAINS" />
        <Picker.Item label="CURTAIN ROD" value="CURTAIN ROD" />
        {/* Add more items as needed */}
      </Picker>
      <Picker
        selectedValue={selectedType}
        onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}
        style={styles.dropdown}
        itemStyle={{ color: 'maroon' }}
      >
        <Picker.Item label="Other" value="Other" />
        {/* Add more items as needed */}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="ENTER COMPLAINT DETAILS"
        value={complaintType}
        onChangeText={(text) => setComplaintType(text)}
      />
      <Button title="Submit" onPress={handlePress} color="maroon" />
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
  dropdown: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default Complaint;

import {StyleSheet, Text, TextInput, Button, View} from 'react-native';
import React, {useState} from 'react';

export default function MobileNumber(props) {
  const [mobileNumber, setMobileNumber] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>enter Mobile number</Text>
      <TextInput
        style={styles.input}
        autoFocus
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <Button
        title="Sign in with OTP"
        onPress={() => props.onSubmit(mobileNumber)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'blue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
  },
});

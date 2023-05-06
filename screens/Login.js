import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    if (email != '' && password != '') {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log('resoonse', res);
          Alert.alert('User Created successfully,you can login now');
        })
        .catch(error => {
          console.log('error_++++++', error);
          Alert.alert(error.message);
        });
    } else {
      Alert.alert('both fields are mandatory');
    }
  };

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('response', res);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log('error', error);
        Alert.alert(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.button}>
        <Button title="Signup" onPress={signup} />
        <Button title="Login" onPress={login} />
      </View>
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
    fontSize: 21,
    marginBottom: 20,
  },
  input: {
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6d69c3',
    marginVertical: 10,
    padding: 15,
  },
  button: {
    width: 150,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

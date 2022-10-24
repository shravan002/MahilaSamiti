import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [enteredUserIdText, setEnteredUserIdText] = useState('');
  const [enteredPasswordText, setEnteredPasswordText] = useState('');

  function userIdInputHandler(enteredText) {
    setEnteredUserIdText(enteredText);
  }
  function passwordInputHandler(enteredText) {
    setEnteredPasswordText(enteredText);
  }
  function formSubmitHandler() {
    console.log(enteredUserIdText);
    console.log(enteredPasswordText);
    setEnteredUserIdText('');
    setEnteredPasswordText('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.pageTitle}>SIGN UP</Text>
        <Text>Mobile Number</Text>
        <TextInput style={styles.textInput} onChangeText={userIdInputHandler} />
        <Text>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={passwordInputHandler}
        />
        <View style={styles.button}>
          <Button color="#FF0000" title="Sign UP" onPress={formSubmitHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    marginTop: 8,
    marginBottom: 8,
  },
  pageTitle: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
    marginTop: 30,
    textAlign: 'center',
    color: '#FF0000',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
  },
});

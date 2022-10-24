import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [enteredNameText, setEnteredNameText] = useState('');

  function nameInputhandler(enteredText) {
    setEnteredNameText(enteredText);
  }

  function addNameHandler() {
    console.log(enteredNameText);
    setEnteredNameText('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <TextInput style={styles.textInput} onChangeText={nameInputhandler} />
      </View>
      <View style={styles.button}>
        <Button color="red" title="Next" onPress={addNameHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    marginTop: 100,
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
  button: {
    marginTop: 30,
    alignItems: 'center',
  },
});

import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [enteredNameText, setEnteredNameText] = useState('');
  const [enteredLifeText, setEnteredLifeText] = useState('');
  const [enteredMPRText, setEnteredMPRText] = useState('');
  const [enteredCollectionFreqText, setEnteredCollectionFreqText] =
    useState('');
  const [enteredMemberText, setEnteredMemeberText] = useState('');
  const [members, setMembers] = useState([]);

  function nameInputHandler(enteredText) {
    setEnteredNameText(enteredText);
  }
  function lifeInputHandler(enteredText) {
    setEnteredLifeText(enteredText);
  }
  function mprInputHandler(enteredText) {
    setEnteredMPRText(enteredText);
  }
  function collectionFreqInputHandler(enteredText) {
    setEnteredCollectionFreqText(enteredText);
  }
  function memberInputHandler(enteredText) {
    setEnteredMemeberText(enteredText);
  }

  function addMemberHandler() {
    setMembers(currentMembers => [...currentMembers, enteredMemberText]);
  }

  function formSubmitHandler() {
    console.log(enteredNameText);
    console.log(enteredLifeText);
    console.log(enteredMPRText);
    console.log(enteredCollectionFreqText);
    console.log(members);
    setEnteredNameText('');
    setEnteredLifeText('');
    setEnteredMPRText('');
    setEnteredCollectionFreqText('');
    setEnteredMemeberText('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.pageTitle}>CREATE COMMITTEE</Text>
        <Text>Name</Text>
        <TextInput style={styles.textInput} onChangeText={nameInputHandler} />
        <Text>Life</Text>
        <TextInput style={styles.textInput} onChangeText={lifeInputHandler} />
        <Text>MPR</Text>
        <TextInput style={styles.textInput} onChangeText={mprInputHandler} />
        <Text>Collection Frequency</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={collectionFreqInputHandler}
        />
        <Text>Members</Text>
        <View style={styles.memberList}>
          {members.map(member => (
            <Text key={member} style={styles.memebers}>
              {member}
            </Text>
          ))}
          <View style={styles.signUpContainer}>
            <TextInput
              style={styles.textInput1}
              placeholder="Member Name"
              onChangeText={memberInputHandler}
            />
            <Button color="#FF0000" title="Add" onPress={addMemberHandler} />
          </View>
        </View>

        <View style={styles.button}>
          <Button color="#FF0000" title="SUBMIT" onPress={formSubmitHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    marginTop: 8,
    marginBottom: 8,
  },
  textInput1: {
    borderWidth: 0.5,
    borderColor: '#cccccc',
    marginTop: 8,
    marginBottom: 8,
    width: '80%',
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
  memberList: {
    marginTop: 8,
    marginBottom: 8,
    padding: 10,
    borderColor: '#cccccc',
    borderWidth: 0.5,
  },
  memebers: {
    backgroundColor: '#FF8A8A',
    margin: 5,
    padding: 8,
    borderRadius: 6,
  },
});

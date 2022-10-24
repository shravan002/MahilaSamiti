import React from 'react';
import {Text, View} from 'react-native';
import axios from '../axios';

class App extends React.Component {
  state = {
    data: String,
  };
  componentDidMount() {
    this.getapiData();
  }
  async getapiData() {
    let resp = await axios.fetchCommittee();
    console.warn(resp.data);
    this.setState({data: resp.data});
  }
  render() {
    return (
      <View>
        {this.state.data.length > 0 ? (
          <View>{<Text>{this.state.data.name}</Text>}</View>
        ) : (
          <Text>No data</Text>
        )}
      </View>
    );
  }
}

export default App;

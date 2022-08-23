import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.getapiData();
  }
  async getapiData() {
    let resp = await axios.get(
      'https://local-banking-system.herokuapp.com/member',
    );
    console.warn(resp.data);
    this.setState({data: resp.data});
  }
  render() {
    return (
      <View>
        {this.state.data.length > 0 ? (
          <View>
            {this.state.data.map(item => (
              <Text>{item.name}</Text>
            ))}
          </View>
        ) : (
          <Text>No data</Text>
        )}
      </View>
    );
  }
}

export default App;

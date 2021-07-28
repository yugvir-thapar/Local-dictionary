import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './localdb';


console.log(db.photosynthesis.defination);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displaytext: '',
      defination: '',
      usage:''
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <Header
            backgroundColor={'lightblue'}
            centerComponent={{
              text: 'Local Dictionary',
              style: { color: 'fef153', fontSize: 20 },
            }}
          />

          <TextInput
            placeholder="Enter Text Here"
            style={styles.textStyle}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
          />
          {/*on the press of go button, first check if the word exists in the db
          then convert it inlowercase
          and then trim it*/}
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              var word = this.state.text.toLowerCase().trim();
              db[word] === undefined
                ? alert('word does not exist in dictionary')
                : this.setState({
                    defination: db[word].defination,
                    usage: db[word].usage
                  });
            }}>
            <Text>Go</Text>
          </TouchableOpacity>
          <View style={styles.innerContainer}>
            <Text>{this.state.defination}</Text>
          </View>
          <View style={styles.innerContainer}>
          <Text>{this.state.usage}</Text>
          </View>
          <Image
              source={require('./Images/dictionary.jpg')}
              style={{ width:250, height:250,alignContent:'center',alignSelf:'center'}}
            />
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    borderWidth: 2,
    width: '60%',
    height: 30,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonStyle: {
    borderWidth: 2,
    width: '20%',
    height: 30,
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  innerContainer : {
    margin:10,
    backgroundColor: 'lightblue'
  }
});

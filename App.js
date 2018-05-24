/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableHighlight
} from 'react-native';
import InputButton from './InputButton';

const inputButtons=[
  [1,2,3,'/'],
  [4,5,6,'*'],
  [7,8,9,'-'],
  [0,'.','=','+']
];
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      inputValue:0
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.inputViewStyle}>
       <Text style={styles.displayText}>{this.state.inputValue}</Text>
         </View>
       <View style={styles.inputKeysStyle}>
       {this._renderInputButtons()}</View>
       
      </View>
    );
  }

_renderInputButtons(){
  let views =[];
  for(var r=0; r<inputButtons.length;r++){
    let row = inputButtons[r];
    let inputRow = [];
    for (var i=0; i<row.length; i++){
      let input = row[i];
      inputRow.push(
        <InputButton value={input} key={r+"-"+i} onPress={this._onInputButtonPressed.bind(this,input)}/>
              );

    }
    views.push(<View style={styles.inputRow} key={"row-"+r}>{inputRow}</View>);
  }
  return views;
}
_onInputButtonPressed(input){
  switch(typeof input){
    case 'number':
    return this.handleNumberInput(input);
  }
  
  
 
}
handleNumberInput(num){
  let inputValue = (this.state.inputValue*10)+num;
  this.setState({
    inputValue:inputValue
  })
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputViewStyle: { 
    flex: 2,
    backgroundColor: '#193441',
    justifyContent:'center'
    
  },
  inputKeysStyle: {
flex: 8,
backgroundColor: '#3E606F'
  },
  inputRow:{
    flex:1,
    flexDirection:'row'
  },
  displayText:{
    color:'white',
    fontSize:38,
    fontWeight:'bold',
    textAlign:'right',
    padding:20
  }
});

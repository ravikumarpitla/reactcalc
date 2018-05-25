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
  ["AC","DEL",'/','*'],
  [7,8,9,'-'],
  [4,5,6,'+'],
  [1,2,3,'C'],
  ['%',0,'.',"="]
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
      inputValue:0,
      prevInputVal:0,
      selectOp:null,
      resultShown:false
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.inputViewStyle}>
       <Text style={styles.displayText}>{this.state.inputValue}</Text>
         </View>
       <View style={styles.inputKeysStyle}>
       {this.renderInputButtons()}</View>
       
      </View>
    );
  }

renderInputButtons(){
  let views =[];
  for(var r=0; r<inputButtons.length;r++){
    let row = inputButtons[r];
    let inputRow = [];
    for (var i=0; i<row.length; i++){
      let input = row[i];
      inputRow.push(
        <InputButton value={input} key={r+"-"+i} onPress={this.onInputButtonPressed.bind(this,input)}/>
              );

    }
    views.push(<View style={styles.inputRow} key={"row-"+r}>{inputRow}</View>);
  }
  return views;
}
onInputButtonPressed(input){
  switch(typeof input){
    case 'number':{
      return this.handleNumberInput(input);
    }    
    case 'string':{
      return this.handlecalCOps(input);
    }
  }
  
  
 
}
handlecalCOps(input){
  switch(input){
    case "DEL":{
      return this.updateOnDel();
    }
    case "AC":{
      return this.updateOnAC();
    }
    case "C":{
      return this.updateOnAC();
    }
    case "/":{
      return this.updateStateOnOp(input);
    }
    case "*":{
      return this.updateStateOnOp(input);
    }case "+":{
      return this.updateStateOnOp(input);
    }
    case "-":{
      return this.updateStateOnOp(input);
    }
    case "%":{
      return this.updateStateOnOp(input);
    }
    case "=":{
      return this.setResult(input);
    }
    

  }
 
    return;
}
setResult(input){
  let prevVal=this.state.prevInputVal,
      inputVal = this.state.inputValue,
      operator = this.state.selectOp;
      if(this.state.selectOp==="%"){
        inputVal = prevVal*(inputVal/100);
      }else{
        inputVal = eval(prevVal+operator+inputVal);
      }
      this.setState({
        inputValue:inputVal,
        prevInputVal:0,
        selectOp:null,
        resultShown:true
      });
}
updateStateOnOp(input){
this.setState({
  prevInputVal:this.state.inputValue,
  inputValue:0,
  selectOp:input,
  resultShown:false
});
//alert("prev val is  "+this.state.prevInputVal+"    new val is  "+this.state.inputValue);
}
handleNumberInput(num){
  let inputValue = 0;
  if(!this.state.resultShown){
    inputValue=(this.state.inputValue*10)+num;
  }else{
    inputValue=num;
  }
  this.setState({
    inputValue:inputValue,
    resultShown:false
  });
}
updateOnDel(){
  let inputValue = parseInt(this.state.inputValue/10);
  this.setState({
    inputValue:inputValue,
    resultShown:false
  });
 
}
updateOnAC(){
  this.setState({
    inputValue:0,
    resultShown:false
  });
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
  },
  buttonsStyle:{
    flex: 1,
    backgroundColor: '#3E606F'
  }
});

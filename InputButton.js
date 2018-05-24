import React,{Component} from 'react';
import {View,Text,StyleSheet, TouchableHighlight, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
export default class InputButton extends Component {
    render(){
        return(
            
            <TouchableOpacity style={styles.inputButton}  
            underlayColor="#990000" 
            onPress={this.props.onPress}>
                <Text style={styles.inputButtonText}>{this.props.value}</Text>
                </TouchableOpacity>
                
        )
    };
}

const styles = StyleSheet.create({
inputButton:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
},
inputButtonText: {
    fontSize: 22,
    fontWeight:'bold',
    color:'white'

}
});
import * as React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';

export default class App extends React.Component {

  constructor (){
    super();
    this.state = {
      typedName:'',
      isButtonPressed : false,
      name : ''
    }
  }

  speak = (word) =>{
    var thingToSay = this.state.name;
    this.setState({
      typedName : word
    })
    Speech.speak(thingToSay);
    console.log(thingToSay);
  }

  render(){
    return (
      <SafeAreaProvider>
        <View>

        <Header
          backgroundColor = {"#76212d"}
          centerComponent = {{
            text:"TEXT-CONVERTER-APP",
            style :{color:"white",fontSize:20},
          }}/> 

        <TextInput 
          style = {styles.inputBox}
          onChangeText={(typed)=>{
            this.setState({name:typed})
          }}
          value = {this.state.name}
        />
         
         <TouchableOpacity style = {styles.button}
            onPress = {()=>{this.setState({isButtonPressed:true});
            this.speak(this.state.name);}}>
            <Text style = {styles.speechText}>Click here to hear the Speech</Text>
          </TouchableOpacity> 
        
          <View>
            <Text style = {{color: "black",fontSize:20,marginTop:20}}>Text : {this.state.typedName}</Text>
          </View>

        </View>
      </SafeAreaProvider>
    );
  }
  
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'maroon',
    alignItems: 'center',
    justifyContent: 'center',
    color : "white",
    fontSize : 20,
  },
  inputBox: {
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign : 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    marginRight : 40,
    width: 200,
    height: 90,
    marginLeft: 70,
    backgroundColor:"#165673",
    color:"white"
  },
  typeStyle:{
    fontSize:20,
    textAlign : "left",
    marginTop:20,
    color:"#67213c"
  },
  speechText:{
    color : "white",
    fontSize : 20,
  }
});

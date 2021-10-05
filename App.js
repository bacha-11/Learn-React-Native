import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goal, setGoal] = useState('')

  const goalInputHandler = (goal) =>{
    setGoal(goal)
  }


  const addGoalHandler = () =>{
    console.log(goal)
  }
  
  return (
    <View style={styles.screen}>

      <View style={styles.inputBtnStyle}>
        <TextInput placeholder="Course Goal" value={goal} style={styles.inputStyle} onChangeText={goalInputHandler} />
        <Button title="+" style={{with:"10%"}} onPress={addGoalHandler} />
      </View>

      <View>
      
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  screen:{
    padding:30,
  },

  inputBtnStyle:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
  },

  inputStyle:{
    marginTop:30,
    width:"80%",
    marginBottom:10,
    borderBottomColor:"black",
    borderBottomWidth:1
  }

});



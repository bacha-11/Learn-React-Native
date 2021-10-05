import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.screen}>

      <View style={styles.inputBtnStyle}>
        <TextInput placeholder="Course Goal" style={styles.inputStyle} />
        <Button title="+" style={{with:"10%"}} />
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



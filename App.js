import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  return (
    <View style={{padding:30}}>

      <View style={{flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
        <TextInput placeholder="Course Goal" style={{marginTop:30,  width:"80%", marginBottom:10, borderBottomColor:"black", borderBottomWidth:1}} />
        <Button title="+" style={{with:"10%"}} />
      </View>

      <View>
      
      </View>
      
    </View>
  );
}



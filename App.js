import React, { useState } from 'react';
import GoalView from './components/GoalView'
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';


export default function App() {

  const [courseGoal, setCourseGoal] = useState([])

  const addGoalHandler = (goal) =>{
    setCourseGoal(currentGoal => [...currentGoal, {key: Math.random().toString(), value: goal}])
  }
  
  return (
    
    <View style={styles.screen}>

        <GoalInput funData={addGoalHandler} />


        <FlatList data={courseGoal} renderItem={itemData =>(
          <GoalView  data={itemData.item.value} />
        )} />

        
         
    </View>
    
  );
}


const styles = StyleSheet.create({
  screen:{
    padding:30,
  },

});



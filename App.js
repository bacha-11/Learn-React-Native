import React, { useState } from 'react';
import GoalView from './components/GoalView'
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';


export default function App() {

  const [courseGoal, setCourseGoal] = useState([])

  const addGoalHandler = (goal) =>{
    setCourseGoal(currentGoal => [...currentGoal, {key: Math.random().toString(), value: goal}])
  }

  const RemoveGoalHandler = (goalId) =>{

    console.log("delete",goalId)
    setCourseGoal(courseGoal => {
      return courseGoal.filter((goal) => goal.key !== goalId)
    }); 
    
    }
  
  return (
    
    <View style={styles.screen}>

        <GoalInput goalHandler={addGoalHandler} />


        <FlatList data={courseGoal} renderItem={itemData =>(
          <GoalView  data={itemData.item.value} onDelete={RemoveGoalHandler.bind(this, itemData.item.key)} />
        )} />

        
         
    </View>
    
  );
}


const styles = StyleSheet.create({
  screen:{
    padding:30,
  },

});



import React, { useState } from 'react';
import GoalView from './components/GoalView'
import { Button, StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';


export default function App() {

  const [courseGoal, setCourseGoal] = useState([])
  const [isModal, setIsModal] = useState(false)


  const addGoalHandler = (goal) =>{
    setCourseGoal(currentGoal => [...currentGoal, {key: Math.random().toString(), value: goal}])
    setIsModal(false)
  }

  const handleCancel = () =>{
    setIsModal(false)
  }


  const RemoveGoalHandler = (goalId) =>{
    setCourseGoal(courseGoal => {
      return courseGoal.filter((goal) => goal.key !== goalId)
    }); 
    
    }
  
  return (

    
    <View style={styles.screen}>

        <Button title="Add New Title" onPress={() => setIsModal(true) } />

        <GoalInput goalHandler={addGoalHandler} visible={isModal} cancel={handleCancel} />


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



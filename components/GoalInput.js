import React, {useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";



const GoalInput = (props) => {
    const [goal, setGoal] = useState('')

    const goalInputHandler = (goal) =>{
        setGoal(goal)
    }

    const inputHandler = () =>{
        props.goalHandler(goal)
        setGoal('')
    }

    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputBtnStyle}>
                <TextInput placeholder="Course Goal" value={goal} style={styles.inputStyle} onChangeText={goalInputHandler} />
                <Button title="+" onPress={inputHandler} />
            </View>
        </Modal>
    )
}

export default GoalInput;



const styles = StyleSheet.create({

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
      },
})

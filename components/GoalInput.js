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
                <View style={styles.btnContainer}>
                    <Button title="ADD" onPress={inputHandler} />
                    <Button title="CANCEL" color='red' onPress={props.cancel} />
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;



const styles = StyleSheet.create({

    inputBtnStyle:{
        display:"flex",
        alignItems:"center"
      },

      btnContainer:{
        width:80,
        flexDirection:"row",
        justifyContent:"space-around"
      },
    
      inputStyle:{
        marginTop:30,
        width:"80%",
        marginBottom:10,
        borderBottomColor:"black",
        borderBottomWidth:1
      },
})

import React, {useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";



const GoalInput = (props) => {
    const [goal, setGoal] = useState('')

    const goalInputHandler = (goal) =>{
        setGoal(goal)
    }

    return(
        <View style={styles.inputBtnStyle}>
            <TextInput placeholder="Course Goal" value={goal} style={styles.inputStyle} onChangeText={goalInputHandler} />
            <Button title="+" style={{with:"10%"}} onPress={() => props.funData(goal)} />
        </View>
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

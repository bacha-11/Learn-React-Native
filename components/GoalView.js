import React from "react";
import { View, Text, StyleSheet } from "react-native"


const GoalView = props =>{
    return(
        <View style={styles.listItem}> 
                <Text style={styles.textColor}> {props.data} </Text> 
        </View>

    )
}

export default GoalView;


const styles = StyleSheet.create({

    listItem:{
        padding:10,
        backgroundColor:"#e67e22",
        marginVertical:10,
      },
    
      textColor:{
        color:"white",
      }
});
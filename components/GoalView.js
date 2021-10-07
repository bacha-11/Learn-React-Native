import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"


const GoalView = props =>{
    return(
        <TouchableOpacity onPress={props.onDelete}>
          <View style={styles.listItem}> 
              <Text style={styles.textColor}> {props.data} </Text> 
          </View>
        </TouchableOpacity>
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
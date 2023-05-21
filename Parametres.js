import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import {CalendarList} from 'react-native-calendars'

function Parametres({navigation}){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boutoon}>
                <Text style={styles.deco} onPress={()=>navigation.navigate('Login')}>DECONNEXION</Text> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EBF5FB',
        padding:20,
        borderRadius:20,
        width:'100%',
        alignItems:'center'
    },
    deco:{
        color:'#2980B9',
    },
    boutoon:{
        width: "70%",
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#AFF2F2",
        borderRadius:5,
        borderWidth:1,
        borderColor:'#2980B9'
    }
})
export default Parametres
import React,{useEffect, useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, View , ScrollView, TextInput,TouchableOpacity,Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DayPicker} from 'react-native-picker-weekday'
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './auth'
import CalendarPage from'./Calendar'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Task from './medicament'
import addForm from './addMeds';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const AccountItem = ({item, index}) => {
    if (item.Type != "Doctor") {
        return (
          
          <TouchableOpacity onPress={()=>Alert.alert('Avis du patient : Nul')} key={index} style={styles.itemisation}>
            <Text style={styles.text}>{item.Nom} </Text> 
            <Text>{item.Prenom} </Text> 
          </TouchableOpacity>
        )
    }
}

//navbar
function Page_Doctor({navigation}) {
    const[AccountList, setAccountList] = useState([]);

    useEffect(() => {
        if (AccountList == null || AccountList.length == 0) {
            const fetchData = async function() {
                const jsonValueString = await AsyncStorage.getItem("AccountList");
                setAccountList(jsonValueString != null ? JSON.parse(jsonValueString) : [])
            };
    
            fetchData();
        }
    })

    return (
      <View style={styles.container}>
        <View style={styles.wrapfromage}>
            <ScrollView>
                <View style={styles.itemjspr}>
                    {AccountList.map((item, index) => {
                        return(
                            <AccountItem item={item} index={index}/>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
      </View>
    );
  }

  
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:"center",
    justifyContent:'center'
  },
//   wrapfromage:{
//     paddingVertical:15,
//     paddingHorizontal:15,
//     width:250,
//     backgroundColor:'#fff',

//   },
  itemisation:{
    padding:10,
    borderRadius:15,
    justifyContent:'center',
    backgroundColor:'#AFF2F2',
    borderColor:'#2980B9',
    borderWidth:1,
    marginTop:10,
    marginBottom:5,
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
  },
  text:{
    fontSize:15,
    fontWeight:'bold'
  }
})
export default Page_Doctor;
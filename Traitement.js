import React,{useEffect, useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View , ScrollView, TextInput,TouchableOpacity,Keyboard} from 'react-native';
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

const Calendar = ({weekdays}) => {
  return (
    <DayPicker
      weekdays={weekdays}
      activeColor='#2980B9'
      textColor='white'
      inactiveColor='#BFC9CA'
    />
  )
}

const TraitementItem = ({traitementItem, index, deleteMed}) => {
  return (
    <TouchableOpacity key={index} onPress={() => deleteMed(index)}>
      <Task text={traitementItem.med_name} />
      <Task text={traitementItem.heure} />
      <Calendar weekdays={traitementItem.date} />
    </TouchableOpacity>
  )
}

//navbar
function Traitement({navigation}) {
  const[medicament,setMedicament] = useState();
  const[medItem,setMedItem] = useState([]);
  const[fetch, setFetch] = useState(false);
  const[traitementList, setTraitementList] = useState([]);

  useEffect(() => {
    const fetchData = async function() {
      console.log("test");
      const jsonValueString = await AsyncStorage.getItem('traitementList');
      setTraitementList(jsonValueString != null ? JSON.parse(jsonValueString) : [])
    };

    fetchData();
  }, [fetch]);

  const deleteMed = async (index) => {
    let itemsCopy = [...traitementList];
    itemsCopy.splice(index, 1);
    await AsyncStorage.setItem('traitementList', JSON.stringify(itemsCopy));
    console.log("je supprime une donnée")
    setTraitementList(itemsCopy);
  }

  const handleAddMeds=()=>{
    Keyboard.dismiss();
    setMedItem([...medItem,medicament])
    setMedicament(null);
  }

  // const deleteMed = (index) =>{
  //   let itemsCopy=[...medItem]; 
  //   itemsCopy.splice(index,1);
  //   setMedItem(itemsCopy);
  // }

    return (
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <ScrollView style={styles.items}>
            {
              traitementList.map((item,index)=>{
                return (
                  // <TouchableOpacity key={index} onPress={()=>deleteMed(index)}>
                  //   <Task text={item}/>
                  // </TouchableOpacity>
                  <TraitementItem traitementItem={item} index={index} deleteMed={deleteMed}/>
                )
              })
            }
          </ScrollView>
        </View>
        {/* Ajouter un traitement */}
        <KeyboardAvoidingView
          behavior = {Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}>

          {/* <TextInput style={styles.input} placeholder={'Ajoutez un traitement'} value={medicament} onChangeText={text=>setMedicament(text)}/> */}

          <TouchableOpacity onPress={()=> {setFetch(prevState => !prevState); navigation.navigate('addMed')}}>
              <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
              </View>
          </TouchableOpacity>
          </KeyboardAvoidingView>



      </View>
    );
  }

  
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  items:{
    marginTop:-30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    backgroundColor:'#EBF5FB',
    borderRadius:60,
    borderColor:'#2980B9',
    borderWidth:1,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#EBF5FB',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#2980B9',
    borderWidth:1,
  },
  addText:{

  },
})
export default Traitement;
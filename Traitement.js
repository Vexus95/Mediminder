import React,{useState} from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View ,TextInput,TouchableOpacity,Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './auth'
import CalendarPage from'./Calendar'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Task from './medicament'
import addForm from './addMeds';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//navbar
function Traitement({navigation}) {
  const[medicament,setMedicament] = useState();
  const[medItem,setMedItem] = useState([]);

  const handleAddMeds=()=>{
    Keyboard.dismiss();
    setMedItem([...medItem,medicament])
    setMedicament(null);
  }

  const deleteMed = (index) =>{
    let itemsCopy=[...medItem]; 
    itemsCopy.splice(index,1);
    setMedItem(itemsCopy);
  }
    return (
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <View style={styles.items}>
            {
              medItem.map((item,index)=>{
                return (
                  <TouchableOpacity key={index} onPress={()=>deleteMed(index)}>
                    <Task text={item}/>
                  </TouchableOpacity>

                )
              })
            }
          </View>
        </View>
        {/* Ajouter un traitement */}
        <KeyboardAvoidingView
          behavior = {Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}>

          <TextInput style={styles.input} placeholder={'Ajoutez un traitement'} value={medicament} onChangeText={text=>setMedicament(text)}/>

          <TouchableOpacity onPress={()=>navigation.navigate('addMed')}>
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
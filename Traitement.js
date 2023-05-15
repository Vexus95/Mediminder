import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './auth'
import CalendarPage from'./Calendar'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Task from './medicament'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//navbar
function Traitement() {
    return (
      <View style={styles.container}>
        <View style={styles.taskWrapper}>
          <View style={styles.items}>
            {/* c'est la ou y'aura tes meédocs */}
            <Task text={'Médicament 1'}/>
            <Task text={'Médicament 2'}/>
            <Task/>
            <Task/>
            <Task/>
          </View>
        </View>
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
})
export default Traitement;
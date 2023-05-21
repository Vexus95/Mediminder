import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[AccountList, setAccountList] = useState([]);
  
  async function verif(){
    const jsonValueString = await AsyncStorage.getItem('AccountList')
    setAccountList(jsonValueString != null ? JSON.parse(jsonValueString) : [])
    console.log("regarde ca : ", AccountList);
    var i = 0;
    console.log(email, " && ", password);
    // console.log("jz suis la ", email, " && ", password)
    for (;i != AccountList.length; i++)
    {
      console.log(AccountList[i]);
      if (AccountList[i].Email === email && AccountList[i].Mdp === password){
        console.log("valide");
        navigation.navigate('Home')
        return;
      }
    }
    Alert.alert('Mot de passe ou mail incrorrect')
    
    // navigation.navigate('Home')
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Se connecter</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="E-mail"
          placeholderTextColor="#B2BABB"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mot de passe"
          placeholderTextColor="#B2BABB"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={()=>Alert.alert('Dommage')}>Mot de passe oublié?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={verif}>
        <Text style={styles.loginText}>Connexion</Text> 
      </TouchableOpacity> 
      <Text style={styles.Or}>Ou</Text> 
      <TouchableOpacity style={styles.loginBtn2} onPress={()=>navigation.navigate('Signin')}>
        <Text style={styles.loginText}>Créer un compte</Text> 
      </TouchableOpacity> 
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#fff",
    width: "70%",
    height: 45,
    marginBottom: 20,
    borderColor:'#AFF2F2',
    borderRadius:5,
    borderWidth:2,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#AFF2F2",
    borderRadius:5,
  },
  loginBtn2: {
    width: "70%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderRadius:5,
    borderWidth:2,
    borderColor:'#2980B9'
  },
  title:{
    fontSize:25,
    marginBottom:30,
    color:'#2980B9'
  },
  loginText:{
    color:'#2980B9',
  },

  Or:{
    marginTop:10,
  }
});

export default LoginScreen 
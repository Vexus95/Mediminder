import { StatusBar } from "expo-status-bar";
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


function LoginScreen({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <Text style={styles.forgot_button}>Mot de passe oublié?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.loginText}>Connexion</Text> 
      </TouchableOpacity> 
      <Text style={styles.Or}>Ou</Text> 
      <TouchableOpacity style={styles.loginBtn2} onPress={()=>navigation.navigate('Home')}>
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
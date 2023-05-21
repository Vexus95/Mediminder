import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Yup from 'yup';
import {Formik,Form,Field,FieldProps} from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";



const AddSingInSchema = Yup.object().shape({
    Email: Yup.string()
        .email('Mail invalide')
        .required('Champs requis'),
    Nom:Yup.string()
        .min(2,'Invalide, trop court')
        .max(50,'Invalide, trop long')
        .required('Champs requis'),
    Prenom:Yup.string()
        .min(2,'Invalide, trop court')
        .max(50,'Invalide, trop long')
        .required('Champs requis'),
    Mdp:Yup.string()
        .min(6,'Le mot de passe est trop court')
        .max(50,'Le mot de passe est trop long')
        .required('Champs requis')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
            'Votre mot de passe doit contenir 6 caractères, une majuscule et un chiffre'

        )


})

function SigninScreen({navigation}) {
    const type = ['Doctor','Patient']
  return (
    <Formik initialValues={{
        Email:'',
        Nom:'',
        Prenom:'',
        Mdp:'',
        Type:''
    }}
     validationSchema={AddSingInSchema}
     onSubmit={async (values) => {
        const jsonValue = await AsyncStorage.getItem('AccountList')
        let AccountList = jsonValue != null ? JSON.parse(jsonValue) : null;
        console.log(AccountList)

        if (AccountList == null) {
            AccountList = [values]
        } else {
            AccountList.push(values)
        }
        await AsyncStorage.setItem(
            'AccountList',
            JSON.stringify(AccountList)
        );
        console.log(AccountList)
        navigation.navigate('Login')}
    }
    >
    {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit}) =>(

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Se connecter</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="E-mail"
          placeholderTextColor="#B2BABB"
          value= {values.Email}
          onChangeText={handleChange('Email')}
          onBlur={()=>setFieldTouched('Email')}
        /> 
      </View> 
      {errors.Email && (
        <Text style={styles.errorTxt}>{errors.Email}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nom"
          placeholderTextColor="#B2BABB"
          value= {values.Nom}
          onChangeText={handleChange('Nom')}
          onBlur={()=>setFieldTouched('Nom')}
        /> 
      </View>
      {errors.Nom && (
        <Text style={styles.errorTxt}>{errors.Nom}</Text>
      )} 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Prénom"
          placeholderTextColor="#B2BABB"
          value= {values.Prenom}
          onChangeText={handleChange('Prenom')}
          onBlur={()=>setFieldTouched('Prenom')}
        /> 
      </View> 
      {errors.Prenom && (
        <Text style={styles.errorTxt}>{errors.Prenom}</Text>
      )}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mot de passe"
          placeholderTextColor="#B2BABB"
          secureTextEntry={true}
          value= {values.Mdp}
          onChangeText={handleChange('Mdp')}
          onBlur={()=>setFieldTouched('Mdp')}
        /> 
      </View> 
      {errors.Mdp && (
        <Text style={styles.errorTxt}>{errors.Mdp}</Text>
      )} 
        <View styles={styles.inputView}> 
        <SelectDropdown
            data={type}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                values.Type = selectedItem
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
        </View>
      
      <Button onPress={handleSubmit} title='Créer le compte' style={styles.Btn}/>
    </View> 
    )}
  </Formik>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#EBF5FBx",
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
    Btn: {
      padding:10,
      borderRadius:15,
      justifyContent:'center',
      backgroundColor:'red',
      borderColor:'#2980B9',
      borderWidth:1
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
    },
    errorTxt:{
        fontSize:12,
        color:'red'
    },
  });
  
export default SigninScreen 
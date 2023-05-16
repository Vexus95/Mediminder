import{StatusBar, StyleSheet,Text,TextInput,View,TouchableOpacity} from 'react-native';
import React from 'react';


function AddForm(){
    return (
        <View style ={styles.wrapper}>
            <StatusBar barStyle={'light-content'}/>
            <View style={styles.formContainer}>
                <Text style={styles.title}> Ajoutez votre médicament </Text>
                <View style={styles.inputWrapper}>
                    <TextInput style ={styles.inputStyle} placeholder='Nom du médicament'/>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput style ={styles.inputStyle} placeholder='Jours'/>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput style ={styles.inputStyle} placeholder='Heure'/>
                </View>
                <TouchableOpacity onPress={() => {}} style={styles.submitBtn}>
                    <Text style={styles.submitBtnTxt}>Ajouter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingHorizontal:15,
    },
    formContainer:{
        backgroundColor:'#EBF5FB',
        padding:20,
        borderRadius:20,
        width:'100%'
    },
    title:{
        fontSize:20,
        fontWeight:'400',
        marginBottom:15,
    },
    inputWrapper:{
        marginBottom:15,
    },
    inputStyle:{
        borderWidth:1,
        borderRadius:10,
        padding:10,
        borderColor:'#2980B9'
    },
    errorTxt:{
        fontSize:12,
        color:'#FF0D10'
    },
    submitBtn:{
        padding:10,
        borderRadius:15,
        justifyContent:'center',
        backgroundColor:'#AFF2F2',
        borderColor:'#2980B9',
        borderWidth:1,
    },
    submitBtnTxt:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'700'
    }
})
export default AddForm
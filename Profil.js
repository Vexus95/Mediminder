import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
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
import { CalendarList } from 'react-native-calendars'

function Profil() {
    const [User, setUser] = useState(null)

    useEffect(() => {
        if (User == null) {
            async function recup_user() {
                const jsonValueString = await AsyncStorage.getItem("User")
                console.log("faut qeu tu regardes ça ", jsonValueString);
                setUser(jsonValueString != null ? JSON.parse(jsonValueString) : null)
                console.log("ALED AIDE MOI ", User);
            }

            recup_user();
        };
    })
    let text
    return (
        <View style={styles.formContainer}>
            {User != null ?
                <View style={styles.itemisation}>
                    <Text style={styles.text}>Nom: {User.Nom}</Text>
                    <Text style={styles.text}>Prénom: {User.Prenom}</Text>
                    <Text style={styles.text}>Je suis un: {User.Type}</Text>
                    <Text style={styles.text}>Mail: {User.Email}</Text>
                </View>
                :
                <View>
                    <Text>Pas de user</Text>
                </View>
            }
            <Text style={styles.title}>Entrez un code médecin:</Text>
            <TextInput placeholder='Ecrire ici' value={text}/>
            <TouchableOpacity>
            <Text style={styles.alertbutton} onPress={()=>Alert.alert('Vous êtes reliés avec le docteur Arthur')}>Envoyer</Text> 
            </TouchableOpacity> 
        </View>
        
    )
}

const styles=StyleSheet.create({
    formContainer:{
        flex:1,
        backgroundColor:'#EBF5FB',
        padding:20,
        borderRadius:20,
        width:'100%'
    },
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
        marginBottom:5,
    },
    title:{
        marginTop:50,
        fontSize:20,
    },
    alertbutton:{
        marginTop:10,
        borderWidth:1,
        textAlign:'center',
        borderRadius:15,
        borderColor:'#2980B9',
        
    }
})
export default Profil
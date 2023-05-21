import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
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

    return (
        <View>
            {User != null ?
                <View>
                    <Text>Nom: {User.Nom}</Text>
                    <Text>Prénom: {User.Prenom}</Text>
                    <Text>Je suis un: {User.Type}</Text>
                    <Text>Mail: {User.Email}</Text>
                </View>
                :
                <View>
                    <Text>Pas de user</Text>
                </View>
            }
        </View>
    )
}

export default Profil
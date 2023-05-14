
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


function CalendarPage(){
    return (
        <View>
            <Text>Salut</Text>
            <CalendarList
            onVisibleMonthsChange={(months)}

            pastScrollRange={50}

            futureScrollRange={50}

            scrollEnabled={true}

            showScrollIndicator={true}
        />
        </View>
    )
}

export default CalendarPage
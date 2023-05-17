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
import {CalendarList} from 'react-native-calendars'

function CalendarPage(){
    return (
        <View>
            <CalendarList
            onVisibleMonthsChange={months=> {
                console.log(months);
            }}

            pastScrollRange={50}

            futureScrollRange={50}

            scrollEnabled={true}

            showScrollIndicator={true}
        />
        </View>
    )
}

export default CalendarPage
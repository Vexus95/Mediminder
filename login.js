import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './auth'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//navbar
function Home() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#AFF2F2'}}>
        <Text>Home!</Text>
      </View>
    );
  }
  
function HomeScreen() {
    return (
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            
          })}
        >
          <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Tab.Screen name="Settings" component={Home} />
        </Tab.Navigator>
    );
}

function Auth(props) {
 
    return (
           <NavigationContainer>
            <Stack.Navigator
             screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Login" component={LoginScreen}/>    
                <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
           </NavigationContainer>
    );
}

export default Auth;
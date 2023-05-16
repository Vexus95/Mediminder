import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

//import navbar
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Auth from './login';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  return(
    <SafeAreaInsetsContext>
      <Auth />
    </SafeAreaInsetsContext>
  )
}
// //navbar
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#AFF2F2'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }


// const Tab = createBottomTabNavigator();

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <View>
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown:false}}>
//         <Stack.screen 
//           name='login'
//           component={Login}/>
//       </Stack.Navigator>  
//     </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#85C1E9',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


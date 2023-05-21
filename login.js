import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';


import LoginScreen from './auth'
import CalendarPage from'./Calendar'
import Traitement from './Traitement';
import AddForm from './addMeds';
import SigninScreen from './create';
import Profil from'./Profil'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Page_Doctor from './Page_Doctor';

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

function HomeScreen({route}) {
  const[AccountList, setAccountList] = useState([]);
  const[User, setUser] = useState(null);

  const handleSetUser = async (user) => {
    setUser(user);
    const jsonValueString = await AsyncStorage.getItem("user");
    if (jsonValueString != null) {
      AsyncStorage.removeItem("User");
    }
    console.log("je set ça ", user);
    AsyncStorage.setItem("User", JSON.stringify(user))
  }

  React.useEffect(() => {
    if (AccountList == null || AccountList.length == 0) {
      async function recup_user(){
        const jsonValueString = await AsyncStorage.getItem('AccountList')
        setAccountList(jsonValueString != null ? JSON.parse(jsonValueString) : [])
        console.log("Salut",AccountList)
      }
      
      const name = route.params;
      id_user = name.i
      recup_user()
    } else {
      handleSetUser(AccountList[id_user])
    }
  })

    return (
      
        <Tab.Navigator 
        
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Mes Traitements') {
                iconName = focused
                  ? 'heart-circle-outline'
                  : 'heart-outline'
              }else if (route.name === 'Mes Patients') {
                iconName = focused
                  ? 'heart-circle-outline'
                  : 'heart-outline'
              } else if (route.name === '???') {
                iconName = focused ? 'medkit-outline' : 'medkit-outline';
              }
              else if (route.name==='Profil'){
                iconName = focused ?'person-outline' : 'person-outline';
              }
              else if (route.name==='Calendrier'){
                iconName= focused?'calendar-outline' : 'calendar-outline'
              }
              else if (route.name==='Paramètres'){
                iconName = focused?'cog-outline' : 'cog-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#85C1E9',
            tabBarInactiveTintColor: '#95A5A6',
            
          })}
        >
          
          {User != null && User.Type==='Patient'?
          <Tab.Screen name="Mes Traitements" component={Traitement} 
            options={{
              headerStyle:{backgroundColor:'#AFF2F2'},
              headerTitleAlign:'center',
              }} />
            :<Tab.Screen name="Mes Patients" component={Page_Doctor}
            options={{
              headerStyle:{backgroundColor:'#AFF2F2'},
              headerTitleAlign:'center',}}  />}
          <Tab.Screen name="Calendrier" component={CalendarPage} />
          <Tab.Screen name="Profil" component={Profil} options={{
              headerStyle:{backgroundColor:'#AFF2F2'},
              headerTitleAlign:'center',
              }} />
          <Tab.Screen name="Paramètres" component={Home} />
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
                <Stack.Screen name="Signin" component={SigninScreen}/>    
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="addMed" component={AddForm}/>
            </Stack.Navigator>
           </NavigationContainer>
    );
}

export default Auth;
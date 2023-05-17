import{Alert,StatusBar,Button, StyleSheet,Text,TextInput,View,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Formik,Form,Field} from "formik";
import * as Yup from 'yup';
import {DayPicker} from 'react-native-picker-weekday'

const AddMedSchema = Yup.object().shape({
    med_name: Yup.string()
        .min(2,'Invalide, trop court')
        .max(50,'Invalide, trop long')
        .required('Champs requis'),
    heure:Yup.string()
        .required("Champs requis"),

})

const SampleApp = ({weekdays, setWeekdays}) => {
    return (
      <DayPicker
        weekdays={weekdays}
        setWeekdays={setWeekdays}
        activeColor='#2980B9'
        textColor='white'
        inactiveColor='#BFC9CA'
      />
    )
  }




function AddForm({navigation}){
    const [weekdays, setWeekdays] = React.useState([])
    return (


        <Formik initialValues={{
            med_name:'',
            heure:'',
        }}
        validationSchema={AddMedSchema}
        onSubmit={async (values) => {
                values.date = weekdays
                const jsonValue = await AsyncStorage.getItem('traitementList')
                let traitementList = jsonValue != null ? JSON.parse(jsonValue) : null;
                console.log(traitementList)

                if (traitementList == null) {
                    traitementList = [values]
                } else {
                    traitementList.push(values)
                }
                await AsyncStorage.setItem(
                    'traitementList',
                    JSON.stringify(traitementList)
                );
                navigation.navigate('Home')}
            }
        >
            {({values,errors,touched,handleChange,setFieldTouched,isValid,handleSubmit}) =>(

            
        <View style ={styles.wrapper}>
            <StatusBar barStyle={'light-content'}/>
            <View style={styles.formContainer}>
                <Text style={styles.title}> Ajoutez votre médicament </Text>
                <View style={styles.inputWrapper}>
                    <TextInput 
                        style ={styles.inputStyle} 
                        placeholder='Nom du médicament' 
                        value={values.med_name}
                        onChangeText={handleChange('med_name')} 
                        onBlur={()=>setFieldTouched('med_name')}   
                    />
                    {errors.med_name && (
                        <Text style={styles.errorTxt}>{errors.med_name}</Text>
                    )}
                </View>
                <SampleApp weekdays={weekdays} setWeekdays={setWeekdays}/>
                  {errors.days && (
                    <Text style={styles.errorTxt}>{values.days}</Text>
                )}    
                
                <View style={styles.inputWrapper}>
                    <TextInput 
                    style ={styles.inputStyle} 
                    placeholder='Heure'
                    value={values.heure}
                    onChangeText={handleChange('heure')}  
                    onBlur={()=>setFieldTouched('heure')} />
                    {errors.heure && (
                        <Text style={styles.errorTxt}>{errors.heure}</Text>
                    )}
                </View>
                {/* <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
                    <Text style={styles.submitBtnTxt}>Ajouter</Text>
                </TouchableOpacity> */}
                <Button onPress={handleSubmit} title='Ajouter' style={styles.submitBtn}/>
            </View>
        </View>
        )}
        </Formik>
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
    dateStyle:{
        padding:10,
    },
    errorTxt:{
        fontSize:12,
        color:'red'
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
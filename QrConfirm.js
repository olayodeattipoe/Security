import React, { useEffect, useState } from 'react';
import {View,Text, ImageBackground,StyleSheet, TouchableOpacity,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function QrConfirm({navigation, route}){
    const returnedData = route.params && route.params.returnedData ? route.params.returnedData:{};
    const[credentials, setcredentials] = useState({})
    const SendCodetoServer = async() =>{
        try{
            await fetch('http://192.168.191.103:5000/receive-data',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(returnedData),
            })
        }catch(error){
        console.error('Error',error);
    }
}

    useEffect(()=>{
        SendCodetoServer()
    },[])

    useEffect(() => {
        const fetchData = async () => {
          await SendCodetoServer(); // Wait for the POST request to complete
          const apiUrl = 'http://192.168.191.103:5000/receive-data';
          try {
            const response = await fetch(apiUrl);
            const responseData = await response.json();
            setcredentials(responseData);
            console.log(credentials)
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        }
      
        fetchData(); // Call the async function
      }, []); // Empty dependency array
      
    

    const DisplayCredentials = () =>{
        return(
            <View style = {Styles.ViewStyle}>
                <Text style ={Styles.Textprops}>{credentials['Name']}</Text>
                    <Text>         </Text>
                    <Text>         </Text>
                    <Text style = {Styles.Textprops}>{credentials['Table']}</Text>
                    <Text>         </Text>
                    <Text>         </Text>
                    <Text style ={Styles.Textprops}>{credentials['Guest']}</Text>
            </View>
        )
    }
    
    return(
        <ImageBackground style={{height:'100%',width:'100%'}}  resizeMode='cover' source={require('./assets/flowers.jpg')}>
             <StatusBar translucent={true} backgroundColor='transparent'/>
                    <DisplayCredentials></DisplayCredentials>
                    <TouchableOpacity onPress={()=>navigation.navigate('HomePage')} style = {{alignSelf:'center',top:'50%'}}>
                        <Image  style ={{height:100,width:100}} source = {require('C:/Users/admin/Security/assets/okIcon.gif')}></Image>
                    </TouchableOpacity>
        </ImageBackground>
    )

}

const Styles = StyleSheet.create({
    Textprops:{
        color:'red',
        fontSize: 35,
        fontWeight:'600',
        fontFamily:'serif',
    },

    ViewStyle:{
        alignSelf:'center',
        top:'35%'
    }
})
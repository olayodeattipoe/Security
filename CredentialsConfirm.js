import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity,Image} from 'react-native';

export default function CredentialsConfirm({navigation, route}){

    const name = route.params && route.params.name ? route.params.name : {};
    const table = route.params && route.params.table ? route.params.table : {};
    const guest = route.params && route.params.guest ? route.params.guest : {};

    return(
        <ImageBackground  style={{height:'100%', width:'100%'}} source={require('./assets/flowers.jpg')}>
            <View style={{flex:4,top:'35%',alignSelf:'center'}}>
                <StatusBar translucent={true} backgroundColor='transparent'></StatusBar>
                <Text style={{fontFamily:'serif',fontSize:35, color:'red',fontWeight:'600',borderBottomWidth:10,borderColor:'transparent'}}>{name}</Text>
                <Text> </Text>
                <Text> </Text>
                <Text style ={{fontFamily:'serif',fontSize:35,color:'red',fontWeight:'600', borderBottomWidth:6,borderColor:'transparent'}}>{table}</Text>
                <Text> </Text>
                <Text> </Text>
                <Text style ={{fontFamily:'serif',fontSize:35,color:'red',fontWeight:'600'}}>{guest}</Text>
            </View> 
            <TouchableOpacity onPress={()=>navigation.navigate('HomePage')} style = {{alignSelf:'center',flex:1}}>
                        <Image  style ={{height:100,width:100}} source = {require('C:/Users/admin/Security/assets/okIcon.gif')}></Image>
            </TouchableOpacity>
        </ImageBackground>
    )
}
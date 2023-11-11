import React from 'react';
import {TouchableOpacity,Text,ImageBackground,StyleSheet,SafeAreaView,View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomePage({navigation}){


    return(
        <SafeAreaView>
            <StatusBar translucent={true} backgroundColor='transparent'/>
            <ImageBackground style={Styles.ImageBg} resizeMode='cover' source={require('./assets/coupleImage.jpg')}>
                <View style ={Styles.SearchByQr}>
                    <TouchableOpacity onPress={()=> navigation.navigate('ScanQr')}
                    style={{ backgroundColor:'rgba(143, 188, 143,0.7)',borderRadius:20,borderWidth:2,borderColor:'darkgreen',height:'5%',width:'60%',alignItems:'center',justifyContent:'center',marginBottom:'3%'}}>
                        <Text style={{fontSize:15,color:'black',fontWeight:"600"}}>Check By Qr Code</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('CheckingCredentials')}
                    style={{backgroundColor:'rgba(143, 188, 143, 0.7)',borderRadius:20,borderWidth:2,borderColor:'darkgreen',height:'5%',width:'60%',alignItems:'center',marginTop:"3%",justifyContent:'center'}}>
                        <Text style ={{fontSize:15,color:'black',fontWeight:'600'}}>Check By Credentials</Text>
                    </TouchableOpacity>
                </View>   
            </ImageBackground>
        </SafeAreaView>   
    )
}

const Styles = StyleSheet.create({
    ImageBg:{
        height: '100%',
        width:'100%',
    }
,
    SearchByQr:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    }
})
import React, { useEffect, useState } from 'react';
import {View,Text, ImageBackground,StyleSheet, TouchableOpacity,Image, TextInput} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FlatList } from 'react-native';

export default function CheckingCredentials({navigation, route}){
    const[flatlistdata, setflatlistdata] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        const fetchData = async () => {
          const apiUrl = 'http://192.168.191.103:5000/security';
          try {
            const response = await fetch(apiUrl);
            const responseData = await response.json();
            setflatlistdata(responseData)
          } catch (error) {
            console.error('Error fetching data: ', error);
          }
        }
      
        fetchData(); // Call the async function
      }, []); // Empty dependency array       


    const filteredData = flatlistdata.filter((item) => {
        if (searchText == ''){
            return true
        }
         return item.email.includes(searchText) || item.number.includes(searchText);
        })


    return(
    <View style ={{flex:1}}>
        <StatusBar translucent={false} backgroundColor='rgba(143,188,143,0.8)'></StatusBar>
        <ImageBackground style={{flex:1,height:'100%', width:'100%'}} source ={require('C:/Users/admin/Security/assets/blackback.jpg')}>
            <View style={{ marginTop:StatusBar.currentHeight,borderBottomRightRadius:10,borderBottomLeftRadius:10,flex:0.7,backgroundColor:'rgba(143,188,143,0.8)'}}>    
                <View style={{marginTop:'2%'}}>
                    <View style={{backgroundColor:'white',borderRadius:30,width:'80%',alignSelf:'center'}}>
                        <TextInput
                        placeholder='search by email or phone'
                        style={{width:'93%',alignSelf:'center'}}
                        value = {searchText}
                        onChangeText={setSearchText}/>
                    </View>
                </View>
                <View style={{justifyContent:'center',alignSelf:'center',marginTop:'6%'}}>
                    <Text style = {{fontSize:26, color:'darkgreen',fontStyle:'italic',fontWeight:'500'}}>Guest Credentials</Text>
                </View>
            </View>
                <View style ={{flex:5,padding:10}}>
                    {filteredData.length === 0 ? (
                        <View style ={{alignItems:'center',marginTop:'30%'}}>
                            <Text style={{fontSize:30,color:'brown'}}>Guest Not Found</Text>
                            <Image style={{}} source={require('./assets/fourOfour.png')}/>
                        </View>
                    ):(
                   <FlatList
                   showsHorizontalScrollIndicator={false}
                   data ={filteredData}
                   keyExtractor={item => item.id.toString()}
                   renderItem={(guest)=>{
                       return(
                       <TouchableOpacity onPress={()=>{
                               navigation.navigate('CredentialsConfirm',{
                               name: guest.item.name,
                               table: guest.item.table,
                               guest: guest.item.guest})
                       }}>
                           <View style={{ backgroundColor:'rgba(255, 255, 255, 1)',flexDirection:'row',marginBottom:'3%',height:100,flex:1, borderRadius:30,borderWidth:1,borderColor:'darkgreen'}}>
                               <Image style ={{left:'6%',top:'5%',height:70, width:70}} source={require('./assets/user.png')}></Image>
                               <View style={{left:'9%',alignSelf:'center'}}>
                                   <Text style= {{fontSize:16,color:'#800020'}}>  Email:</Text>
                                   <Text style= {{fontSize:16,color:'#800020'}}>  Phone:   </Text>
                               </View>
                               <View style={{justifyContent:'center',left:'2%'}}>
                                   <Text style={{fontSize:16,color:'green'}}>{guest.item.email}</Text>
                                   <Text style={{fontSize:16,color:'green'}}>{guest.item.number}</Text>
                               </View>    
                           </View>
                       </TouchableOpacity>
                         )}                 
                   }
               />     
                    )}
                
            </View>
        </ImageBackground>
    </View>

    )

    
}

const Styles = StyleSheet.create({
    ViewStyle:{
        borderRadius:20,
        alignSelf:'center', 
        width:'90%',
        backgroundColor:'white',
        borderColor:'darkgreen',
        borderWidth:1,
        flex:0.9,
        marginTop:'9%'
    },
})
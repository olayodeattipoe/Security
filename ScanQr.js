import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity } from 'react-native';

export default function ScanQr({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [returnedData, setReturnedData] = useState('');


  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setReturnedData(data);
      if (returnedData !== ''){
        console.log(returnedData);
      navigation.navigate('QrConfirm', { returnedData });
      }
    };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style ={{flex:2}}>
        <Text style={{position:'relative',top:'5%',left:'20%',color:'black',fontSize:18}}>Scan an Invitation QR Code</Text>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={{height:'100%', width:'100%'}}
        />
      </View>
      <View style={{flex:0.2}}>
        <TouchableOpacity onPress={()=>navigation.navigate('HomePage')}>
          <Image style={{alignSelf:'center',height:60,width:60}} source ={require('C:/Users/admin/Security/assets/cancel.png')}></Image>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(143,188,143,0.8)'
  },
});

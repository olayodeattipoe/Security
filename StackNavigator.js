import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import ScanQr from './ScanQr';
import QrConfirm from './QrConfirm';
import CheckingCredentials from './CheckingCredentials';
import CredentialsConfirm from './CredentialsConfirm';

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator>
          <Stack.Screen name = 'HomePage'  options={{header:()=><></>}} component ={HomePage} ></Stack.Screen>
          <Stack.Screen name = 'ScanQr' options ={{header:()=><></>}} component={ScanQr}></Stack.Screen>
          <Stack.Screen name = 'QrConfirm' options={{header:()=><></>}} component={QrConfirm}></Stack.Screen>
          <Stack.Screen name = 'CheckingCredentials' options={{header:()=><></>}} component={CheckingCredentials}></Stack.Screen>
          <Stack.Screen name = 'CredentialsConfirm'  options={{header:()=><></>}} component ={CredentialsConfirm} ></Stack.Screen>
        </Stack.Navigator>

    );
}


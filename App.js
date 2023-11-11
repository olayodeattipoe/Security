import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

function App() {
  return (

    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;

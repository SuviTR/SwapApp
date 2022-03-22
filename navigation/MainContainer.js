import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import Tabs from './Tabs'

//pages
import Swap from '../components/pages/SwapPage';

const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tabs />
  );
}

function SwapPage() {
  return (
    <Swap />
  );
}

//modify headerMode!!!!!
//<Stack.Navigator initialRouteName="Home" headerMode="none">
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="SwapPage" component={SwapPage} initialParams={'0'}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

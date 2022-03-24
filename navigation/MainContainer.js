import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

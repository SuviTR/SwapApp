import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './Tabs'

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

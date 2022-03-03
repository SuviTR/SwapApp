import React from 'react';
import { View } from 'react-native';

const FlexColumnALMol = ({children, flexStyle}) => {
  return (
    <View style={[flexStyle, {flexDirection: 'column', alignItems:'flex-start'}]}>
      {children}
    </View>
  );
}
export default FlexColumnALMol;
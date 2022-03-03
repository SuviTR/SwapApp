import React from 'react';
import { View } from 'react-native';

const FlexColumnACMol = ({children, flexStyle}) => {
  return (
    <View style={[flexStyle, {flexDirection: 'column', alignItems:'center'}]}>
      {children}
    </View>
  );
}
export default FlexColumnACMol;
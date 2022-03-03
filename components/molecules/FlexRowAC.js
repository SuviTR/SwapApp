import React from 'react';
import { View } from 'react-native';

const FlexRowACMol = ({children, flexStyle}) => {
  return (
    <View style={[flexStyle, {flexDirection: 'row', alignItems:'center', margin: 1}]}>
      {children}
    </View>
  );
}
export default FlexRowACMol;
import React from 'react';
import { Text } from 'react-native';

const TextAtom = ({text, textStyle}) => {
  return (
    <Text style={textStyle}>
      {text}
    </Text>
  );
}
export default TextAtom;
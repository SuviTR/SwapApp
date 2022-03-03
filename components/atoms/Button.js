import React from 'react';
import { Pressable, Text } from 'react-native';

const ButtonAtom = ({text, onPress, buttonStyle, textStyle, a11y}) => {
  return (
    <Pressable onPress={onPress} style={buttonStyle} accessibilityLabel={a11y}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
}
export default ButtonAtom;
import React from 'react';
import { Pressable, Text } from 'react-native';

const ButtonAtom = ({children, onPress, buttonStyle, a11y}) => {
  return (
    <Pressable onPress={onPress} style={buttonStyle} accessibilityLabel={a11y}>
      {children}
    </Pressable>
  );
}
export default ButtonAtom;
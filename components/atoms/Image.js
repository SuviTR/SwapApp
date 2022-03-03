import React from 'react';
import { Image } from 'react-native';

const ImageAtom = ({path, imageStyle}) => {
  return (
    <Image
      source={path}
      style={imageStyle}
    />
  );
}
export default ImageAtom;
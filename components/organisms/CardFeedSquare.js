import React from 'react';
import { View, Text } from 'react-native';

import ImageAtom from '../atoms/Image';

const styles = require('../../styles/styles');

const CardFeedSquare = ({path, brand, name, type, size, gender, color}) => {
  return (
    <View style={styles.feedCard}>
      <ImageAtom path={path} imageStyle={styles.feedImage}/>
      <Text numberOfLines={1} style={{marginTop:5}}>{brand} {name}</Text>
      <Text numberOfLines={1}>{gender} - {size} - {color}</Text>
    </View>
  );
}
export default CardFeedSquare;
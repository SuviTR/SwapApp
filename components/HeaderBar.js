import React from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';

import Images from '../assets/ImageSources';
const styles = require('../components/styles');

export default function HeaderBar({ headerTitle }) {
  return (
    <View style={[styles.headerBar]}>
      <Image
        source={Images.icons.icn6}
        style={{marginRight: 10, width: 35, height: 35}}
      />
      <Text style={styles.text}>{headerTitle}</Text>
    </View>
  );
}
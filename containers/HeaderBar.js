import React from 'react';
import { View } from 'react-native';

import images from '../utils/imageSources';
import ImageAtom from '../components/atoms/Image';
import TextAtom from '../components/atoms/Text';

const styles = require('../styles/styles');

export default function HeaderBar({ headerTitle }) {
  return (
    <View style={[styles.headerBar]}>
      <ImageAtom path={images.icons.icn6} imageStyle={styles.logoHeader} />
      <TextAtom text={headerTitle} textStyle={styles.text} />
    </View>
  );
}


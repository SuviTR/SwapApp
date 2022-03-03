import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from '../utils/imageSources';

import ImageAtom from '../components/atoms/Image';
import SwapButtonsOrg from '../components/organisms/SwapButtons';
import SwapFromTemp from '../components/templates/SwapFrom';
import HeaderBar from '../containers/HeaderBar';

const styles = require('../styles/styles');

export default function SwapScreen({ navigation }) {
  return (
    <SafeAreaView>
      <HeaderBar headerTitle='You have an offer'/>
      <View style={[styles.container, styles.swapScreen]}>
        <ImageAtom path={images.img2} imageStyle={styles.swapImageLarge}/>
        <View style={styles.swapDetailsContainer}>
          <SwapFromTemp />
          <SwapButtonsOrg />
        </View>
      </View>
    </SafeAreaView>
  );
}
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import images from '../../utils/imageSources';

import ImageAtom from '../atoms/Image';
import SwapButtonsOrg from '../organisms/SwapButtons';
import SwapFromTemp from '../templates/SwapFrom';
import HeaderBar from '../../containers/HeaderBar';

const styles = require('../../styles/styles');

function getSwapImage(offerID) {
  return(
    <View>
      <Text>
        {offerID}
        HEI
      </Text>

    </View>
  )
}

export default function SwapPage({ route }) {

  //const { offerId } = route.params.offerId;

  return (
    <SafeAreaView>
      <HeaderBar headerTitle='You have an offer'/>
      <View style={[styles.container, styles.swapScreen]}>
        <ImageAtom path={images.img2} imageStyle={styles.swapImageLarge}/>
        {getSwapImage()}
        <View style={styles.swapDetailsContainer}>
          <SwapFromTemp />
          <SwapButtonsOrg />
        </View>
      </View>
    </SafeAreaView>
  );
}
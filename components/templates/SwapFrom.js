import React from 'react';
import { View } from 'react-native';

import images from '../../utils/imageSources';
import ImageAtom from '../atoms/Image';
import TextAtom from '../atoms/Text';
import FlexRowACMol from '../molecules/FlexRowAC';
import OfferedByOrg from '../organisms/OfferedBy';

const styles = require('../../styles/styles');

const SwapFrom = () => {
  return (
    <View style={{marginTop: 10, marginBottom:10}}>
      <FlexRowACMol flexStyle={styles.justContSpaceBwn}>
        <FlexRowACMol>
          <ImageAtom path={images.img3} imageStyle={styles.swapImageSmall} />
          <TextAtom text='+500€' textStyle={styles.priceText} />
        </FlexRowACMol>
        <View style={styles.verticalLine}></View>
        <OfferedByOrg />
      </FlexRowACMol>
    </View>
  );
}
export default SwapFrom;
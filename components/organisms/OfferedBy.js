import React from 'react';

import images from '../../utils/imageSources';
import ImageAtom from '../atoms/Image';
import TextAtom from '../atoms/Text';
import FlexColumnACMol from '../molecules/FlexColumnAC';
import FlexColumnALMol from '../molecules/FlexColumnAL';
import FlexRowACMol from '../molecules/FlexRowAC';
import ImageTextRowMol from '../molecules/ImageTextRow';

const styles = require('../../styles/styles');

const OffererDetails = () => {
  return (
    <FlexColumnALMol>
      <ImageTextRowMol
        path={images.icons.icn10}
        text='Germany'
        imageStyle={styles.iconStyleSmall}
        textStyle={styles.infoText}
      />
      <ImageTextRowMol
        path={images.icons.icn3}
        text='Verified'
        imageStyle={styles.iconStyleSmall}
        textStyle={styles.infoText}
      />
      <ImageTextRowMol
        path={images.icons.icn11}
        text='More'
        imageStyle={styles.iconStyleSmall}
        textStyle={styles.infoText}
      />
    </FlexColumnALMol>
  );
}

const OfferedBy = () => {
  return (
    <FlexColumnACMol>
      <TextAtom text='Offered by' textStyle={styles.infoTextHeader} />
      <FlexRowACMol>
        <ImageAtom path={images.img4} imageStyle={styles.userImageSmall} />
        <OffererDetails />
      </FlexRowACMol>
    </FlexColumnACMol>
  );
}

export default OfferedBy;
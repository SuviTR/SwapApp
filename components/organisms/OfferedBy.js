import React from 'react';

import images from '../../utils/imageSources';
import { offeredByIcons, offeredByTexts } from '../../utils/testData';
import ImageAtom from '../atoms/Image';
import TextAtom from '../atoms/Text';
import FlexColumnACMol from '../molecules/FlexColumnAC';
import FlexColumnALMol from '../molecules/FlexColumnAL';
import FlexRowACMol from '../molecules/FlexRowAC';
import ImageTextRowMol from '../molecules/ImageTextRow';
import ImageTextRowListOrg from '../organisms/ImageTextRowList';

const styles = require('../../styles/styles');

const OfferedBy = () => {
  return (
    <FlexColumnACMol>
      <TextAtom text='Offered by' textStyle={styles.infoTextHeader} />
      <FlexRowACMol>
        <ImageAtom path={images.img4} imageStyle={[styles.userImageSmall, {marginRight:10}]} />
        <ImageTextRowListOrg icons={offeredByIcons} texts={offeredByTexts} />
      </FlexRowACMol>
    </FlexColumnACMol>
  );
}

export default OfferedBy;
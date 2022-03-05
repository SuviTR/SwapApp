import React from 'react';
import { View, Text } from 'react-native';

import images from '../../utils/imageSources';

import FlexRowACMol from '../molecules/FlexRowAC';
import FlexColumnALMol from '../molecules/FlexColumnAL';
import ImageTextRowMol from '../molecules/ImageTextRow';

const styles = require('../../styles/styles');

function rows(icons, texts, brand, name, type, size, gender, color, transaction, style) {
  var rows = [];

  if(!texts && !transaction) {
    texts = [type, size, color, gender];
  } else if (!texts && transaction) {
    icons = [icons];
    texts = [transaction];
  }

  for(let i = 0; i < icons.length; i++){
    rows.push(
      <View key={i} style={style}>
        <ImageTextRowMol
          path={icons[i]}
          text={texts[i]}
          imageStyle={styles.iconStyleSmall}
          textStyle={styles.infoText}
        />
      </View>
    );
  }
  return rows;
}

const ImageTextRowList = ({icons, texts, brand, name, type, size, gender, color, transaction, style}) => {
  return (
    <FlexColumnALMol>
      {rows(icons, texts, brand, name, type, size, gender, color, transaction, style)}
    </FlexColumnALMol>
  );
}
export default ImageTextRowList;
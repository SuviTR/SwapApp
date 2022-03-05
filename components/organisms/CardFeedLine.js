import React from 'react';
import { View, Text } from 'react-native';

import images from '../../utils/imageSources';
import { offersFeedIcons, homeScreenFeed, offersFeedTexts } from '../../utils/testData';
import ImageAtom from '../atoms/Image';
import TextAtom from '../atoms/Text';
import FlexRowACMol from '../molecules/FlexRowAC';
import FlexColumnALMol from '../molecules/FlexColumnAL';
import ImageTextRowListOrg from '../organisms/ImageTextRowList';

const styles = require('../../styles/styles');

const CardFeedLine = ({path, brand, name, type, size, gender, color, transaction}) => {
  return (
   <FlexRowACMol flexStyle={[styles.feedCard, {height:'100%'}]}>
     <ImageAtom path={path} imageStyle={styles.feedImage}/>
     <FlexColumnALMol flexStyle={{height:'100%', justifyContent:'space-between', padding: 20}}>
       <TextAtom text={[brand, " ", name]} textStyle={[styles.h2]}/>
       <ImageTextRowListOrg
        icons={offersFeedIcons}
        type={type}
        size={size}
        gender={gender}
        color={color}
       />
       <ImageTextRowListOrg
         icons={images.icons.icn18}
         transaction={transaction}
       />
     </FlexColumnALMol>
   </FlexRowACMol>
  );
}
export default CardFeedLine;
import React from 'react';

import ImageAtom from '../atoms/Image';
import TextAtom from '../atoms/Text';
import FlexColumnACMol from '../molecules/FlexColumnAC';

const ImageTextColumn = ({path, text, imageStyle, textStyle}) => {
  return (
    <FlexColumnACMol>
      <ImageAtom path={path} imageStyle={imageStyle} />
      <TextAtom text={text} textStyle={textStyle} />
    </FlexColumnACMol>
  );
}
export default ImageTextColumn;
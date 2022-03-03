import React from 'react';

import ImageAtom from '../atoms/Image';
import TextAtom from '../atoms/Text';
import FlexRowACMol from '../molecules/FlexRowAC';

const ImageTextRow = ({path, text, imageStyle, textStyle}) => {
  return (
    <FlexRowACMol>
      <ImageAtom path={path} imageStyle={imageStyle} />
      <TextAtom text={text} textStyle={textStyle} />
    </FlexRowACMol>
  );
}
export default ImageTextRow;
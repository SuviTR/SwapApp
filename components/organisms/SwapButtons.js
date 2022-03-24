import React from 'react';
import { View } from 'react-native';

import ButtonAtom from '../atoms/Button';
import TextAtom from '../atoms/Text';
import FlexColumnACMol from '../molecules/FlexColumnAC';

const styles = require('../../styles/styles');

const { onPress, title = 'Save' } = '';

const SwapButtons = () => {
  return (
    <View style={[styles.width100,{flex: 1.3}]}>
      <FlexColumnACMol flexStyle={styles.width75}>
        <ButtonAtom
          onPress={onPress}
          buttonStyle={styles.button}
          a11y="Accept the offer"
        >
          <TextAtom text='Accept' textStyle={styles.text} />
        </ButtonAtom>
        <ButtonAtom
          onPress={onPress}
          buttonStyle={styles.button}
          a11y="Make a counter-offer"
        >
          <TextAtom text='Offer' textStyle={styles.text} />
        </ButtonAtom>
        <ButtonAtom
          onPress={onPress}
          buttonStyle={styles.button}
          a11y="Decline the offer"
        >
          <TextAtom text='Decline' textStyle={styles.text} />
        </ButtonAtom>
      </FlexColumnACMol>
    </View>
  );
}
export default SwapButtons;
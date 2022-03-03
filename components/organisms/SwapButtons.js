import React from 'react';
import { View } from 'react-native';

import ButtonAtom from '../atoms/Button';
import FlexColumnACMol from '../molecules/FlexColumnAC';

const styles = require('../../styles/styles');

const { onPress, title = 'Save' } = '';

const SwapButtons = () => {
  return (
    <View style={[styles.width100,{flex: 1.3}]}>
      <FlexColumnACMol flexStyle={styles.width75}>
        <ButtonAtom
          text='Accept'
          onPress={onPress}
          buttonStyle={styles.button}
          textStyle={styles.text}
          a11y="Accept the offer"
        />
        <ButtonAtom
          text='Offer'
          onPress={onPress}
          buttonStyle={styles.button}
          textStyle={styles.text}
          a11y="Make a counter-offer"
        />
        <ButtonAtom
          text='Decline'
          onPress={onPress}
          buttonStyle={styles.button}
          textStyle={styles.text}
          a11y="Decline the offer"
        />
      </FlexColumnACMol>
    </View>
  );
}
export default SwapButtons;
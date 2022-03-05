import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import feedListOffers from '../actions/feedOffers';
import HeaderBar from '../containers/HeaderBar';

const styles = require('../styles/styles');

export default function OffersScreen({ navigation }) {
  return (
    <SafeAreaView>
      <HeaderBar headerTitle='Offers'/>
      <View style={[styles.container]}>
        <ScrollView>
          <View style={styles.feedColumnContainer}>
            {feedListOffers()}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
import React from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import feed from '../actions/feed';
import HeaderBar from '../containers/HeaderBar';

const styles = require('../styles/styles');
const dimensions = Dimensions.get('window');
const screenWidth = dimensions.width;
const screenHeight = dimensions.height;

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <HeaderBar headerTitle={screenHeight}/>
      <View style={[styles.container]}>
        <ScrollView>
          <View style={styles.feedColumnContainer}>
            {feed()}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
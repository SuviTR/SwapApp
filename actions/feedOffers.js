import React, { useState, useEffect } from 'react';
import { View, Pressable } from 'react-native';

import ButtonAtom from '../components/atoms/Button';
import { homeScreenFeed } from '../utils/testData';
import CardFeedLineOrg from '../components/organisms/CardFeedLine';

const styles = require('../styles/styles');

function feedOffers({ navigation, props }) {

  var feed = [];

  for(let i = 0; i < homeScreenFeed.length; i++){
    feed.push(
      <View key={i} style={styles.feedRowContainer}>
        <Pressable onPress={() =>
          navigation.navigate('SwapPage')
        }>
        <CardFeedLineOrg
          path={homeScreenFeed[i].image}
          brand={homeScreenFeed[i].brand}
          name={homeScreenFeed[i].name}
          type={homeScreenFeed[i].type}
          size={homeScreenFeed[i].size}
          gender={homeScreenFeed[i].gender}
          color={homeScreenFeed[i].color}
          transaction={homeScreenFeed[i].transaction}
        />
        </Pressable>
      </View>
    );
  }
  feed.push(<View key={homeScreenFeed.length} style={styles.feedBottomArea}/>)
  return feed;
}
export default feedOffers;
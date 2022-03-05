import React from 'react';
import { View } from 'react-native';

import { homeScreenFeed } from '../utils/testData';
import CardFeedSquareOrg from '../components/organisms/CardFeedSquare';

const styles = require('../styles/styles');

function feedList() {
  var feed = [];
  var length = homeScreenFeed.length;
  if (length % 2 != 0) {
    length = length + 1;
  }
  var j = 1;
  var key = 0;
  for(let i = 0; i < length; i++){
    feed.push(
      <View key={key} style={styles.feedRowContainer}>
        <CardFeedSquareOrg
          path={homeScreenFeed[i].image}
          brand={homeScreenFeed[i].brand}
          name={homeScreenFeed[i].name}
          type={homeScreenFeed[i].type}
          size={homeScreenFeed[i].size}
          gender={homeScreenFeed[i].gender}
          color={homeScreenFeed[i].color}
        />
        {i+1 < 9 ?
          <CardFeedSquareOrg
            path={homeScreenFeed[j].image}
            brand={homeScreenFeed[j].brand}
            name={homeScreenFeed[j].name}
            type={homeScreenFeed[j].type}
            size={homeScreenFeed[j].size}
            gender={homeScreenFeed[j].gender}
            color={homeScreenFeed[j].color}
          />
          :
          <></>}
      </View>
    );
    i += 1;
    j += 2;
    key++;
  }
  feed.push(<View key={j} style={styles.feedBottomArea}/>)
  return feed;
}
export default feedList;
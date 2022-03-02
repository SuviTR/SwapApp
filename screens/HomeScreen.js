import React from 'react';
import { Dimensions, Image, Button, View, ScrollView, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Images from '../assets/ImageSources';
import HeaderBar from '../components/HeaderBar';

const styles = require('../components/styles');
const dimensions = Dimensions.get('window');
const screenWidth = dimensions.width;
const screenHeight = dimensions.height;

const arrayTest = [
  {
    key: '1',
    brand: 'Tommy Hilfiger',
    name: 'Tommy Tommy',
    type: 'jacket',
    size: 'S',
    gender: 'Female',
    color: 'orange',
    image: Images.img1
  },
  {
    key: '2',
    brand: 'Gant',
    name: 'Hampshire',
    type: 'jacket',
    size: 'M',
    gender: 'Male',
    color: 'green',
    image: Images.img2
  },
  {
    key: '3',
    brand: 'Gant',
    name: 'Hampshire',
    type: 'jacket',
    size: 'M',
    gender: 'Male',
    color: 'green',
    image: Images.img3
  },
  {
    key: '4',
    brand: 'Gant',
    name: 'Hampshire',
    type: 'jacket',
    size: 'M',
    gender: 'Male',
    color: 'green',
    image: Images.img2
  },
  {
    key: '5',
    brand: 'Gant',
    name: 'Hampshire',
    type: 'jacket',
    size: 'M',
    gender: 'Male',
    color: 'green',
    image: Images.img1
  },
  {
    key: '6',
    brand: 'Gant',
    name: 'Hampshire',
    type: 'jacket',
    size: 'M',
    gender: 'Male',
    color: 'green',
    image: Images.img3
  },
  {
    key: '7',
    brand: 'Gant',
    name: 'Hampshire',
    type: 'jacket',
    size: 'M',
    gender: 'Male',
    color: 'green',
    image: Images.img1
  },
  {
    key: '8',
    brand: 'Gant',
    name: 'Hampshire',
    type: 'jacket',
    size: 'M',
    gender: 'Male',
    color: 'green',
    image: Images.img2
  },
  {
    key: '9',
    brand: 'Gant',
    name: 'Hampshire',
    type: 'jacket',
    size: 'M',
    gender: 'Male',
    color: 'green',
    image: Images.img2
  },
];

const FeedImage = ({imagePath}) => {
  return (
    <Image
      source={imagePath}
      style={styles.feedImage}
    />
  );
}

const FeedImageText = ({brand, name, type, size, gender, color}) => {
  return (
    <View>
     <Text numberOfLines={1}>{brand} {name}</Text>
     <Text numberOfLines={1}>{gender} - {size} - {color}</Text>
    </View>
  )
}

const FeedCard = ({imagePath, brand, name, type, size, gender, color}) => {
  return (
    <View style={styles.feedCard}>
      <FeedImage imagePath={imagePath}/>
      <FeedImageText brand={brand} name={name} type={type} size={size} gender={gender} color={color}/>
    </View>
  );
}
/*
const feedList = () => {
  return arrayTest.map((e) => {
    return (
      <View key={e.key} style={styles.feedRowContainer}>
        <FeedCard imagePath={e.image} brand={e.brand} name={e.name} type={e.type} size={e.size} gender={e.gender} color={e.color}/>
        <FeedCard imagePath={e.image} brand={e.brand} name={e.name} type={e.type} size={e.size} gender={e.gender} color={e.color}/>
      </View>
    );
  });
};*/

const feedList = () => {
  var feed = [];
  var length = arrayTest.length;
  if (length % 2 != 0) {
    length = length + 1;
  }
  var j = 1;
  var key = 0;
  for(let i = 0; i < length; i++){
    feed.push(
      <View key={key} style={styles.feedRowContainer}>
        <FeedCard imagePath={arrayTest[i].image} brand={arrayTest[i].brand} name={arrayTest[i].name} type={arrayTest[i].type} size={arrayTest[i].size} gender={arrayTest[i].gender} color={arrayTest[i].color}/>
        {i+1 < 9 ?
          <FeedCard imagePath={arrayTest[j].image} brand={arrayTest[j].brand} name={arrayTest[j].name} type={arrayTest[j].type} size={arrayTest[j].size} gender={arrayTest[j].gender} color={arrayTest[j].color}/>
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

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <HeaderBar headerTitle={screenHeight}/>
      <View style={[styles.container]}>
        <ScrollView>
          <View>
            <View style={styles.feedColumnContainer}>
              {feedList()}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
import React from 'react';
import { Button, View, ScrollView, Pressable, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import CardClothing from '../components/CardClothing'
import ContainerCenter from '../components/ContainerCenter'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = require('../components/styles');
const { onPress, title = 'Save' } = '';

const SwapButtons = () => {
  return (
    <View style={{alignItems:'center'}}>
      <View style={styles.width75}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Accept</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Decline</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Offer</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function ReceivedOfferScreen({ navigation }) {

  var randomImages = [
      require('../res/images/white_shirt.jpeg'),
      require('../res/images/jacket.png'),
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth,
        }}
      edges={['top', 'left', 'right']}
      >
      <View
          style={{
            flexDirection: "column",
            width: windowWidth,
            padding: 20,
          }}
        >
          <Text style={styles.h1}>You have received an offer</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems:'center',
            }}
            >
            <CardClothing
              swapFlag='0'
              title='River Island'
              imagePath={randomImages[0]}
              style={{flex:1}}
              />
            <IonIcons name='ios-arrow-forward' style={{flex:1,textAlign:'center'}}/>
            <CardClothing
              swapFlag='1'
              title='Stone Island'
              imagePath={randomImages[1]}
              style={{flex:1}}
              />
          </View>
          <SwapButtons />
       </View>
     </SafeAreaView>

  /*
    <View style={[styles.container, {
        flexDirection: "column"
      }]}>
      <Text style={s.h1}>You have received an offer</Text>
      <View style={[styles.container, {
              flexDirection: "row",
              alignItems: 'center',
            }]}>
        <CardClothing
          title='River Island'
          magePath='../res/images/white_shirt.jpeg'
          style={{flex:1}}
          />
        <CardClothing
          title='Stone Island'
          imagePath='../res/images/jacket.png'
          style={{flex:1}}
          />
      </View>
    </View>*/
  );
}

const styless = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10
  },
});


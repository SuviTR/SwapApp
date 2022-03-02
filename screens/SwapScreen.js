import React from 'react';
import { Pressable, Image, View, ScrollView, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Images from '../assets/ImageSources';
import HeaderBar from '../components/HeaderBar';

const styles = require('../components/styles');

const ProductImage = () => {
  return (
    <Image
      source={Images.img2}
      style={[styles.swapImage]}
    />
  );
}

const { onPress, title = 'Save' } = '';
const SwapButtons = () => {
  return (
    <View style={[styles.container100,{flex: 1.3, justifyContent:'flex-start'}]}>
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

const OffererDetails = () => {
  return (
    <View style={{flexDirection: 'column', alignItems:'flex-start', justifyContent:'center'}}>
      <View style={{flexDirection: 'row', alignItems:'center', margin: 1}}>
        <Image
          source={Images.icons.icn10}
          style={{width:11, height:13, marginRight:7}}
        />
        <Text style={styles.infoText}>
          Germany
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems:'center', margin: 1}}>
        <Image
          source={Images.icons.icn3}
          style={{width:11, height:11, marginRight:7}}
        />
        <Text style={styles.infoText}>
          Verified
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems:'center', margin: 1}}>
        <Image
          source={Images.icons.icn11}
          style={{width:11, height:11, marginRight:7}}
        />
        <Text style={styles.infoText}>
          More
        </Text>
      </View>
    </View>
  );
}

const OfferedByContainer = () => {
  return (
    <View style={{alignItems:'center'}}>
      <Text style={styles.infoTextHeader}>
        Offered by
      </Text>
      <View style={{flexDirection: 'row', alignItems:'center'}}>
        <Image
          source={Images.img4}
          style={{width:45, height:45, borderRadius: 45/2, marginRight:5}}
        />
        <OffererDetails />
      </View>
    </View>
  );
}

const SwapDetails = () => {
  return (
    <View style={{flex: 1,width:'100%', marginTop: 10, marginBottom:10}}>
      <View style={{width:'100%',flexDirection: 'row', alignItems:'center',justifyContent:'space-between'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={Images.img3}
            style={{marginRight: 10, width: 70, height: 70, borderRadius: 10}}
          />

          <Text style={styles.priceText}>
            +500€
          </Text>
        </View>
        <View style={styles.verticalLine}></View>
        <OfferedByContainer />
      </View>
    </View>
  );
}

export default function SwapScreen({ navigation }) {
  return (/*
  <SafeAreaView
        style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Text>This is top text.</Text>
        <Text>This is bottom text.</Text>
      </SafeAreaView>*/

      <SafeAreaView>
          <HeaderBar headerTitle='You have an offer'/>
          <View style={[styles.container, styles.swapScreen]}>
            <ProductImage />
            <View style={styles.swapDetailsContainer}>
              <SwapDetails />
              <SwapButtons />
            </View>
          </View>

      </SafeAreaView>


  );
}
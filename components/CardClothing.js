import * as React from 'react';
import { View, Image, Text, Pressable, StyleSheet} from 'react-native' ;
import { Card, Title, Paragraph } from 'react-native-paper';

const { onPress, title = 'Save' } = '';
const styles = require('../components/styles');

const WardrobeButton = () => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Accept</Text>
    </Pressable>
  );
}

const OffererDetails = () => {
  return (
    <View>
      <Text style={styles.h2}>And</Text>
      <Text style={styles.h1}>50€</Text>
      <Text style={styles.h2}>Offer done by</Text>
      <View style={{ width: 30, height: 30, aspectRatio: 1 * 1.1 }}>
        <Image
          source={require('../res/images/man.jpeg')}
          style={{ resizeMode: 'cover', width: '100%', height: '100%' }} />
      </View>
    </View>
  );
}


const CardClothing = ({ swapFlag, title, imagePath, price }) => (
  <View style={{justifyContent:'center'}}>
    <View style={styles.card}>
      <Text style={styles.h2}>{title}</Text>
      <View>
        <Image source={require('../res/images/jacket.png')} />
        <View style={{flexDirection: 'row', paddingLeft:2}}>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>Card content content content{imagePath}</Text>
        </View>

        <View style={{flexDirection: 'column', padding: 0}}>
          {swapFlag === '0' ? <WardrobeButton /> : <OffererDetails />}
        </View>
      </View>
    </View>
  </View>
);

export default CardClothing;

const styless = StyleSheet.create({
  title: {
    textAlign: 'center',
  },

});
'use strict';
import React from 'react';
import {
  Platform,
  StyleSheet,
  useColorScheme,
  Dimensions
} from 'react-native';

const dimensions = Dimensions.get('window');
const screenWidth = dimensions.width;
const screenHeight = dimensions.height;

//Bottom area that navigation bar takes
const navBarHeight = 55;
const navBarBottom = Platform.OS === 'ios' ? 35 : 15;
const navBarAreaHeight = navBarHeight + navBarBottom;

const swapImageHeight = screenHeight > 800 ? screenWidth*0.9 : screenWidth*0.6;
const feedImageSize = screenWidth * 0.435

const swapDetailsContainerHeight = screenHeight > 800 ?
  screenHeight-swapImageHeight-navBarAreaHeight-120
  :
  screenHeight-swapImageHeight-navBarAreaHeight-78;

/*
react-navigation SafeAreaView

LandScape Mode:
paddingLeft: 44
paddingRight: 44
paddingBottom: 24
paddingTop: 0

Portrait Mode:
paddingLeft: 0
paddingRight: 0
paddingBottom:34
paddingTop:44  // ... Including Status bar height
*/

module.exports = StyleSheet.create({
  h1: {
    fontSize: 22,
    margin: 5,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20
  },
  h2: {
    fontSize: 15,
    //fontWeight: 'bold',
    //textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: 'black',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:20,
    marginRight:20
  },
  width100: {
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  width75: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  justContSpaceBwn: {
    justifyContent:'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 4,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 2.5,
    marginTop: 2.5,
    backgroundColor: 'white'
  },

  //===== HEADER =====
  headerBar: {
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: screenWidth,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20
  },
  logoHeader: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  //===== NAVIGATION =====
  navBar: {
    bottom: navBarBottom,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    height: navBarHeight,
    width: screenWidth - 40,
    paddingBottom: 16,
    position:'absolute',
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  navTab: {
    alignItems: 'center',
    justifyContent: 'center',
    top:10,
  },
  navIcon: {
    width: 25,
    height: 25,
  },

  //===== SWAP SCREEN =====
  swapScreen: {
    justifyContent: 'space-between',
    height: screenHeight* 0.75,
  },
  swapImageLarge: {
    width:screenWidth,
    height:swapImageHeight,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  swapDetailsContainer: {
    width:'100%',
    justifyContent:'space-between',
    height: swapDetailsContainerHeight,
  },
  verticalLine: {
    height: '80%',
    width: 1,
    backgroundColor: '#000000',
    //marginLeft: -10
  },

  //----- Offered by details-----
  infoTextHeader: {
    fontSize: 13,
    color: '#000000',
    marginBottom: 3
  },
  infoText: {
    fontSize: 10,
    color: '#000000'
  },
  iconStyleSmall: {
    width:11,
    height:11,
    marginRight:7,
  },
  userImageSmall: {
    width:45,
    height:45,
    borderRadius: 45/2,
    marginRight:5,
  },

  //----- User's swap items -----
  swapImageSmall: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  priceText: {
    fontSize: 18,
    color: '#000000'
  },

  //===== HOME SCREEN =====
  feedColumnContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    width: '100%'
  },
  feedRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    width: screenWidth - 40,
    marginTop: 20,
  },
  feedCard: {
    width: feedImageSize,
  },
  feedImage: {
    width: feedImageSize,
    height: feedImageSize,
    borderRadius: 7,
  },
  feedBottomArea: {
    height: screenHeight > 800 ? feedImageSize*1.03 : feedImageSize*1.2,
  },

  //----
  card: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    justifyContent:'center',
    borderRadius: 5,
  },
});
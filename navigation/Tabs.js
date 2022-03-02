import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Stylesheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Images from '../assets/ImageSources';

//screens
import HomeScreen from '../screens/HomeScreen';
import ReceivedOfferScreen from '../screens/SwapScreen';


//tab names
const homeName = 'Feed';
const offersName = 'Offers';
const favoritesName = 'Favorites';
const wardrobeName = 'Wardrobe';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const styles = require('../components/styles');

const Tabs = () => {
  return (
    <Tab.Navigator
     screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.navBar,
          ...styles.shadow
        },
      }}
      >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                <Image
                  source={focused ? Images.icons.icn9 : Images.icons.icn8}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#34229A' : '#000000'
                  }}
                />
                <Text style={{ color: focused ? '#34229A' : '#000000', fontSize: 12 }}>
                  {homeName}
                </Text>
              </View>
            );
          }
        }}
      />

      <Tab.Screen name={"OFF"} component={ReceivedOfferScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                <Image
                  source={focused ? Images.icons.icn5 : Images.icons.icn4}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#34229A' : '#000000'
                  }}
                />
                <Text style={{ color: focused ? '#34229A' : '#000000', fontSize: 12 }}>
                  {offersName}
                </Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen name={favoritesName} component={ReceivedOfferScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                <Image
                  source={focused ? Images.icons.icn15 : Images.icons.icn14}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#34229A' : '#000000'
                  }}
                />
                <Text style={{ color: focused ? '#34229A' : '#000000', fontSize: 12 }}>
                  {favoritesName}
                </Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen name={wardrobeName} component={ReceivedOfferScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                <Image
                  source={focused ? Images.icons.icn13 : Images.icons.icn12}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#34229A' : '#000000'
                  }}
                />
                <Text style={{ color: focused ? '#34229A' : '#000000', fontSize: 12 }}>
                  {wardrobeName}
                </Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen name={profileName} component={ReceivedOfferScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={{alignItems: 'center', justifyContent: 'center', top:10}}>
                <Image
                  source={focused ? Images.icons.icn17 : Images.icons.icn16}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? '#34229A' : '#000000'
                  }}
                />
                <Text style={{ color: focused ? '#34229A' : '#000000', fontSize: 12 }}>
                  {profileName}
                </Text>
              </View>
            );
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
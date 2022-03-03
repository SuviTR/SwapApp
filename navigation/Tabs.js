import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Stylesheet, Text, View, Image, TouchableOpacity } from 'react-native';

import images from '../utils/imageSources';
import { tabDetails } from '../utils/tabDetails';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const styles = require('../styles/styles');

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
      <Tab.Screen name={tabDetails[0].tab} component={tabDetails[0].comp}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={styles.navTab}>
                <Image
                  source={focused ? tabDetails[0].icon2 : tabDetails[0].icon1}
                  resizeMode='contain'
                  style={[
                    styles.navIcon,
                    { tintColor: focused ? colors.purple : colors.black}
                  ]}
                />
                <Text style={{ color: focused ? colors.purple : colors.black, fontSize: 12 }}>
                  {tabDetails[0].tab}
                </Text>
              </View>
            );
          }
        }}
      />

      <Tab.Screen name={tabDetails[1].tab} component={tabDetails[1].comp}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={styles.navTab}>
                <Image
                  source={focused ? images.icons.icn5 : images.icons.icn4}
                  resizeMode='contain'
                  style={[
                    styles.navIcon,
                    { tintColor: focused ? colors.purple : colors.black}
                  ]}
                />
                <Text style={{ color: focused ? colors.purple : colors.black, fontSize: 12 }}>
                  {tabDetails[1].tab}
                </Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen name={tabDetails[2].tab} component={tabDetails[2].comp}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={styles.navTab}>
                <Image
                  source={focused ? images.icons.icn15 : images.icons.icn14}
                  resizeMode='contain'
                  style={[
                    styles.navIcon,
                    { tintColor: focused ? colors.purple : colors.black}
                  ]}
                />
                <Text style={{ color: focused ? colors.purple : colors.black, fontSize: 12 }}>
                  {tabDetails[2].tab}
                </Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen name={tabDetails[3].tab} component={tabDetails[3].comp}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={styles.navTab}>
                <Image
                  source={focused ? images.icons.icn13 : images.icons.icn12}
                  resizeMode='contain'
                  style={[
                    styles.navIcon,
                    { tintColor: focused ? colors.purple : colors.black}
                  ]}
                />
                <Text style={{ color: focused ? colors.purple : colors.black, fontSize: 12 }}>
                  {tabDetails[3].tab}
                </Text>
              </View>
            );
          }
        }}
      />
      <Tab.Screen name={tabDetails[4].tab} component={tabDetails[4].comp}
        options={{
          tabBarIcon: ({focused}) => {
            return(
              <View style={styles.navTab}>
                <Image
                  source={focused ? images.icons.icn17 : images.icons.icn16}
                  resizeMode='contain'
                  style={[
                    styles.navIcon,
                    { tintColor: focused ? colors.purple : colors.black}
                  ]}
                />
                <Text style={{ color: focused ? colors.purple : colors.black, fontSize: 12 }}>
                  {tabDetails[4].tab}
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
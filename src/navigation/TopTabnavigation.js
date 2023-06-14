import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// screens
import Active from '../screens/MyAds/Active';
import Pending from '../screens/MyAds/Pending';
import Removed from '../screens/MyAds/Removed';
import Header from '../components/Header';

const Tab = createMaterialTopTabNavigator();

const TopTabnavigation = () => {
  return (
    <>
      <View>
        <Header name={'My Ads'} />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Active" component={Active} />
        <Tab.Screen name="Pending" component={Pending} />
        <Tab.Screen name="Remove" component={Removed} />
      </Tab.Navigator>
    </>
  );
};

export default TopTabnavigation;

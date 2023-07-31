import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import HomeScreen from '../screens/HomeScreen';
import Ads from '../screens/MyAds/Ads';
import Setnow from '../screens/Setnow';
import Chat from '../screens/Chat';
import Menu from '../screens/Menu';
import TabBar from '../screens/TabBar';
import TopTabnavigation from './TopTabnavigation';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 60,
          backgroundColor: '#fff',
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                className={`items-center pb-1 ${
                  focused ? 'border-b-4 border-[#0095FF]' : ''
                }`}>
                <Image
                  className="w-6 h-6"
                  resizeMode="contain"
                  source={require('../assets/Home.png')}
                />
                <Text className="text-xs uppercase">home</Text>
              </View>
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="My Ads"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                className={`items-center  w-full pb-1 ${
                  focused ? 'border-b-4 border-[#0095FF]' : ''
                }`}>
                <Image
                  className="w-5 h-5"
                  source={require('../assets/Heart.png')}
                  resizeMode="contain"
                />
                <Text className="text-xs uppercase">My Ads</Text>
              </View>
            );
          },
        }}
        component={TopTabnavigation}
      />
      <Tab.Screen
        name="Set Now"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                activeOpacity={0.7}
                className={` top-[-20] bg-[#0095FF] p-5 rounded-full `}>
                <Image
                  className="w-5 h-5"
                  source={require('../assets/plus.png')}
                />
              </View>
            );
          },
        }}
        component={Setnow}
      />
      <Tab.Screen
        name="Chat"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                className={`items-center  w-full pb-1 ${
                  focused ? 'border-b-4 border-[#0095FF]' : ''
                }`}>
                <Image
                  className="w-5 h-5"
                  source={require('../assets/Message.png')}
                  resizeMode="contain"
                />
                <Text className="text-xs uppercase">Chat</Text>
              </View>
            );
          },
        }}
        component={Chat}
      />
      <Tab.Screen
        name="Menu"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View
                className={`items-center  w-full pb-1 ${
                  focused ? 'border-b-4 border-[#0095FF]' : ''
                }`}>
                <Image
                  className="w-5 h-5"
                  source={require('../assets/Menu.png')}
                  resizeMode="contain"
                />
                <Text className="text-xs uppercase ">Menu</Text>
              </View>
            );
          },
        }}
        component={Menu}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

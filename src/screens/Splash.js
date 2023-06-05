import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('Started');
  //   }, 3000);
  // }, []);

  return (
    <LinearGradient
      className="flex-1 "
      colors={[
        '#0B334F',
        '#0095FF',
        '#0095FF',
        '#0095FF',
        '#0095FF',
        '#0095FF',
        '#0095FF',
        '#0B334F',
      ]}>
      <StatusBar backgroundColor={'#0B334F'} />
      <View className="absolute left-10 top-36">
        <Image
          source={require('../assets/car-logo.png')}
          className="w-72 h-72"
        />
      </View>
    </LinearGradient>
  );
};

export default Splash;

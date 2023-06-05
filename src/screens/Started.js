import {View, Text} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

const Started = () => {
  const itemArray = [
    {
      title: 'title1',
      desc: 'desc 1',
    },
    {
      title: 'title 2 ',
      desc: 'desc 2',
    },
  ];
  return (
    <View>
      <Text>Started4444</Text>

      <Carousel />
    </View>
  );
};

export default Started;

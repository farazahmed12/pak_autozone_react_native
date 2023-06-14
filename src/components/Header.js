import {View, Text} from 'react-native';
import React from 'react';

const Header = ({name}) => {
  return (
    <View
      className="bg-[#0095FF] py-5"
      style={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
      <Text className="text-center text-xl text-white">{name}</Text>
    </View>
  );
};

export default Header;

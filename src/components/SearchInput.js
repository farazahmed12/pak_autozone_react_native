import {View, TextInput, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SearchInput = () => {
  return (
    <View className="flex flex-row justify-center items-center rounded-2xl h-10 space-x-4 bg-white w-7/12">
      <Image source={require('../assets/search.png')} />
      <TextInput
        className="w-8/12"
        placeholderTextColor={'#0095FF'}
        placeholder="Search..."
      />
    </View>
  );
};

export default SearchInput;

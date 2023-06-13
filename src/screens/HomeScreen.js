import {View, Text, StatusBar, SafeAreaView, Image} from 'react-native';
import React from 'react';
import SearchInput from '../components/SearchInput';

const HomeScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#0095FF'} />

      <View
        className="bg-[#0095FF] p-5"
        style={{borderBottomRightRadius: 30, borderBottomLeftRadius: 30}}>
        <View className="flex flex-row justify-between items-center">
          <Image
            resizeMode="contain"
            className="w-6 h-6"
            source={require('../assets/menu_drawer.png')}
          />
          <SearchInput />
          <Image className="w-6 h-6" source={require('../assets/user.png')} />
        </View>
        <Text className="text-xl mt-7 text-white">
          Let's find your favourite car Here
        </Text>
        <Text className="text-xs text-white mt-3">
          the best platform to buy used cars !
        </Text>
      </View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

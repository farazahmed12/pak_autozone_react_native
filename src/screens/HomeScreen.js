import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchInput from '../components/SearchInput';
import {BASEURL} from '../constant';
import axios from 'axios';

const HomeScreen = () => {
  // get brands
  const getBrands = () => {
    axios(`${BASEURL}/user/cars/brands`)
      .then(res => {
        setcarBrands(res?.data?.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // cars
  const featuredCars = [
    {
      _id: '643700193fa831fa114b8798',
      name: 'HONDA',
      image:
        'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
      price: '20,456,000',
      location: ' xyz karachi',
    },

    {
      _id: '643700193fa831fa114b8798',
      name: 'FERRARI',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5NdOd3H34pkNmmyi-9fsvgL6rWL_nDtpLVDHWMMTDw&s',
      price: '20,456,000',
      location: ' xyz karachi',
    },
    {
      _id: '643700193fa831fa114b8798',
      name: 'TESLA',
      image:
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-best-luxury-cars-2023-bmw-i7-lead.jpg',
      price: '20,456,000',
      location: ' xyz karachi',
    },
    {
      _id: '643700193fa831fa114b8798',
      name: 'HONDA',
      image:
        'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
      price: '20,456,000',
      location: ' xyz karachi',
    },
    {
      _id: '643700193fa831fa114b8798',
      name: 'FERRARI',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5NdOd3H34pkNmmyi-9fsvgL6rWL_nDtpLVDHWMMTDw&s',
      price: '20,456,000',
      location: ' xyz karachi',
    },
    {
      _id: '643700193fa831fa114b8798',
      name: 'TESLA',
      image:
        'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/99-best-luxury-cars-2023-bmw-i7-lead.jpg',
      price: '20,456,000',
      location: ' xyz karachi',
    },
  ];

  // states
  const [carBrands, setcarBrands] = useState([]);

  useEffect(() => {
    getBrands();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View className="flex flex-col items-center mx-3">
        <Image source={{uri: item.image}} style={{width: 30, height: 30}} />
        <Text className="text-md">{item.name}</Text>
      </View>
    );
  };

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

      {/* car brands */}
      <View className="p-5">
        <Text className="text-lg font-semibold ">Top Brands</Text>
        <FlatList
          renderItem={renderItem}
          data={carBrands}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mt-2"
        />
      </View>

      {/* featured cars */}
      <View className="p-5">
        <View className="flex flex-row justify-between">
          <Text className="font-semibold text-lg ">Featured used cars</Text>
          <Text className="text-[#0095FF]">view all ➡</Text>
        </View>

        <FlatList
          data={featuredCars}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              className="border border-gray-300 flex mx-3 items-start  "
              style={{borderRadius: 10, width: 100}}>
              <Image
                source={{uri: item.image}}
                className="w-full h-20 "
                style={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
              />
              <View className="p-2">
                <Text className="text-xs opacity-90">{item.name}</Text>
                <Text className="text-md font-bold">Rs.{item.price}</Text>

                <View className="flex flex-row my-1 items-center">
                  <Image
                    source={require('../assets/location-pin.png')}
                    className="h-3 w-3"
                  />
                  <Text className="text-sm">{item?.location}</Text>
                </View>
                <View className="flex flex-row space-x-3 my-3 items-center">
                  <Text className="text-xs">2022 - 2333 km</Text>

                  <Text className="text-xs">12 Feb</Text>
                </View>
              </View>
            </View>
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

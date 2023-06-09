import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const Started = () => {
  const renderItemsArray = [
    {
      bannerImage: require('../assets/started_1.png'),
      footerImage: require('../assets/Vector_1.png'),
      header: 'find your dream car',
      paragraph: 'Search for your dream car from the largest car investory',
    },
    {
      bannerImage: require('../assets/started_2.png'),
      footerImage: require('../assets/Vector_1.png'),
      header: 'Secure and trusted',
      paragraph: 'Search for your dream car from the largest car investory',
    },
    {
      bannerImage: require('../assets/started_2.png'),
      footerImage: require('../assets/Vector_1.png'),
      header: 'Sell your car',
      paragraph: 'Search for your dream car from the largest car investory',
    },
  ];
  return (
    <Swiper>
      {/* Swiper 1 */}
      <View className="flex-1 bg-[#C3E6FF]">
        <Image
          source={require('../assets/started_1.png')}
          className="w-full h-60 mt-10"
          resizeMode="contain"
        />
        <ImageBackground
          className="flex-1  absolute top-56  w-full h-full "
          source={require('../assets/Vector_1.png')}>
          <View className="flex flex-col justify-center self-center mt-28">
            <View className="">
              <Text className="text-[#3D3D3D] text-xl text-center">
                Find Your Dream Car
              </Text>
              <View className="flex-row justify-center">
                <Text className="text-[#6C8394] w-10/12 text-center mt-4">
                  Search for your dream car from the largest car investory
                </Text>
              </View>
              <TouchableOpacity className="self-center text-center w-8/12 mt-14">
                <LinearGradient
                  start={{x: 0.0, y: 0.25}}
                  end={{x: 0.5, y: 1.0}}
                  colors={['#0095FF', '#7AC8FF']}
                  className="border-0 rounded py-1">
                  <Text className="text-white text-center py-1">
                    Get Started
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* Swiper 2 */}
      <View className="flex-1 bg-[#C3E6FF]">
        <Image
          source={require('../assets/started_2.png')}
          className="w-full h-60 mt-10"
          resizeMode="contain"
        />
        <ImageBackground
          className="flex-1  absolute top-56  w-full h-full "
          source={require('../assets/Vector_1.png')}>
          <View className="flex flex-col justify-center self-center mt-28">
            <View className="">
              <Text className="text-[#3D3D3D] text-xl text-center">
                Secure and trusted
              </Text>
              <View className="flex-row justify-center">
                <Text className="text-[#6C8394] w-10/12 text-center mt-4">
                  Search for your dream car from the largest car investory
                </Text>
              </View>
              <TouchableOpacity className="self-center text-center w-8/12 mt-14">
                <LinearGradient
                  start={{x: 0.0, y: 0.25}}
                  end={{x: 0.5, y: 1.0}}
                  colors={['#0095FF', '#7AC8FF']}
                  className="border-0 rounded py-1">
                  <Text className="text-white text-center py-1">
                    Get Started
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* Swiper 3 */}
      <View className="flex-1 bg-[#C3E6FF]">
        <Image
          source={require('../assets/started_2.png')}
          className="w-full h-60 mt-10"
          resizeMode="contain"
        />
        <ImageBackground
          className="flex-1  absolute top-56  w-full h-full "
          source={require('../assets/Vector_1.png')}>
          <View className="flex flex-col justify-center self-center mt-28">
            <View className="">
              <Text className="text-[#3D3D3D] text-xl text-center">
                Secure and trusted
              </Text>
              <View className="flex-row justify-center">
                <Text className="text-[#6C8394] w-10/12 text-center mt-4">
                  Search for your dream car from the largest car investory
                </Text>
              </View>
              <TouchableOpacity className="self-center text-center w-8/12 mt-14">
                <LinearGradient
                  start={{x: 0.0, y: 0.25}}
                  end={{x: 0.5, y: 1.0}}
                  colors={['#0095FF', '#7AC8FF']}
                  className="border-0 rounded py-1">
                  <Text className="text-white text-center py-1">
                    Get Started
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({});

export default Started;

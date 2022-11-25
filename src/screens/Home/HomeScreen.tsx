import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {homeStyles} from './homeStyles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colorPalette} from '../../utils/colorPalette';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;
};

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={homeStyles.container}>
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('WebViewScreen')}>
        <View style={homeStyles.buttonContainer}>
          <Text>Go to WebView</Text>
          <MaterialCommunityIcons
            name="send"
            color={colorPalette.black}
            size={24}
          />
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ImagePickerScreen')}>
        <View style={homeStyles.buttonContainer}>
          <Text>Go to Image Picker</Text>
          <MaterialCommunityIcons
            name="send"
            color={colorPalette.black}
            size={24}
          />
        </View>
      </Pressable>
    </View>
  );
};

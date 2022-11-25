import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {WebViewScreen} from '../screens/WebView/WebViewScreen';
import {ImagePickerScreen} from '../screens/ImagePicker/ImagePickerScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  WebViewScreen: undefined;
  ImagePickerScreen: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="WebViewScreen" component={WebViewScreen} />
      <HomeStack.Screen
        name="ImagePickerScreen"
        component={ImagePickerScreen}
      />
    </HomeStack.Navigator>
  );
};

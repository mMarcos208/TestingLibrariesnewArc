import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {DetailScreen} from '../screens/Details/DetailScreen';

export type HomeStackParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

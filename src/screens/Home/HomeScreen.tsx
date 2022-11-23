import React from 'react';
import {View, Text, Button} from 'react-native';
import {homeStyles} from './homeStyles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'HomeScreen'>;
};

export const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={homeStyles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};

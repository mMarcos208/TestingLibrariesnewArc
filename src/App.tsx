import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeNavigation} from './navigation';
import {colorPalette} from './utils/colorPalette';

// TODO - not working
// import {getRealm} from './src/realm';
// getRealm();

const backgroundSafeAreaProvider = {
  flex: 1,
  backgroundColor: colorPalette.white,
};

export const App = () => {
  return (
    <SafeAreaProvider style={backgroundSafeAreaProvider}>
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

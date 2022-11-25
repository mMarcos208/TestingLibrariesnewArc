import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {webViewStyles} from './webViewsStyles';
import {WebView} from 'react-native-webview';
import {colorPalette} from '../../utils/colorPalette';

export const WebViewScreen = () => {
  return (
    <View style={webViewStyles.container}>
      <WebView
        scalesPageToFit={false}
        scrollEnabled
        source={{uri: 'https://github.com/mMarcos208/react-native-youtube'}}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator size="large" color={colorPalette.silverTree} />
        )}
      />
    </View>
  );
};

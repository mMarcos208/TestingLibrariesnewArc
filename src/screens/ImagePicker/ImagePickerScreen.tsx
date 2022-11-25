import React, {useCallback, useState} from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import {imagePickerStyles} from './imagePickerStyles';

export const ImagePickerScreen = () => {
  const [imageUpload, setImageUpload] = useState<ImagePickerResponse>();

  const launchImage = useCallback(() => {
    launchImageLibrary(
      {mediaType: 'photo'},
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          // error
        } else {
          setImageUpload(response);
        }
      },
    );
  }, []);

  const [imageSource] = imageUpload?.assets ?? [];

  return (
    <View style={imagePickerStyles.container}>
      <View style={imagePickerStyles.avatarContainer}>
        <TouchableOpacity onPress={launchImage}>
          {imageUpload ? (
            <Image
              source={{uri: imageSource.uri}}
              resizeMethod="resize"
              resizeMode="cover"
              style={imagePickerStyles.avatarImageContainer}
            />
          ) : (
            <View style={imagePickerStyles.avatarImageContainer}>
              <Image
                source={require('../../assets/images/avatar.png')}
                resizeMethod="auto"
                resizeMode="contain"
              />
            </View>
          )}
        </TouchableOpacity>
        <View style={imagePickerStyles.avatarLabelContainer}>
          <Text style={imagePickerStyles.avatarLabel}>
            Selecione uma imagem para seu perfil.
          </Text>
        </View>
      </View>
    </View>
  );
};

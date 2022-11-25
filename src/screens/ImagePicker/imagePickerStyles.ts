import {StyleSheet} from 'react-native';
import {colorPalette} from '../../utils/colorPalette';

export const imagePickerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    flexDirection: 'row',
  },
  avatarImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: colorPalette.gray,
    alignItems: 'center',
  },
  avatarLabelContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  avatarLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
});

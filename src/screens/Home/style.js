import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  safe: {
    backgroundColor: '#F8F8F8',
  },
  category: {
    marginVertical: SCREEN_WIDTH * 0.015,
  },
  photos: {
    marginLeft: SCREEN_WIDTH * 0.07,
    marginTop: SCREEN_WIDTH * 0.07,
  },
  text: {
    marginVertical: SCREEN_WIDTH * 0.03,
  },
  product: {
    marginTop: SCREEN_WIDTH * 0.05,
  },
});

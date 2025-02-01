import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  categories: {},
  textBar: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    paddingRight: SCREEN_WIDTH * 0.1,
    paddingLeft: SCREEN_WIDTH * 0.1,
  },
});

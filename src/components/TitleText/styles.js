import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  textBar: {
    marginLeft: SCREEN_WIDTH * 0.07,
    marginTop: SCREEN_WIDTH * 0.07,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

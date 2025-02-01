import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'orange',
  },
  top: {},
  headerBar: {},
  bottom: {
    alignItems: 'center',
  },
  productBar: {
  },
});

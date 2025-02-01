import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  safe: {
    flex: 1,
  },
  top: {
    width: '100%',
    height: '60%',
  },
  bottom: {
    backgroundColor: 'green',
    width: '100%',
    height: '40%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  locateBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: SCREEN_WIDTH * 0.075,
    marginTop: SCREEN_WIDTH * 0.02,
  },
  location: {width: 24, height: 24, marginRight: SCREEN_WIDTH * 0.02},
  locateText: {
    fontSize: 18,
    fontWeight: '400',
  },
});

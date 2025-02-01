import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  outside: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  out: {
    backgroundColor: '#fff',
    elevation: 3,
    shadowOpacity: 0.8,
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 0.35,
    borderRadius: 20,
    flexDirection: 'row',
    shadowOffset: {width: 5, height: 5},
    shadowColor: '#D1D1D1',
  },
  left: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '45%',
  },
  imageBar: {},
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  right: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: '100%',
    width: '55%',
  },
  title: {},
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  locateBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {width: 24, height: 24, marginRight: SCREEN_WIDTH * 0.02},
  locateText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SCREEN_WIDTH * 0.06,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  headerLeftIconBar: {
  },
  headerLeftIcon: {},
  headerLeftTextBar: {},
  headerLeftText: {
    color: '#0E83AF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
  },

  headerRightIcon: {},
});

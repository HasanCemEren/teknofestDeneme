import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bck: {
    width: 285,
    height: 385,
    marginRight: 20,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heartBar: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    borderRadius: 25,
    backgroundColor: 'grey',
    width: 50,
    height: 50,
    opacity: 0.9,
  },
  leftArrow: {
    tintColor: 'white',
  },
  heart: {
    width: 24,
    tintColor: 'white',
    height: 24,
  },
});

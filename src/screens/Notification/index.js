import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from './style';
import {_Header, Product} from '../../components';
import {Icons} from '../../assets';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Notification = () => {
  return (
    <SafeAreaView style={Styles.safe}>
      <View style={Styles.top}>
        <View style={Styles.headerBar}>
          <_Header />
        </View>
      </View>
      <View style={Styles.bottom}>
        <View style={Styles.productBar}>
          <Product
            outsideStyle={{
              width: SCREEN_WIDTH * 0.9,
              height: SCREEN_WIDTH * 0.55,
              marginRight: 0,
            }}
            image={Icons.home}
            parag={'AAAAAAA'}
            haveIcon={false}
            time={'2 hour ago'}
            name={'Amelia Nelson'}
          />
          <Product
            outsideStyle={{
              width: SCREEN_WIDTH * 0.9,
              height: SCREEN_WIDTH * 0.55,
              marginRight: 0,
            }}
            image={Icons.home}
            parag={'AAAAAAA'}
            haveIcon={false}
            time={'2 hour ago'}
            name={'Amelia Nelson'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TitleText} from '../../components';
import {Icons} from '../../assets';
const Category = () => {
  return (
    <SafeAreaView style={Styles.safe}>
      <View style={Styles.top}></View>
      <View style={Styles.bottom}>
        <View>
          <TitleText text={'Galata Tower'} />
        </View>
        <View style={Styles.locateBar}>
          <View>
            <Image source={Icons.location} style={Styles.location} />
          </View>
          <View>
            <Text style={Styles.locateText}>Tower in Istanbul, Turkey</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Category;

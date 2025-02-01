import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  _Header,
  Categories,
  PlaceComp,
  Product,
  TitleText,
} from '../../components';
import Styles from './style';
import {Images} from '../../assets';

const Home = () => {
  return (
    <SafeAreaView style={Styles.safe}>
      <View>
        <_Header />
      </View>
      <View style={Styles.category}>
        <Categories text1={'All'} text2={'Popular'} text3={'Most View'} />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={Styles.photos}>
        <PlaceComp bckImage={Images.image} stil={{width: 230, height: 300}} />
        <PlaceComp bckImage={Images.image} stil={{width: 230, height: 300}} />
        <PlaceComp bckImage={Images.image} stil={{width: 230, height: 300}} />
        <PlaceComp bckImage={Images.image} stil={{width: 230, height: 300}} />
        <PlaceComp bckImage={Images.image} stil={{width: 230, height: 300}} />
        <PlaceComp bckImage={Images.image} stil={{width: 230, height: 300}} />
        <PlaceComp bckImage={Images.image} stil={{width: 230, height: 300}} />
        <PlaceComp bckImage={Images.image} stil={{width: 230, height: 300}} />
      </ScrollView>
      <View style={Styles.text}>
        <TitleText text={'Popular Places'} />
      </View>
      <View style={Styles.product}>
        <Product />
      </View>
    </SafeAreaView>
  );
};

export default Home;

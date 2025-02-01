import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import PropsTypes from 'prop-types';
import Styles from './styles';
import {Icons, Images} from '../../assets';

export default Product = ({}) => {
  return (
    <View style={Styles.outside}>
      <TouchableOpacity style={Styles.out}>
        <View style={Styles.left}>
          <View style={Styles.imageBar}>
            <Image source={Images.image} style={Styles.image} />
          </View>
        </View>
        <View style={Styles.right}>
          <View style={Styles.title}>
            <Text style={Styles.titleText}>Harput Castle</Text>
          </View>
          <View style={Styles.locateBar}>
            <View>
              <Image source={Icons.location} style={Styles.location} />
            </View>
            <View>
              <Text style={Styles.locateText}>Turkey / Elazığ</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Product.PropsTypes = {};
Product.defaultProp = {};

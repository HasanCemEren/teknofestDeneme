import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PropsTypes from 'prop-types';
import {Icons} from '../../assets';
import Styles from './styles';

export default _Header = () => {
  return (
    <View style={Styles.header}>
      <TouchableOpacity style={Styles.headerLeftIconBar}>
        <Image source={Icons.menu} style={Styles.headerLeftIcon} />
      </TouchableOpacity>
      <View style={Styles.headerLeftTextBar}>
        <Text style={Styles.headerLeftText}>HOME</Text>
      </View>
      <TouchableOpacity style={Styles.headerRightIconBar}>
        <Image source={Icons.profile} style={Styles.headerRightIcon} />
      </TouchableOpacity>
    </View>
  );
};

_Header.PropsTypes = {};
_Header.defaultProp = {};

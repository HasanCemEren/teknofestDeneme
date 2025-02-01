import {Text, View} from 'react-native';
import React from 'react';
import PropsTypes from 'prop-types';
import Styles from './styles';

export default TitleText = ({text}) => {
  return (
    <View style={Styles.textBar}>
      <Text style={Styles.text}>{text}</Text>
    </View>
  );
};

TitleText.PropsTypes = {
  text: PropsTypes.string,
};
TitleText.defaultProp = {
  text: 'Featured Products',
};

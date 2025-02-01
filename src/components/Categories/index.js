import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import PropsTypes from 'prop-types';
import Styles from './styles';

export default Categories = ({text1, text2, text3}) => {
  const [clicked, setIsClicked] = useState(null);
  return (
    <View style={Styles.categories}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={Styles.textBar}
          onPress={() => {
            setIsClicked(text1);
          }}>
          <Text
            style={[
              Styles.text,
              clicked === text1
                ? {fontWeight: 'bold', fontSize: 20}
                : {fontWeight: '400'},
            ]}>
            {text1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.textBar}
          onPress={() => {
            setIsClicked(text2);
          }}>
          <Text
            style={[
              Styles.text,
              clicked === text2
                ? {fontWeight: 'bold', fontSize: 20}
                : {fontWeight: '400'},
            ]}>
            {text2}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.textBar}
          onPress={() => {
            setIsClicked(text3);
          }}>
          <Text
            style={[
              Styles.text,
              clicked === text3
                ? {fontWeight: 'bold', fontSize: 20}
                : {fontWeight: '400'},
            ]}>
            {text3}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

Categories.PropsTypes = {
  text1: PropsTypes.string,
  text2: PropsTypes.string,
  text3: PropsTypes.string,
};
Categories.defaultProp = {
  text1: 'All',
  text2: 'Popular',
  text3: 'Most View',
};

import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import PropsTypes, {func} from 'prop-types';
import {Icons, Images} from '../../assets';
import Styles from './style';
import {RoutesNames} from '../../config';
import {useNavigation, useIsFocused} from '@react-navigation/native';
export default PlaceComp = ({
  bckImage,
  placeText,
  locationText,
  bottomRightText,
  bottomRightTextStil,
  topRightText,
  starIcon,
  stil,
  topRightTextStil,
  isBack,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <ImageBackground source={bckImage} style={[Styles.bck, stil]}>
        <View style={Styles.header}>
          <View>
            {isBack && (
              <TouchableOpacity
                style={Styles.heartBar}
                onPress={() => {
                  navigation.navigate(RoutesNames.HOME);
                }}>
                <Image source={Icons.leftArrow} style={Styles.leftArrow} />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={Styles.heartBar}
            onPress={() => {
              setIsLiked(!isLiked);
            }}>
            <Image
              source={Icons.heart}
              style={[
                Styles.heart,
                isLiked ? {tintColor: 'black'} : {tintColor: 'white'},
              ]}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

PlaceComp.PropsTypes = {
  bckImage: PropsTypes.func,
  placeText: PropsTypes.string,
  locationText: PropsTypes.string,
  bottomRightText: PropsTypes.string,
  topRightText: PropsTypes.string,
  starIcon: PropsTypes.symbol,
  stil: PropsTypes.object,
  topRightTextStil: PropsTypes.object,
  backIcon: PropsTypes.symbol,
  isBack: PropsTypes.bool,
};
PlaceComp.defaultProp = {
  bckImage: null,
  placeText: '',
  locationText: '',
  bottomRightText: '',
  topRightText: '',
  starIcon: {},
  stil: {},
  topRightTextStil: {},
  backIcon: null,
  isBack: false,
};
/*
<View style={Styles.out}>
          <View style={Styles.top}>
            <View style={Styles.placeTextBar}>
              <Text style={Styles.placeText}>{placeText}</Text>
            </View>

            <View style={Styles.locationTextBar}>
              <Text style={[Styles.locationText, topRightTextStil]}>
                {topRightText}
              </Text>
            </View>
          </View>
          <View style={Styles.bottom}>
            <View style={Styles.bottomLeft}>
              <View style={Styles.locationBar}>
                <Image source={Icons.location} style={Styles.location} />
              </View>
              <View>
                <Text style={Styles.bottomLeftText}>{locationText}</Text>
              </View>
            </View>
            <View style={Styles.bottomRight}>
              <View style={Styles.star}>
                <Image source={starIcon} style={Styles.starIcon} />
              </View>
              <View>
                <Text style={[Styles.bottomRightText, bottomRightTextStil]}>
                  {bottomRightText}
                </Text>
              </View>
            </View>
          </View>
        </View>
*/

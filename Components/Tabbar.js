import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { ROUTES } from '../redux/router';
import s from './Tabbar.style';
import PropTypes from 'prop-types';

const Tabbar = (props) => (
  <View style={s.root}>
    <TouchableOpacity
      style={[s.item, props.route === ROUTES.SCAN && s.active]}
      onPress={() => props.navigateTo(ROUTES.SCAN)}
      children={<Image source={require('../assets/qr.png')} />}
    />
    <TouchableOpacity
      style={[s.item, props.route === ROUTES.COOKIES && s.active]}
      onPress={() => props.navigateTo(ROUTES.COOKIES)}
      children={<Image source={require('../assets/donut.png')} />}
    />
  </View>
);


Tabbar.propTypes = {
  route: PropTypes.string,
  navigateTo: PropTypes.func,
};

export default Tabbar;

import React from 'react';
import { View } from 'react-native';
import s from './Tabbar.style';
import PropTypes from 'prop-types';

const Tabbar = (props) => (
  <View style={s.root}>

  </View>
);


Tabbar.propTypes = {
  route: PropTypes.string,
  navigateTo: PropTypes.func,
};

export default Tabbar;

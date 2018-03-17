import React from 'react';
import { View } from 'react-native';
import s from './Overlay.style';

const Overlay = (props) => (
  <View style={s.root}>
    <View style={s.overlay} {...props} />
  </View>
);

export default Overlay;

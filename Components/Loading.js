import React from 'react';
import { View, Image, Text } from 'react-native';
import s from './Loading.style';

const Loading = () => (
  <View style={s.root}>
    <Image style={s.image} source={require('../assets/loader.gif')} />
    <Text style={s.text} children="Loading..." />
  </View>
);

export default Loading;

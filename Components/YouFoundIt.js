import React from 'react';
import { Image, View, Text } from 'react-native';
import s from './YouFoundIt.style';
import Button from './Button';
import { FOOD_IMAGES, FOOD_NAMES } from '../redux/user';

const YouFoundIt = ({ cookie, close }) => {
  return (
    <View style={s.root}>
      <Image source={FOOD_IMAGES[cookie.type]} style={s.image} />
      <Text
        style={s.text}
        children={`Congrats!\n You found a ${FOOD_NAMES[cookie.type]}`}
      />
      <Text
        style={s.subText}
        children={`${cookie.kb} KB`}
      />
      <Button style={s.button} label="OK" onPress={close} />
    </View>
  );
};

export default YouFoundIt;

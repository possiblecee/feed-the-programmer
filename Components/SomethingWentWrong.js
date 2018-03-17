import React from 'react';
import { Image, View, Text } from 'react-native';
import s from './SomethingWentWrong.style';
import Button from './Button';

const SomethingWentWrong = ({ cookie, close }) => {
  return (
    <View style={s.root}>
      <Text
        style={s.text}
        children={`Oooops,\s something went wrong.\n\n Please try agin later!`}
      />
      <Button style={s.button} label="OK" onPress={close} />
    </View>
  );
};

export default SomethingWentWrong;

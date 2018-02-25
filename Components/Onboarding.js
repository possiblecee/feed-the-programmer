import React, { Component } from 'react';
import { View } from 'react-native';
import s from './Onbordboarding.style';
import GeneralInput from './GeneralInput';

class Onboarding extends Component {
  render() {
    return (
      <View style={s.root}>
        <GeneralInput label="First Name" />
        <GeneralInput label="Email" />
      </View>
    );
  }
}

export default Onboarding;

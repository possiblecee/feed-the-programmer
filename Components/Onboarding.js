import React, { Component } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import s from './Onbordboarding.style';
import GeneralInput from './GeneralInput';
import RadioGroup from './RadioGroup';
import { SUPPORTED_SYSTEMS } from '../redux/user';
import PropTypes from 'prop-types';
import Button from './Button';

const OPTIONS = [
  {
    value: SUPPORTED_SYSTEMS.WINDOWS,
    image: require('../assets/windows.png'),
  },
  {
    value: SUPPORTED_SYSTEMS.LINUX,
    image: require('../assets/linux.png'),
  },
  {
    value: SUPPORTED_SYSTEMS.APPLE,
    image: require('../assets/apple.png'),
  },
];

const PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Onboarding extends Component {
  validate = () => {
    if (!this.props.nickname || !this.props.email || !this.props.system) {
      return false;
    }

    return PATTERN.test(this.props.email);
  }

  onPress = () => {
    this.props.authenticate();
  }

  render() {
    return (
      <View style={[s.root, this.props.style]}>
        <KeyboardAvoidingView style={s.child} behavior="padding">
          <ScrollView style={s.child} showsVerticalScrollIndicator={false}>
            <GeneralInput
              label="Nick Name"
              value={this.props.nickname}
              onChange={this.props.setNickName}
            />
            <GeneralInput
              keyboardType="email-address"
              autoCapitalize="none"
              label="Email"
              value={this.props.email}
              onChange={this.props.setEmail}
            />
            <RadioGroup
              label="Select your system"
              options={OPTIONS}
              value={this.props.system}
              onChange={this.props.setSystem}
            />
          </ScrollView>
          <Button
            style={s.button}
            label="NEXT"
            onPress={this.onPress}
            disabled={!this.validate()}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

Onboarding.propTypes = {
  style: View.propTypes.style,
  nickname: PropTypes.string,
  email: PropTypes.string,
  system: PropTypes.string,
  setSystem: PropTypes.func,
  setEmail: PropTypes.func,
  setNickName: PropTypes.func,
  authenticate: PropTypes.func,
};

export default Onboarding;

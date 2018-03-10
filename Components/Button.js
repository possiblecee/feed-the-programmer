import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import s from './Button.style';
import PropTypes from 'prop-types';

const Button = ({ label, style, disabled, onPress }) => (
  <TouchableOpacity disabled={disabled} onPress={onPress} style={s.touchable}>
    <View style={[s.root, disabled && s.disabled, style]}>
      <Text style={s.label} children={label} />
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  label: PropTypes.string,
  style: View.propTypes.style,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

export default Button;

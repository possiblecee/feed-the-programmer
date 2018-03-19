import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import s from './Button.style';
import PropTypes from 'prop-types';

const Button = ({ label, style, disabled, onPress, type }) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={s.touchable}
  >
    <View
      style={[s.root, s[`root_${type}`], disabled && s.disabled, style]}
    >
      <Text style={[s.label, s[`root_${type}`]]} children={label} />
    </View>
  </TouchableOpacity>
);

Button.TYPES = {
  DEFAULT: 'DEFAULT',
  OUTLINE: 'OUTLINE',
};

Button.defaultProps = {
  type: Button.TYPES.DEFAULT,
};

Button.propTypes = {
  label: PropTypes.string,
  style: View.propTypes.style,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.oneOf(Object.values(Button.TYPES)),
};

export default Button;

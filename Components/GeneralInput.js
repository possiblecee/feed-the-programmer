import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import s from './GeneralInput.style';
import PropTypes from 'prop-types';

class GeneralInput extends Component {
  focus = () => {
    if (this.refs.input) {
      this.refs.input.focus();
    }
  }
  onPress = () => {
    this.focus();
  };

  render() {
    const {
      label,
      style,
      ...props,
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={[s.root, style]}>
          <Text children={label} style={s.label} />
          <TextInput ref="input" {...props} style={s.input} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

GeneralInput.propTypes = {
  label: PropTypes.string,
  style: View.propTypes.style,
};

export default GeneralInput;

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

  onChange = (e) => {
    this.props.onChange(e);
  }

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
          <TextInput
            ref="input"
            {...props}
            onChangeText={this.onChange}
            onChange={null}
            style={s.input}
            underlineColorAndroid="rgba(0,0,0,0)"
          />
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

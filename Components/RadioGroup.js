import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import s from './RadioGroup.style';
import { INNER_WIDTH } from '../styles';

class RadioGroup extends Component {
  onPress = (value) => {
    Keyboard.dismiss();
    this.props.onChange(value);
  }

  render() {
    const itemSize = (INNER_WIDTH / this.props.options.length) - (this.props.options.length - 1) * 5;
    return (
      <View style={s.root}>
        <Text children={this.props.label} style={s.label} />
        <View style={s.wrapper}>
          {this.props.options.map(({ value, image }) => (
            <TouchableOpacity
              key={value}
              onPress={() => this.onPress(value)}
            >
              <View
                style={[
                  s.option,
                  this.props.value === value && s.selected,
                  { width: itemSize, height: itemSize },
                ]}
              >
                <Image
                  source={image}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default RadioGroup;

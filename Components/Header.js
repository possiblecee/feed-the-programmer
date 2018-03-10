import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';
import s, { HEALTH_MONITOR_MAX_WIDTH } from './Header.style';
import Config from '../config/config';
import PropTypes from 'prop-types';
const { user: USER_CONFIG } = Config;

const getCookieValue = ({ timestamp, value }) => (
  timestamp + (value * USER_CONFIG.MULTIPLYER)
);

class Header extends Component {
  state = {
    health: 100,
    weight: USER_CONFIG.MAX_WEIGHT,
    width: new Animated.Value(HEALTH_MONITOR_MAX_WIDTH),
  };

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.calculateHealth();
    }
  }

  componentWillReceiveProps({ isAuthenticated }) {
    if (isAuthenticated !== this.props.isAuthenticated && isAuthenticated) {
      this.calculateHealth();
    }
  }

  calculateHealth() {
    setInterval(() => {
      const timestamp = new Date().getTime();
      const cookiesHealth = this.props.cookies.reduce((acc, b) => (
        acc + Math.max(0, getCookieValue(b) - timestamp)
      ), 0);

      const health = cookiesHealth / (USER_CONFIG.LIFETIME * USER_CONFIG.MULTIPLYER);
      const weight = Math.floor(health * USER_CONFIG.MAX_WEIGHT);

      this.state.width.setValue(
        Math.min(health, 1) * HEALTH_MONITOR_MAX_WIDTH
      );

      if (weight !== this.state.weight) {
        this.setState({
          weight,
        });
      }
    }, 500);
  }

  render() {
    return (
      <View style={s.root}>
        {this.props.isAuthenticated && (
          <View style={s.healthMonitorContainer}>
            <View style={s.weightWrapper}>
              <Text children="CURRENT WEIGHT" style={[s.currentWeight, { flex: 1 }]} />
              <Text children={`${this.state.weight} KB`} style={s.currentWeight} />
            </View>
            <View style={s.healthMonitor}>
              <Animated.View
                style={[s.healthMonitorStatus, { width: this.state.width }]}
              />
            </View>
          </View>
        )}
      </View>
    );
  }
}

Header.propTypes = {
  cookies: PropTypes.array,
  isAuthenticated: PropTypes.bool,
};

export default Header;

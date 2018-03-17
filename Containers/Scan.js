import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Vibration, Alert, View, Image } from 'react-native';
import RNCamera from 'react-native-camera';
import { validateCookie } from '../services/cookie';
import { getCookies, setCookie, getSystem } from '../redux/user';
import { openOverlay, OVERLAYS } from '../redux/router';
import PropTypes from 'prop-types';
import { SUPPORTED_SYSTEMS } from '../redux/user';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../styles';

const IMAGES = {
  [SUPPORTED_SYSTEMS.APPLE]: require('../assets/bacground/mac.png'),
  [SUPPORTED_SYSTEMS.WINDOWS]: require('../assets/bacground/windows.png'),
  [SUPPORTED_SYSTEMS.LINUX]: require('../assets/bacground/linux.png'),
};

const s = {
  scan: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    resizeMode: 'cover',
  },
};

class Scan extends Component {
  activeCookie = '';
  onQRReead = ({ data }) => {
    if (data !== this.activeCookie) {
      const { success, ...cookie } = validateCookie(data);

      if (success) {
        const ids = this.props.cookies.map(({ id }) => id);
        if (!ids.includes(cookie.id)) {
          Vibration.vibrate();
          this.props.setCookie(cookie);
        }
      }

      this.activeCookie = data;
      setTimeout(() => {
        this.activeCookie = null;
      }, 2000);
    }
  }
  render() {
    return (
      <View style={s.scan}>
        <RNCamera
          style={s.scan}
          onBarCodeRead={this.onQRReead}
        />
        <Image
          source={IMAGES[this.props.system]}
          style={s.image}
        />
      </View>
    );
  }
}

Scan.propTypes = {
  cookies: PropTypes.array,
  system: PropTypes.string,
  setCookie: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cookies: getCookies(state),
  system: getSystem(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCookie: (cookie) => {
    dispatch(setCookie(cookie));
    dispatch(openOverlay(OVERLAYS.YOU_FOUND_IT));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Scan);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Vibration, Alert, View } from 'react-native';
import RNCamera from 'react-native-camera';
import { validateCookie } from '../services/cookie';
import { getCookies, setCookie } from '../redux/user';
import PropTypes from 'prop-types';

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
        } else {
          Alert.alert('You already ate this cookie fat boy!')
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
      <View style={{ flex: 1 }}>
        <RNCamera
          style={{ flex: 1 }}
          onBarCodeRead={this.onQRReead}
        />
      </View>
    );
  }
}

Scan.propTypes = {
  cookies: PropTypes.array,
  setCookie: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cookies: getCookies(state)
});

const mapDispatchToProps = (dispatch) => ({
  setCookie: (cookie) => dispatch(setCookie(cookie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scan);

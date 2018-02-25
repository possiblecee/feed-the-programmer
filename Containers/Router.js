import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { getRoute, ROUTES } from '../redux/router';
import Tabbar from './Tabbar';
import PropTypes from 'prop-types';
import Onboarding from './Onboarding';

const RenderScreen = ({ route }) => {
  switch (route) {
    case ROUTES.ONBOARDING:
      return <Onboarding />;
    default:
      return null;
  }
};

RenderScreen.propTypes = {
  route: PropTypes.string,
};

const Router = ({ route }) => (
  <View style={{ flex: 1 }}>
    <RenderScreen route={route} />
    <Tabbar />
  </View>
);

Router.propTypes = {
  route: PropTypes.string,
};

const mapStateToProps = (state) => ({
  route: getRoute(state),
});

export default connect(mapStateToProps)(Router);

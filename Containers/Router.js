import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { getRoute, ROUTES } from '../redux/router';
import Tabbar from './Tabbar';
import PropTypes from 'prop-types';
import Onboarding from './Onboarding';
import Scan from './Scan';
import Header from './Header';
import { PAGE_TOP_PADDING } from '../styles';

const getComponent = (route) => {
  switch (route) {
    case ROUTES.ONBOARDING:
      return Onboarding;
    case ROUTES.SCAN:
      return Scan;
    default:
      return () => null;
  }
}

const RenderScreen = ({ route }) => {
  return React.createElement(getComponent(route), {
    style: {
      paddingTop: PAGE_TOP_PADDING,
    },
  });
};

RenderScreen.propTypes = {
  route: PropTypes.string,
};

const Router = ({ route }) => (
  <View style={{ flex: 1 }}>
    <RenderScreen route={route} />
    <Header />
    {route !== ROUTES.ONBOARDING && (
      <Tabbar />
    )}
  </View>
);

Router.propTypes = {
  route: PropTypes.string,
};

const mapStateToProps = (state) => ({
  route: getRoute(state),
});

export default connect(mapStateToProps)(Router);

import React from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { getRoute, ROUTES, getOverlay, closeOverlay, OVERLAYS } from '../redux/router';
import Tabbar from './Tabbar';
import PropTypes from 'prop-types';
import Onboarding from './Onboarding';
import Scan from './Scan';
import Header from './Header';
import { PAGE_TOP_PADDING } from '../styles';
import Overlay from '../Components/Overlay';
import YouFoundIt from './YouFoundIt';
import SomethingWentWrong from '../Components/SomethingWentWrong';
import Cookies from './Cookies';
import Loading from '../Components/Loading';

const getComponent = (route) => {
  switch (route) {
    case ROUTES.ONBOARDING:
      return Onboarding;
    case ROUTES.SCAN:
      return Scan;
    case ROUTES.COOKIES:
      return Cookies;
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

const getOverlayComponent = (overlay) => {
  switch (overlay) {
    case OVERLAYS.YOU_FOUND_IT:
      return YouFoundIt;
    case OVERLAYS.ERROR:
      return SomethingWentWrong;
    case OVERLAYS.LOADING:
      return Loading;
    default:
      return null;
  }
};

const RenderOverlay = ({ overlay, close }) => {
  const OverlayComponent = getOverlayComponent(overlay);

  if (!OverlayComponent) {
    return null;
  }

  return React.createElement(() => <Overlay children={<OverlayComponent close={close} />} />);
};

RenderOverlay.propTypes = {
  overlay: PropTypes.string,
  close: PropTypes.func,
};

const Router = ({ route, closeOverlay, overlay }) => (
  <View style={{ flex: 1 }}>
    <StatusBar hidden />
    <RenderScreen route={route} />
    <Header />
    {route !== ROUTES.ONBOARDING && (
      <Tabbar />
    )}
    <RenderOverlay overlay={overlay} close={closeOverlay} />
  </View>
);

Router.propTypes = {
  route: PropTypes.string,
  overlay: PropTypes.string,
  closeOverlay: PropTypes.func,
};

const mapStateToProps = (state) => ({
  route: getRoute(state),
  overlay: getOverlay(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeOverlay: () => dispatch(closeOverlay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);

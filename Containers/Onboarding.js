import React from 'react';
import { connect } from 'react-redux';
import {
  getEmail,
  getNickName,
  getSystem,
  setEmail,
  setNickName,
  setSystem,
  authenticate,
} from '../redux/user';
import Onboarding from '../Components/Onboarding';
import { navigateTo, ROUTES } from '../redux/router';

const mapStateToProps = (state) => ({
  email: getEmail(state),
  nickname: getNickName(state),
  system: getSystem(state),
});

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setEmail(email)),
  setNickName: (nickname) => dispatch(setNickName(nickname)),
  setSystem: (system) => dispatch(setSystem(system)),
  authenticate: () => dispatch(authenticate()).then(() => dispatch(navigateTo(ROUTES.SCAN))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);

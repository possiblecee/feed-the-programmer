import React from 'react';
import { connect } from 'react-redux';
import { getEmail, getNickName } from '../redux/user';
import Onboarding from '../Components/Onboarding';

const mapStateToProps = (state) => ({
  email: getEmail(state),
  nickName: getNickName(state),
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);

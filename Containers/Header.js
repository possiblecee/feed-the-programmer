import { connect } from 'react-redux';
import Header from '../Components/Header';
import { getCookies, isAuthenticated, setProgrammerDeath, getUserIsAlive } from '../redux/user';

const mapStateToProps = (state) => ({
  cookies: getCookies(state),
  isAuthenticated: isAuthenticated(state),
  isAlive: getUserIsAlive(state),
});

const mapDispatchToProps = (dispatch) => ({
  setDeath: (isAlive) => dispatch(setProgrammerDeath(isAlive)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

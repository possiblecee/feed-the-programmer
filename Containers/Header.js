import { connect } from 'react-redux';
import Header from '../Components/Header';
import { getCookies, isAuthenticated } from '../redux/user';

const mapStateToProps = (state) => ({
  cookies: getCookies(state),
  isAuthenticated: isAuthenticated(state),
});

export default connect(mapStateToProps)(Header);

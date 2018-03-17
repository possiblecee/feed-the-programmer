import { connect } from 'react-redux';
import { getCookies } from '../redux/user';
import Cookies from '../Components/Cookies';

const mapStateToProps = (state) => ({
  cookies: getCookies(state),
});

export default connect(mapStateToProps)(Cookies);

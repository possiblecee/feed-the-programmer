import { connect } from 'react-redux';
import { getLastCookie } from '../redux/user';
import YouFoundIt from '../Components/YouFoundIt';

const mapStateToProps = (state) => ({
  cookie: getLastCookie(state),
});

export default connect(mapStateToProps)(YouFoundIt);

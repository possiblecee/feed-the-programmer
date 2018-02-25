import { connect } from 'react-redux';
import { getRoute, navigateTo } from '../redux/router';
import Tabbar from '../Components/Tabbar';


const mapStateToProps = (state) => ({
  route: getRoute(state),
});

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (route) => dispatch(navigateTo(route)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabbar);

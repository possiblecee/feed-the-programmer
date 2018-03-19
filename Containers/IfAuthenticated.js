import { connect } from 'react-redux';
import { isAuthenticated } from '../redux/user';
import PropTypes from 'prop-types';

const IfAuthenticated = (WrappedComponent) => {
  class Enhancer extends WrappedComponent {
    render() {
      if (this.props.isAuthenticated) {
        return super.render();
      } else {
        return null;
      }
    }
  }

  Enhancer.propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state),
  });

  return connect(mapStateToProps)(Enhancer);
}

export default IfAuthenticated;

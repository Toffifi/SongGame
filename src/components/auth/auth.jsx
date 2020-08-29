import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Auth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { authorized: null };
  }

  render() {
    const { authorized } = this.state;
    const { children } = this.props;
    if (authorized === null) {
      return <div>Loading...</div>;
    }
    if (authorized === true) {
      return children;
    }
    return <div>Sign In Page</div>;
  }
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

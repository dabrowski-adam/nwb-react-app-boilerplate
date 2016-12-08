import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Front extends Component {
  render() {
    return <h2>Front.</h2>;
  }
}

Front.proptypes = {

};

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Front);

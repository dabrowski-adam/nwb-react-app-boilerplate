import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Back extends Component {
  render() {
    return <h2>Back.</h2>;
  }
}

Back.proptypes = {

};

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Back);

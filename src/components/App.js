import './app.css';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
//import { appFlip } from '../actions/app';

class App extends Component {
  render() {
    const { side } = this.props;

    return <div className="App">
      <h1>Hello World!</h1>
      { side }
    </div>;
  }
}

App.proptypes = {
  //flip: PropTypes.func.isRequired,
  //isFlipped: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    //anchor: ownProps.params.anchor, 
    //isFlipped: ownProps.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //flip: (e) => dispatch(appFlip(e))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

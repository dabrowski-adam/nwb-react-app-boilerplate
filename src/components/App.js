import './App.css'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { appFlip } from '../actions/app'

class App extends Component {
  const { flip, isFlipped } = this.props;
  render() {
    return <div className="App">
      <a href="flipped" onClick={flip()}>{isFlipped ? 'HEADS' : 'TAILS'}</a>
    </div>
  };
}

App.proptypes = {
  flip: PropTypes.func.isRequired,
  isFlipped: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isFlipped: state.appIsFlipped
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    flip: () => dispatch(appFlip())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

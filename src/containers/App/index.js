import React, { Component } from 'react';
import { mapStateToProps, mapDispatchToProps } from './state';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>is pinging: {this.props.isPinging.toString()}</h1>
        <button onClick={this.props.ping}>Start PING</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

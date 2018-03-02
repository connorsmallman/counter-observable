import React, { Component } from 'react';
import { mapStateToProps, mapDispatchToProps } from './state';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>-</button>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

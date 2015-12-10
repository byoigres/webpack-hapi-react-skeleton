import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Navbar } from '../components';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, user } = this.props;
    console.log('App.props', this.props);
    return (
      <div>
        <Navbar />
        <p>Hello {user.name}, from App.js</p>
        {children}
      </div>
    );
  }
};

App.propTypes ={
  children: PropTypes.node,
  user: PropTypes.object.isRequired
};

let mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, {})(App);

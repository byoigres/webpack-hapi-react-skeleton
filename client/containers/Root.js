import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    //console.log('Root.props', this.props);
    //console.log('Store', store.getState());
    return (
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    );
  }
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

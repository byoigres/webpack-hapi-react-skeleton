import styles from '../styles/core.scss';
import React, { Component, PropTypes } from 'react';

class MainLayout extends Component {

  render() {
    return (
      <div className="page-container">
        {this.props.children}
      </div>
    );
  }
};

MainLayout.propTypes = {
  children : React.PropTypes.element
};

export default MainLayout;

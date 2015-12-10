var React = require('react');
var ReactDOM = require('react-dom');
var Counter = require('./app.jsx');

function mainApp () {
    ReactDOM.render(
        React.createElement(Counter),
        document.getElementById('root')
    );
}

document.addEventListener('DOMContentLoaded', mainApp);

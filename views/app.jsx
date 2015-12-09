var React = require('react');
var assets = require('../webpack-assets.json');

var App = React.createClass({
    render: function () {
        return (
            <html>
                <head>
                    <meta charSet='utf-8' />
                    <title>Main App</title>
                </head>
                <body>
                    <p>This layout is rendered by a <strong>server-side</strong> react view (views/app.jsx)</p>
                    <div id='root'>This text will be replaced by App component</div>
                    <script src={assets.main.js}></script>
                </body>
            </html>
        );
    }
});

module.exports = App;

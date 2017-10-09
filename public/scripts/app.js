'use strict';

var user = {
    name: 'Norman',
    age: 'Old',
    location: 'Goffstown'
};

var app = React.createElement(
    'div',
    null,
    user.name ? React.createElement(
        'h1',
        null,
        user.name
    ) : React.createElement(
        'h3',
        null,
        'Not sure who that user is.'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(app, appRoot);
'use strict';

var user = {
    name: 'Norman',
    age: 'Old',
    location: 'Goffstown'
};

var app = React.createElement(
    'div',
    null,
    React.createElement(
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
    ),
    React.createElement(
        'div',
        null,
        user.location && React.createElement(
            'p',
            null,
            'Lives in: ',
            user.location
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(app, appRoot);
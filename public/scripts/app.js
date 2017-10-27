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

var count = 0;

var increment = function increment() {
    count++;
    renderCounterApp();
};
var decrement = function decrement() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var counter = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: increment },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: decrement },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(counter, appRoot);
};

renderCounterApp();
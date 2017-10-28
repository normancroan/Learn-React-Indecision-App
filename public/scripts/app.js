'use strict';

console.log('App is running');
var appRoot = document.getElementById('app');

var app = {
    hiddenText: "Here's the magic text!",
    textIsHiding: true
};

var onToggleVisibilityClicked = function onToggleVisibilityClicked() {
    app.textIsHiding = !app.textIsHiding;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility'
        ),
        React.createElement(
            'button',
            { onClick: onToggleVisibilityClicked },
            app.textIsHiding ? "Show Text" : "Hide Text"
        ),
        !app.textIsHiding && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                app.hiddenText
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();

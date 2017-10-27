'use strict';

var user = {
    name: 'Norman',
    age: 'Old',
    location: 'Goffstown'
};

var app = React.createElement('div', null);

var appRoot = document.getElementById('app');
ReactDOM.render(app, appRoot);
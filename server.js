/* global require */

var routes = ['index', 'ping', 'dashboard'];
for (var i = routes.length - 1; i >= 0; i--) {
    require('./routes/' + routes[i]);
}

var React = require('react-native');
var { AppRegistry } = React;

var hello = require('./game.js')


AppRegistry.registerComponent('hello', () => hello);
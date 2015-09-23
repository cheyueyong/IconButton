/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var DiscoverView = require('./js/discover');

var {
  View,
  AppRegistry,
} = React;
 
var DiscoverViewComponent = React.createClass({
  render:function(){
    return(
      <DiscoverView/>
    );
  }
});

AppRegistry.registerComponent('DiscoverViewComponent', () => DiscoverViewComponent);

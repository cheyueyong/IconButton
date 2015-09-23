/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var IconButton = require('./IconButton');

var {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} = React;

var MainViewDisCover = React.createClass({
  
  componentWillMount: function(){
     // this._notifyStartUseJs();
  },

  componentWillUnmount: function(){
      subscription.remove();
  },

  getInitialState: function() {
    return {
      loading: true
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            欢迎使用iconButton
        </Text>
        <Text style={styles.instructions}>
            有问题请联系 https://github.com/cheyueyong
        </Text> 
        <IconButton style={{width:100, height:100, borderWidth: 1, borderColor: 'black'}} icon={require('image!Abacus')} onPress={this._handlePress}> 签到 </IconButton>
        <Text style={styles.instructions}>
            谢谢。。。
        </Text>

      </View>
    );
  },

   _handlePress(event) {
    console.log('Pressed!');
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = MainViewDisCover;

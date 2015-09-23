'use strict';

var React = require('react-native');
var {
  PropTypes,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} = React;

var systemButtonOpacity = 0.2;

var IconButton = React.createClass({

  propTypes: {
    ...TouchableOpacity.propTypes,
    icon: Image.propTypes.source,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
  },

  getDefaultProps: function() {
    return {
    };
  },

  render() {
    var touchableProps = {
      activeOpacity: this._computeActiveOpacity(),
    };
    if (!this.props.disabled) {
      touchableProps.onPress = this.props.onPress;
      touchableProps.onPressIn = this.props.onPressIn;
      touchableProps.onPressOut = this.props.onPressOut;
      touchableProps.onLongPress = this.props.onLongPress;
    }

    return (
      <TouchableOpacity {...touchableProps}>
        {this._renderGroupedChildren()}
      </TouchableOpacity>
    );
  },

  _renderGroupedChildren() {
    var buttonStateStyle = this.props.disabled ? styles.disabledText : null;
    var button;
    if(this.props.icon){
       button = (
           <View style={[ styles.containView, this.props.style]}>
           <View style={{flex:1}}/>
           <Image source={this.props.icon}  style={[this.props.style, {flex:3, resizeMode: Image.resizeMode.contain, borderWidth: 0, backgroundColor: 'transparent'}]} /> 
            <Text style={[styles.smallText, buttonStateStyle]}>{this.props.children}</Text>
           </View>)
    }else{
       button = (
        <View style={[styles.containView, this.props.style]}>
          <Text style={[styles.text, buttonStateStyle]}>
            {this.props.children}
          </Text>
        </View>)

    }
    return (
        {button}
    );
  },

  _computeActiveOpacity() {
    if (this.props.disabled) {
      return 1;
    }
    return this.props.activeOpacity != null ?
      this.props.activeOpacity :
      systemButtonOpacity;
  },
});

var styles = StyleSheet.create({
  containView:{
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderWidth: 1,
    borderColor: 'gray',
  },
  logo: {
    flex:4,
    resizeMode: Image.resizeMode.stretch,
    justifyContent:'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'black',
  },
  text: {
    color: '#007aff',
    fontFamily: '.HelveticaNeueInterface-MediumP4',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallText: {
    flex:2,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'normal',
    color: 'black',
    backgroundColor: 'transparent',
    marginTop:5,
  },
  disabledText: {
    color: '#dcdcdc',
  },
});

module.exports = IconButton;

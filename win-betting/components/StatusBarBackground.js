'use strict'
import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

export default class StatusBarBackground extends Component{
  render(){
    return(
      <View style={[styles.statusBarBackground, this.props.style || {}]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 20 : 24, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
    backgroundColor: 'black',
  }

})

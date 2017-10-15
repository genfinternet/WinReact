import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';

export default class SmallOutlineButton extends React.Component {
    _onPressButton() {
        Alert.alert('Button pressed', 'Show betting modal!')
    }

    render() {
        let title = this.props.title;
        let backgroundColor = this.props.backgroundColor;
        return (
            <TouchableHighlight
            style={styles.button}
              style={styles.submit}
              onPress={() => this._onPressButton()}
              underlayColor='#fff'>
              <Text style={styles.submitText}>{title}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
    }, submit:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor:'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'darkred'
    }, submitText: {
      color:'darkred',
      textAlign:'center',
    }
});

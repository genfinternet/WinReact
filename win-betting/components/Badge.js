import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';

export default class Badge extends React.Component {

    render() {
        let title = this.props.title;
        let backgroundColor = this.props.backgroundColor;
        return (
            <View
              style={styles.submit}
              onPress={() => this._onPressButton()}
              underlayColor='#fff'>
              <Text style={styles.submitText}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    submit:{
        flexDirection: 'column',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
        backgroundColor:'gold',
        borderRadius: 5,
    }, submitText: {
      color:'white',
      fontWeight: 'bold',
      textAlign:'center',
    }
});

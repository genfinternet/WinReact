import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SmallOutlineButton from './SmallOutlineButton'

export default class OddsButtonTextBis extends React.Component {
  render() {
    let odds = this.props.odds
    let name = this.props.name
    return (
      <View style={styles.container}>
          <Text style={styles.legend}>{name}</Text>
          <SmallOutlineButton title={odds}></SmallOutlineButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }, button: {
        backgroundColor: 'white',
        color: 'red',
    }, legend: {
        marginTop: 10,
        color: 'gray',
    }
});

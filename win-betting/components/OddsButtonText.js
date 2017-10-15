import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import OutlineButton from './OutlineButton'

export default class OddsButtonText extends React.Component {
  render() {
    let odds = this.props.odds
    let name = this.props.name
    return (
      <View style={styles.container}>
          <Text style={styles.legend}>{name}</Text>
          <OutlineButton title={odds}></OutlineButton>
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
        color: 'white',
    }
});

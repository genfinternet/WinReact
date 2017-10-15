import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import OddsButtonTextBis from './OddsButtonTextBis'

export default class TennisOdds extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <OddsButtonTextBis name="S. Peng" odds="1,37"/>
          <OddsButtonTextBis name="M. Puig" odds="2,20"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

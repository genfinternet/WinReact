import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import OddsButtonText from './OddsButtonText'

export default class FootballOdds extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <OddsButtonText name="Dortmund" odds="2,70"/>
          <OddsButtonText name="Match nul" odds="3,80"/>
          <OddsButtonText name="Real Madrid" odds="2,40"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
    },
});

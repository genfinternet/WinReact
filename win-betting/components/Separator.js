import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Separator extends React.Component {
  render() {
    return (
      <View style={styles.separator}/>
    );
  }
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: 'gold',
        height: 2,
        width: "94%",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '3%'
    },
});

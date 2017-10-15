import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import LiveEvent from './LiveEvent'

export default class LiveList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.whiteText}>ÉVÈNEMENTS EN COURS</Text>
          <FlatList
              data={[
                {key: 'Devin'},
                {key: 'Arthur'},
                {key: 'Bob'},
              ]}
              renderItem={({item}) => <LiveEvent style={styles.item}>{item.key}</LiveEvent>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 2.5,
        backgroundColor: 'white'
    }, whiteText: {
        fontWeight: 'bold',
        alignSelf: 'stretch',
        color: 'white',
        backgroundColor: '#333',
        padding: 4,
    },
});

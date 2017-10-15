import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import LiveList from './components/LiveList'
import StatusBarBackground from './components/StatusBarBackground'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
          <StatusBarBackground style={{backgroundColor: 'black'}}/>
          <Header style={styles.header}/>
          <LiveList style={styles.liveList}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

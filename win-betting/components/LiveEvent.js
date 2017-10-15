import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Separator from './Separator'
import Badge from './Badge'
import TennisOdds from './TennisOdds'

export default class LiveEvent extends React.Component {
  render() {
    let pic = {
        uri: 'http://freevector.co/wp-content/uploads/2011/08/67368-tennis-ball.png'
    }, logo = {
      uri: 'https://static.winamax.fr/img/content/betting/2016/20161011_Winamax_TV/WINAMAXTV1x.png'
    };
    return (
      <View style={styles.container}>
          <View style={styles.firstLine}>
              <View style={{flexDirection:'row'}}>
                  <Badge title='LIVE'/>
                  <Text style={styles.text}>2ème Set</Text>
              </View>
              <Image source={logo} style={{width: 50, height: 20, margin: 10,}}/>
          </View>
          <View style={styles.secondLine}>
              <Image source={pic} style={{width: 20, height: 20, marginLeft: 10, marginRight: 10,}}/>
              <Text style={styles.text}>WTA - Wuhan - 1/16 de finale</Text>
          </View>
          <View style={styles.thirdLine}>
              <Text style={styles.bold}>Shuain Peng</Text>
              <Text style={styles.red}>0</Text>
              <Text style={styles.redbold}>6     3</Text>
          </View>
          <View style={styles.thirdLine}>
              <Text style={styles.bold}>Monica Puig</Text>
              <Text style={styles.red}>0</Text>
              <Text style={styles.redbold}>6     3</Text>
          </View>
          <TennisOdds/>
          <Separator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 2.5,
        backgroundColor: 'white'
    }, text: {
        flexDirection: 'row',
        textAlign: 'center',
        textAlignVertical: 'center',
    }, bold: {
        fontSize: 16,
        flexDirection: 'row',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    }, red: {
        flex: 1,
        fontSize: 16,
        color: 'darkred',
        flexDirection: 'row',
        textAlign: 'right',
        textAlignVertical: 'center',
    }, redbold: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'darkred',
        flexDirection: 'row',
        textAlign: 'right',
        textAlignVertical: 'center',
    }, firstLine: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }, secondLine: {
        flexDirection: 'row',
    }, thirdLine: {
        flexDirection: 'row',
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
    }, badge: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

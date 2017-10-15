import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FootballOdds from './FootballOdds'
import EventDate from './EventDate'

export default class Header extends React.Component {
  render() {
    let pic = {
      uri: 'http://sport.citifmonline.com/wp-content/uploads/2016/08/Vardy-cele.jpg'
    };
    return (
      <View style={styles.header}>
        <Image source={pic} style={styles.backgroundImage}>
            <EventDate/>
            <View style={{flex: 1}}/>
            <FootballOdds/>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
    }, backgroundImage: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        resizeMode: 'cover', // or 'stretch'
    },
});

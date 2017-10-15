import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native';

export default class EventDate extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.legend}>Aujourd'hui à 20h45</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        borderRadius: 5,
    }, legend: {
        marginTop: 10,
        color: 'white',
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 15,
    }
});

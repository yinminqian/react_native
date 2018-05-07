/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Hello extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.h1}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        paddingTop: 14,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    }
});

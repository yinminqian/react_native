import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class Header extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const {ViewStyle, TextStyle} = styles;
        return (
            <View style={ViewStyle}>
                <Text style={TextStyle}>{this.props.Header_title}</Text>
            </View>
        )
    }

}


const styles = {
    ViewStyle: {
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
       shadowOffset:{width:0,height:2},
        shadowOpacity:0.3,
        shadowColor:'#000',
        elevation:2,
    },
    TextStyle: {
        marginTop: 10
    }

}
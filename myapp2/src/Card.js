import React from 'react'
import {View} from 'react-native'


const Card = (props) => {
    const {ViewStyle} = styles;
    return (
        <View style={ViewStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    ViewStyle: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        marginLeft:8,
        marginRight:8,
        marginTop:8,
    },
}


export default Card;
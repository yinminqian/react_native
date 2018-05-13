import React from 'react'
import {View} from 'react-native'


const Cardseccions = ({children}) => {
    const {ViewStyle} = styles;
    return (
        <View style={ViewStyle}>
            {children}
        </View>
    )
}

const styles = {
    ViewStyle: {
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',
        padding: 8,
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    }
}

export default Cardseccions;
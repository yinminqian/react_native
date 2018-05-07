import React from 'react';
import {View} from 'react-native';

const Cardsection = (props) => {
    return <View style={[styles.Viewcontainer,props.style]}>
        {props.children}
    </View>
}

const styles = {
    Viewcontainer: {
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',
        padding: 8,
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    }
}
export default Cardsection;
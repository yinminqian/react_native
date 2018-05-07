import React from 'react';
import {TouchableOpacity, Text} from 'react-native';


const Button = ({onPress,children}) => {
    const {toushow, TextStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={toushow}>
            <Text style={TextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )

}

const styles = {
    toushow: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#000',
        padding: 8,
    },
    TextStyle: {
        fontSize: 15,
        marginRight: 16,
        marginLeft: 16,
    }
}

export default Button;
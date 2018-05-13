import React from 'react'
import {View, Text, TextInput} from "react-native"


const input = ({label, value, placeholder, onChangeText, secureTextEntry}) => {
    const {ViewStyle, TextStyle, TextInputStyle} = styles;
    return (
        <View style={ViewStyle}>
            <Text style={TextStyle}>{label}</Text>
            <TextInput
                style={TextInputStyle}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                autoCapitalize='none'
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
            />

        </View>
    )
}

const styles = {
    ViewStyle: {
        flex: 1,
        flexDirection: "row",
    },
    TextStyle: {
        flex: 1,
        fontSize: 15,
    },
    TextInputStyle: {
        flex: 2,
        fontSize: 15,
        height: 20,
    }
}

export default input;
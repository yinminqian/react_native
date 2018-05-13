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
    View,
    TouchableOpacity
} from 'react-native';
import Header from './src/Header'
import {Siginster, Siginlogin, Siginout} from './src/oper'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const Model = {
    SIGIN_LOGIN: Symbol('SIGIN_LOGIN'),
    SIGIN_OUT: Symbol('SIGIN_OUT'),
    SIGIN_STER: Symbol('SIGIN_STER')
}
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            model: Model.SIGIN_LOGIN
        }
    }

    content() {
        switch (this.state.model) {
            case Model.SIGIN_LOGIN:
                return <Siginlogin/>;
            case Model.SIGIN_STER:
                return <Siginster/>;
            case Model.SIGIN_OUT:
                return <Siginout/>

        }
    }


    switchpage() {
        const {model} = this.state;
        if (model == Model.SIGIN_LOGIN) {
            this.setState({
                model: Model.SIGIN_STER
            })
        } else if (model == Model.SIGIN_STER) {
            this.setState({
                model: Model.SIGIN_LOGIN
            })
        }

    }

    btnShow() {
        if (this.state.model != Model.SIGIN_OUT) {
            const {btnView} = styles;
            return (
                <View style={btnView}>
                    <TouchableOpacity
                        onPress={this.switchpage.bind(this)}
                    >
                        <Text>{this.state.model == Model.SIGIN_LOGIN ? '去注册' : '去登录'}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }

    render() {
        return (
            <View>
                <Header Header_title='用户注册'></Header>
                {this.content()}
                {this.btnShow()}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    btnView: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

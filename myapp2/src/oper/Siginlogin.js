import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Card from '../Card'
import Cardseccions from '../seccions'
import Input from '../input'

class Siginlogin extends Component {
    state = {email: '', password: ''}

    render() {
        return (
            <View>
                <Card>
                    <Cardseccions>
                        <Input
                            label='邮箱'
                            value={this.state.email}
                            placeholder='user@qq.com'
                            OnChangeText={(email) => {
                                this.state({email})
                            }}
                        />
                    </Cardseccions>
                    <Cardseccions>
                        <Input
                            label='密码'
                            value={this.state.password}
                            placeholder='password'
                            OnchangeText={(password) => {
                                this.state({password})
                            }}
                            secureTextEntry={true}
                        />
                    </Cardseccions>
                    <Cardseccions>
                        <View>
                            <Button title='登录'></Button>
                        </View>
                    </Cardseccions>
                </Card>
            </View>
        )
    }
}

export {Siginlogin}
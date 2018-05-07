import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import Album from './album'

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        fetch(`http://homestead.test/api/test`)
            .then((res) => res.json())
            .then(resjson => {
                // console.log('resjson', resjson)
                this.setState({
                    data: resjson.data,
                })
            })
            .catch((ery) => {
                console.log('ery', ery)
            })
    }

    renderdata() {
        console.log('this.state.data', this.state.data)
        return this.state.data.map((item) => {
            return <Album key={item.id} game_data={item}></Album>
        })
    }

    render() {
        return (
            <ScrollView>
                {this.renderdata()}
                <View style={{paddingBottom: 8}}></View>
            </ScrollView>
        )
    }
}
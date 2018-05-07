import React, {Component} from 'react';
import {View, Text, Image,Linking} from 'react-native';
import Card from './Card'
import Cardsection from './Cardsection'
import Button from './Button'

export default class Album extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {image, sm_img, title, content} = this.props.game_data;
        const {imgshow,Imgstyle,title_,content_} = styles;
        return <Card>
            <Cardsection style={imgshow}>
                <Image source={{uri: image}} style={Imgstyle}></Image>
            </Cardsection>
            <Cardsection style={styles.contentShow}>
                <Image source={{uri: sm_img}} style={styles.sm_img}></Image>
                <View style={{flex: 1}}>
                    <Text style={title_}>{title}</Text>
                    <Text style={content_}>{content}</Text>
                </View>
            </Cardsection>
            <Cardsection>
                <Button onPress={()=>Linking.openURL('http://pvp.qq.com/')}>
                    购买
                </Button>
            </Cardsection>
        </Card>
    }
}

const styles = {
    Imgstyle: {
        flex: 1,
        height: 300,
    },
    imgshow: {
        padding: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        overflow: 'hidden',
    },
    sm_img: {
        width: 45,
        height: 45,
        marginRight: 8,
        borderRadius: 2
    },
    contentShow: {
        justifyContent: 'flex-start'
    },
    title_: {
        fontSize: 18,
        marginBottom: 5,
    },
    content_: {
        fontSize: 13,
        fontWeight: '300'
    }
}

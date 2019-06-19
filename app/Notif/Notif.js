import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, TouchableHighlight, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'

import NavigationService from '../Service/Navigation'

import MESSAGES from './Messages'

import { Style } from '../Themes/'
import Styles from './Style'
import {_storeData,_getData} from '@Component/StoreAsync';
import { Actions } from "react-native-router-flux";
import { Fonts, Metrics, Colors } from '../Themes/';
import {urlApi} from '@Config/services';
//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class Notif extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            email : '',
            name : '',
            group : '',
            dashmenu : []
        }
    }

    async componentDidMount(){
        const data = {
          email :  await _getData('@User'),
          name :  await _getData('@Name'),
          group : await _getData('@Group'),
          dashmenu : await _getData('@DashMenu'),
        }

        console.log('datra',data);
    
        this.setState(data,()=>{
        })
    }

    render() {
        let dashmenu = this.state.dashmenu.length % 3

        return (
            <Container style={Style.bgMain}>
                <StatusBar backgroundColor={"rgba(0, 0, 0, 0.3)"} animated barStyle="dark-content" />
                <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
                    <View style={Styles.section}>

                        <View style={Styles.message}>
                            <FlatList
                                data={MESSAGES}
                                style={Styles.item}
                                renderItem={({ item, separators,key }) => (
                                    <TouchableHighlight key={key} underlayColor='transparent' onPress={() => { NavigationService.navigate('MemberMessages') }}>
                                        <View style={Styles.record}>
                                            <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                            <View style={Styles.itemInfo}>
                                                <Text style={Styles.itemTitle}>{item.name}</Text>
                                                <Text style={Styles.itemDesc}>{item.desc}</Text>
                                            </View>
                                            <Text style={Styles.itemDate}>{item.date}</Text>
                                        </View>
                                    </TouchableHighlight>
                                )}
                            />
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}
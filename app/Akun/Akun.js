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

export default class Akun extends React.Component {

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
                <StatusBar backgroundColor={Colors.statusBarOrange} animated barStyle="dark-content" />
                <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>
                    <View style={Styles.section}>
                        <View style={Styles.profile}>
                            <Image source={require('@Asset/images/avatar.png')} style={Styles.avatar} />
                            <View>
                                <Text style={Styles.profileName}>Hey {this.state.name}</Text>
                                <Text style={Styles.profileLocation}>{this.state.group}</Text>
                            </View>
                            <Right>
                                <TouchableOpacity style={Styles.sBtn} onPress={() => { Actions.profile() }}>
                                    <Icon name="cog" style={{color : "#666",fontSize: 18,}} />
                                    <Text style={Styles.sLink} >Profile Setting</Text>
                                </TouchableOpacity>
                            </Right>
                        </View>


                        <View style={Styles.btnLayout}>
                        {this.state.dashmenu.map((val,key)=>
                            <TouchableOpacity key={key} style={Styles.btnBox} onPress={() => {
                                Actions[val.URL_angular]()
                            }}>
                                <Image source={{uri : urlApi+"images/dashPict/"+val.picture}} style={Styles.imgBtn} />
                                <Text style={Styles.btnText}>{val.Title}</Text>
                            </TouchableOpacity>
                        )}

                            {/* <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('MemberMessages')
                            }}>
                                <Image source={require('@Asset/images/btn-messages.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Messages</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                Actions.profile()
                            }}>
                                <Image source={require('@Asset/images/btn-boy.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Profile</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('MemberFavorites')
                            }}>
                                <Image source={require('@Asset/images/btn-favorites.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Favorites</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.btnBox} onPress={() => {
                                NavigationService.navigate('MemberSettings')
                            }}>
                                <Image source={require('@Asset/images/btn-settings.png')} style={Styles.btnImg} />
                                <Text style={Styles.btnText}>Settings</Text>
                            </TouchableOpacity> */}
                    
                        { dashmenu > 1 ? 
                            <TouchableOpacity style={Styles.btnBox}>
                            </TouchableOpacity>
                        :null}
                        </View>

                        <View style={Styles.message}>
                            <View style={Styles.headerBg}>
                                <Icon name="envelope" type="FontAwesome" style={Styles.headerIcon} />
                                <Text style={Styles.sHeader}>{'Recent Messages'.toUpperCase()}</Text>
                                <Right>
                                    <Button small rounded style={Styles.sBtn} onPress={() => { NavigationService.navigate('MemberMessages') }}>
                                        <Text style={Styles.sLink} >See All</Text>
                                    </Button>
                                </Right>
                            </View>
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
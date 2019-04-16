//import liraries
import React from 'react'
import { StatusBar, TouchableOpacity, TouchableHighlight, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, View, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, FooterTab, Badge } from 'native-base'

import NavigationService from '@Service/Navigation'

import PROPERTIES from './Properties'

import {Actions} from 'react-native-router-flux';

import { Style, Colors } from "../Themes/";
import Styles from "./Style";

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// create a component
class Categoris extends React.Component {
    constructor(props){
        super(props)

        this.state={
            properties
        }
    }

    clickUnitgoris() {
        Actions.unitgoris();
        this.setState({ click : true})
    }

    render() {
        return (
            <Container style={Style.bgMain}>
                <Header style={Style.navigation}>
                    <StatusBar backgroundColor="#7E8BF5" animated barStyle="light-content" />

                    <View style={Style.actionBarLeft}>
                        <Button transparent style={Style.actionBarBtn} 
                        onPress={Actions.pop}>
                            <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                        </Button>
                    </View>
                    <View style={Style.actionBarMiddle}>
                        <Text style={Style.actionBarText}>{'Categoris'.toUpperCase()}</Text>
                    </View>
                    <View style={Style.actionBarRight}>
                    </View>
                </Header>

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <ImageBackground style={Styles.homeBg}>
                    <View style={Styles.section}>
                        <FlatList
                            data={PROPERTIES}
                            style={Styles.item}
                            renderItem={({ item, separators }) => (
                                <TouchableHighlight underlayColor='transparent' onPress={() => this.clickUnitgoris()}>
                                    <View style={Styles.record}>
                                        <Image source={{ uri: item.image }} style={Styles.itemImg} />
                                        <View style={Styles.itemInfo}>
                                            <Text style={Styles.itemTitle}>{item.title}</Text>
                                           
                                        </View>
                                        <View style={Styles.trash}>
                                            <Button transparent onPress={() => {
                                                NavigationService.navigate('MemberFavorites')
                                            }}>
                                                <Icon name="arrow-right" type="FontAwesome" style={Styles.itemIcon} />
                                            </Button>
                                        </View>
                                    </View>
                                </TouchableHighlight>
                            )}
                        />
                    </View>


                </ImageBackground>
            
            </Content>
            </Container>
        );
    }
}

//make this component available to the app
export default Categoris;

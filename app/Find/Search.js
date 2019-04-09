import React from 'react'
import { StatusBar, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge } from 'native-base'
import RadioGroup from 'react-native-custom-radio-group'


import {Actions} from 'react-native-router-flux'

import { Style } from '../Themes/'
import Styles from './Style'

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
export const btnType = [{
    label: 'BUY',
    value: 'btn_buy'
}, {
    label: 'RENT',
    value: 'btn_rent'
}, {
    label: 'PROJECTS',
    value: 'btn_project'
}];


export default class Search extends React.Component {
   
    componentDidMount(){
        Actions.refresh({backTitle: ()=> this.props.title})

        }
    clickProject() {
        Actions.propertydetail();
        this.setState({ click : true})
    }
    render() {
        return (
        <Container style={Style.bgMain}>
    
            <Content style={Style.layoutContent} contentContainerStyle={Style.layoutContent}>
            <ScrollView
          scrollEventThrottle={200}
          directionalLockEnabled={true}
        >
            
                <View style={Styles.sectionGrey}>
                    <View style={Styles.headerBg}>
                        <Icon name="building" type="FontAwesome5" style={Styles.headerIcon} />
                        <Text style={Styles.sHeader}>{'All Project'.toUpperCase()}</Text>
                        {/* <Right>
                            <Button small rounded style={Styles.sBtn} onPress={() => { NavigationService.navigate('PublicProperties') }}>
                                <Text style={Styles.sLink} >See All</Text>
                            </Button>
                        </Right> */}
                    </View>
                    <View style={Styles.city}>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => this.clickProject()}>
                            <Image source={{ uri: 'https://cdn.londonandpartners.com/visit/london-organisations/houses-of-parliament/63950-640x360-london-icons2-640.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>THE REIZ CONDO</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <Image source={{ uri: 'https://www.visitbritain.com/sites/default/files/consumer_destinations/teaser_images/manchester_town_hall.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>88 AVENUE</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <Image source={{ uri: 'https://i2-prod.birminghampost.co.uk/business/commercial-property/article13376659.ece/ALTERNATES/s615/Hotel-la-Tour-1.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>SOLTERRA PLACE</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <Image source={{ uri: 'https://calvium.com/calvium/wp-content/uploads/2014/07/shutterstock_129753212.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>YUKATA SUITES</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <Image source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/12/1e/c7/71/mann-island-pier-head.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>NINES PLAZA & RESIDENCE</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.btnCity} onPress={() => {
                            NavigationService.navigate('PublicProperties')
                        }}>
                            <Image source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/4a/fe/6e/edinburgh-from-calton.jpg' }} resizeMode={'cover'} style={Styles.btnCityImg} />
                            <View style={Styles.btnCityLocation}>
                                <Text style={Styles.btnCityText}>VASAKA RESIDENCE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



            </ScrollView>
            </Content>


        </Container>
        )
    }
}
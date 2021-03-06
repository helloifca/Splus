import React from 'react'
import { Linking,StatusBar, WebView, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, View, FooterTab, Badge, List, ListItem, Tab, Tabs } from 'native-base'

import { Fonts, Metrics, Colors,Style } from '../Themes/';
import Styles from './Style2'
import {_storeData,_getData} from '@Component/StoreAsync';
import { Actions } from "react-native-router-flux";
import {urlApi} from '@Config/services';
import Mailer from 'react-native-mail';

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            email : '',
            name : '',
            group : '',
            dashmenu : [],
            fotoProfil : 'http://35.198.219.220:2121/alfaAPI/images/profil/avatar.png',
            isLogin : false,
            isLoaded : false
        }
    }

    async componentDidMount(){
        const data = {
          email :  await _getData('@User'),
          userId : await _getData('@UserId'),
          name :  await _getData('@Name'),
          group : await _getData('@Group'),
          token : await _getData('@Token'),
          dashmenu : await _getData('@DashMenu') ? await _getData('@DashMenu') : [],
          isLogin : await _getData('@isLogin')
        }

        console.log('datra',data);
        this.setState(data,()=>{
            if(data.isLogin){
                this.getProfile()
            }
        })

        setTimeout(()=>{
            this.setState({isLoaded : true})
        },2000)
    }

    receiveProps = async() =>{
        const data = {
          name :  await _getData('@Name'),
        }

        if(await _getData('@ProfileUpdate')){
            _storeData('@ProfileUpdate',false)
            this.setState(data)
            this.getProfile()
        }

    }

    getProfile = () => {
        
        fetch(urlApi+'c_profil/getData/IFCAMOBILE/'+this.state.email+'/'+this.state.userId,{
            method : "GET",
            headers :{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Token' : this.state.token
            }
        })
        .then((response) => response.json())
        .then((res)=>{
            const resData = res.Data[0];

            // ? Agar Gambar Tidak ter cache 
            let url = resData.pict + '?random_number=' + new Date().getTime()
            this.setState({fotoProfil:url})
            console.log('res Profil',this.state);
        }).catch((error) => {
            console.log(error);
        });
    }

    handleEmail = () => {
        Mailer.mail({
          subject: 'IFCA S+ App Feedback',
          recipients: ['support@example.com'],
          ccRecipients: ['supportCC@example.com'],
          bccRecipients: ['supportBCC@example.com'],
          body: '',
          isHTML: true
        }, (error, event) => {
          Alert.alert(
            error,
            event,
            [
              {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
              {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
            ],
            { cancelable: true }
          )
        });
    }

    handleRateUs = () =>{
        let link = "market://details?id=com.splus"
        console.log('link',link);
        Linking.canOpenURL(link)
        .then(supported => {
            supported && Linking.openURL(link);
        }, (err) => console.log(err));
    }

    render() {
        return <Container style={Style.bgMain}>
            <StatusBar backgroundColor="rgba(0,0,0,0)" animated barStyle="dark-content" />

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                
                <View style={Styles.owner}>

                    {this.state.isLogin ? 
                        <View style={Styles.ownerAvatar}>
                            <Image source={{uri : this.state.fotoProfil}} style={Styles.ownerAvatarImg} />
                        </View>
                    :null}

                    {this.state.isLogin ? 
                        
                        <View style={Styles.ownerInfo}>
                            <View>
                                <Text style={Styles.ownerName}>{this.state.name}</Text>
                                <Text style={Styles.ownerLocation}>{this.state.group}</Text>
                            </View>
                        </View>
                        
                    :  
                        <View style={Styles.ownerInfo}>
                            <View>
                                <Text style={Styles.ownerName}>Welcome Guest</Text>
                                <Text style={Styles.ownerLocation}>Sign In or Register</Text>
                            </View>
                        </View>
                    }
                </View>
                
                    <List style={Styles.infoTab}>
                        <ListItem style={Styles.infoItem} onPress={()=>Actions.profile({onBack:()=>this.receiveProps()}) }>
                            <Image source={require('@Asset/icon/settings.png')} style={Styles.infoIcon} />
                            <View style={{alignSelf:'center'}} style={{alignSelf:'center'}}>
                                <Text style={Styles.infoHeader}>{'Settings'.toUpperCase()}</Text>
                                <Text style={Styles.infoDesc}>{'Account Setting & Change Password'}</Text>
                            </View>

                            <Right style={{position:'absolute',right:10}}>
                                <Icon name="ios-arrow-dropright" style={{fontSize: 30,}} />
                            </Right>
                        </ListItem>
                        <ListItem style={Styles.infoItem} onPress={()=>Actions.menu() }>
                            <Image source={require('@Asset/icon/menu.png')} style={Styles.infoIcon} />
                            <View style={{alignSelf:'center'}}>
                                <Text style={Styles.infoHeader}>{'Menu'.toUpperCase()}</Text>
                                <Text style={Styles.infoDesc}>{'Shortcut Menu'}</Text>
                            </View>

                            <Right style={{position:'absolute',right:10}}>
                                <Icon name="ios-arrow-dropright" style={{fontSize: 30,}} />
                            </Right>
                        </ListItem>
                        <ListItem style={Styles.infoItem} onPress={()=>Actions.SimulasiPage() }>
                            <Image source={require('@Asset/icon/calculator.png')} style={Styles.infoIcon} />
                            <View style={{alignSelf:'center'}}>
                                <Text style={Styles.infoHeader}>{'Calculator'.toUpperCase()}</Text>
                                <Text style={Styles.infoDesc}>{'Calculator KPA/R Simulation'}</Text>
                            </View>

                            <Right style={{position:'absolute',right:10}}>
                                <Icon name="ios-arrow-dropright" style={{fontSize: 30,}} />
                            </Right>
                        </ListItem>
                        <ListItem style={Styles.infoItem} onPress={(val)=>this.handleEmail()}>
                            <Image source={require('@Asset/icon/helpcenter.png')} style={Styles.infoIcon} />
                            <View style={{alignSelf:'center'}}>
                                <Text style={Styles.infoHeader}>{'Help Center'.toUpperCase()}</Text>
                                <Text style={Styles.infoDesc}>{'Recommend features, report problems, or send feedback'}</Text>
                            </View>

                            <Right style={{position:'absolute',right:10}}>
                                <Icon name="ios-arrow-dropright" style={{fontSize: 30,}} />
                            </Right>
                        </ListItem>
                        <ListItem style={[Styles.infoItem, Styles.infoItemLast]} onPress={()=>this.handleRateUs()}>
                            <Image source={require('@Asset/icon/rate_us.png')} style={Styles.infoIcon} />
                            <View style={{alignSelf:'center'}}>
                                <Text style={Styles.infoHeader}>{'Rate Us'.toUpperCase()}</Text>
                                <Text style={Styles.infoDesc}>{'Rate and review application on App Store'}</Text>
                            </View>

                            <Right style={{position:'absolute',right:10}}>
                                <Icon name="ios-arrow-dropright" style={{fontSize: 30,}} />
                            </Right>
                        </ListItem>
                    </List>

            </Content>
        </Container>
    }
}
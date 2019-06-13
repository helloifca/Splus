import React from 'react'
import { StatusBar,ActionSheetIOS, WebView, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground, Dimensions, ScrollView, Platform, SafeAreaView, Picker, FlatList } from 'react-native'
import { Container, Header, Content, Button, Icon, Text, Title, Left, Right, Body, Input, Item, Footer, Accordion, View, FooterTab, Badge, List, ListItem, Tab, Tabs } from 'native-base'

import NavigationService from '@Service/Navigation'

import Styles from './Style'
import {urlApi} from '@Config/services';
import { Actions } from 'react-native-router-flux';
import {_storeData,_getData} from '@Component/StoreAsync';
import { Style, Colors } from "../Themes/";

//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            gender: null,
            email : '',
            name : '',
            group : '',
            userId : '',
            token : '',
            gender : '',
            hp : '',

            dataProfile : [],
            fotoProfil : require('@Asset/images/1.png'),
            fotoHeader : require('@Asset/images/1.png'),
        }

        this.renderAccordionHeader = this.renderAccordionHeader.bind(this)
        this.renderAccordionContent = this.renderAccordionContent.bind(this)
        this.renderAccordionContentBasic = this.renderAccordionContentBasic.bind(this)
        this.renderAccordionContentAddress = this.renderAccordionContentAddress.bind(this)
        this.renderAccordionContentContact = this.renderAccordionContentContact.bind(this)
        this.renderAccordionContentSocial = this.renderAccordionContentSocial.bind(this)

    }

    async componentDidMount(){
        const data = {
          email :  await _getData('@User'),
          userId : await _getData('@UserId'),
          name :  await _getData('@Name'),
          group : await _getData('@Group'),
          token : await _getData('@Token'),
          hp : await _getData('@Handphone')
        }
    
        this.setState(data,()=>{
            this.getProfile()
        })
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
            let urlHeader = resData.pict_header + '?random_number=' + new Date().getTime()
            this.setState({
                dataProfile:resData,
                fotoProfil:{uri:url},
                fotoHeader:{uri:urlHeader},
                gender : resData.gender
            })
            console.log('res Profil',res);
        }).catch((error) => {
            console.log(error);
        });
    }

    renderAccordionHeader(item, expanded) {
        return (
            <View style={Styles.accordionTab}>
                <Text style={Styles.accordionTabText}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={Styles.accordionTabIcon} name="minus" type="Foundation" />
                    : <Icon style={Styles.accordionTabIcon} name="plus" type="Foundation" />}
            </View>
        );
    }
    renderAccordionContent(item) {
        var fn = 'renderAccordionContent' + (item.type.charAt(0).toUpperCase() + item.type.substr(1));
        return <View style={Styles.accordionContent}>
            {this[fn]()}
        </View>
    }
    renderAccordionContentBasic() {
        let {gender,name,email,hp} = this.state

        return <View>
            <TextInput style={Styles.textInput} placeholder={'Email'} value={email} />
            <TextInput style={Styles.textInput} placeholder={'First Name'} value={name} />
            <TouchableOpacity onPress={()=>this.showActionSheet()}>
                <View pointerEvents="none">
                    <TextInput style={Styles.textInput} placeholder={'Gender'} value={gender} />
                </View>
            </TouchableOpacity>
            <TextInput style={Styles.textInput} placeholder={'Handphone'} value={hp} />
            {/* <TextInput style={Styles.textInputMulti} multiline={true} numberOfLines={8} placeholder={'About You'} /> */}
            <Button style={Styles.btn} onPress={() => {
                NavigationService.navigate('MemberHome')
            }}>
                <Text style={Styles.formBtnText}>{'Save'.toUpperCase()}</Text>
                <Icon active name='arrow-right' type="Feather" style={Styles.formBtnIcon} />
            </Button>
        </View>
    }
    renderAccordionContentAddress() {
        return <View>
            <TextInput style={Styles.textInputMulti} multiline={true} numberOfLines={2} placeholder={'Address'} />
            <View style={Styles.col}>
                <TextInput style={Styles.textInputHalf} placeholder={'City'} />
                <TextInput style={Styles.textInputHalf} placeholder={'State'} />
            </View>
            <TextInput style={Styles.textInput} placeholder={'Country'} />
            <TextInput style={Styles.textInput} placeholder={'Postcode'} />
            <Button style={Styles.btn} onPress={() => {
                NavigationService.navigate('MemberHome')
            }}>
                <Text style={Styles.formBtnText}>{'Save'.toUpperCase()}</Text>
                <Icon active name='arrow-right' type="Feather" style={Styles.formBtnIcon} />
            </Button>
        </View>
    }
    renderAccordionContentContact() {
        return <View>
            <TextInput style={Styles.textInput} placeholder={'Your Mobile No.'} />
            <TextInput style={Styles.textInput} placeholder={'Your Telephone No.'} />
            <TextInput style={Styles.textInput} placeholder={'Your Email Address'} />
            <TextInput style={Styles.textInput} placeholder={'Your Website url'} />
            <Button style={Styles.btn} onPress={() => {
                NavigationService.navigate('MemberHome')
            }}>
                <Text style={Styles.formBtnText}>{'Save'.toUpperCase()}</Text>
                <Icon active name='arrow-right' type="Feather" style={Styles.formBtnIcon} />
            </Button>
        </View>
    }
    renderAccordionContentSocial() {
        return <View>
            <TextInput style={Styles.textInput} placeholder={'Old Password'} />
            <TextInput style={Styles.textInput} placeholder={'New Password'} />
            <TextInput style={Styles.textInput} placeholder={'Confirm Password'} />
            <Button style={Styles.btn} onPress={() => {
                NavigationService.navigate('MemberHome')
            }}>
                <Text style={Styles.formBtnText}>{'Save'.toUpperCase()}</Text>
                <Icon active name='arrow-right' type="Feather" style={Styles.formBtnIcon} />
            </Button>
        </View>
    }

    showActionSheet(){
        const data = ['Cancel','Male','Female']
        ActionSheetIOS.showActionSheetWithOptions(
            {
                options: data,
                cancelButtonIndex: 0,
            },
            (buttonIndex) => {
                if (buttonIndex !== 0) {
                    this.setState({gender : data[buttonIndex]})
                }
            },
        );
    }

    render() {
        let {fotoProfil,fotoHeader} = this.state
        
        return (<Container style={Style.bgMain}>
            <StatusBar backgroundColor={Colors.statusBarOrange} animated barStyle="light-content" />

            <Content style={Style.layoutInner} contentContainerStyle={Style.layoutContent}>

                <View style={Styles.profile}>
                    <ImageBackground source={fotoHeader} imageStyle={'cover'} style={Styles.coverImg}>
                    </ImageBackground>

                    <View style={Styles.bgBlue}>
                    </View>

                    <View style={[Styles.owner, Style.actionBarIn]}>
                        <View style={Styles.ownerBg}>
                            <Image source={ fotoProfil } style={Styles.ownerAvatarImg} />
                        </View>
                        <View style={Styles.ownerInfo}>
                            <Text style={Styles.ownerName}>{this.state.name}</Text>
                            <Text style={Styles.ownerLocation}>{this.state.group}</Text>
                        </View>
                    </View>
                    <View style={[Styles.back, Style.actionBarIn]}>
                        <Button transparent style={Style.actionBarBtn} onPress={() => {
                            Actions.pop()
                        }}>
                            <Icon active name='arrow-left' style={Style.textWhite} type="MaterialCommunityIcons" />
                        </Button>
                    </View>
                </View>

                <View style={Styles.formBg}>
                    <Accordion
                        style={Styles.accordion}
                        dataArray={[
                            {
                                type: 'basic',
                                title: 'Basic',
                            },
                            
                            {
                                type: 'social',
                                title: 'Change Password'
                            },
                        ]}
                        expanded={0}
                        renderHeader={this.renderAccordionHeader}
                        renderContent={this.renderAccordionContent}
                    />
                </View>

            </Content>
        </Container>
        );
    }
}
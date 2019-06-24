//import liraries
import React, { Component } from 'react';
import {
    StatusBar,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    Image,
    ImageBackground,
    Dimensions,
    ScrollView,
    Platform,
    SafeAreaView,
    View,
    FlatList,
    Modal
  } from "react-native";
  import {
    Container,
    Header,
    Content,
    Button,
    Icon,
    Text,
    Title,
    Left,
    Right,
    Body,
    Input,
    Item,
    Footer,
    FooterTab,
    Badge,
    Card,
    Form,
    Label
  } from "native-base";

  import { Actions } from "react-native-router-flux";
  import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import { Style, Colors } from "../Themes";
import Styles from "./Style";

import {_storeData,_getData} from '@Component/StoreAsync';
import {urlApi} from '@Config/services';
import moment from 'moment'
import RNPickerSelect from 'react-native-picker-select';
import numFormat from '@Component/numFormat';

let isMount = false
// create a component
class NUPPage extends Component {

    constructor(props){
      super(props)

      this.state={
        hd : null,

        nups : [],
        user : "",
        name : "",
        project : [],
        isVisible : false
    }

      console.log('props cf',props);
    }

    async componentDidMount(){
      isMount = true
      const data = {
        hd : new Headers({
          'Token' : await _getData('@Token')
        }),
        nup : [],
        user : await _getData('@User'),
        name : await _getData('@UserId'),
        project : await _getData('@UserProject')
      }

      this.setState(data,()=>{
          this.getNup()
      })
    }

    
    getNup = (group_cd,agent_cd) =>{
        const item = this.props.items
        {isMount ?
            fetch(urlApi+'c_nup/getNup/'+item.db_profile+'/'+item.entity_cd+'/'+item.project_no,{
                method:'GET',
                headers : this.state.hd,
            }).then((response) => response.json())
            .then((res)=>{
                if(!res.Error){
                    const resData = res.Data
                    this.setState({nups :  resData})
                } else {
                    this.setState({comissions:[],isLoaded: !this.state.isLoaded},()=>{
                        alert(res.Pesan)
                    });
                }
                console.log('getNup',res);
            }).catch((error) => {
                console.log(error);
            })
        :null}
    }

    render() {
        return (
            <Container style={Style.bgMain}>
            <Header style={Style.navigation}>
               <StatusBar
                 backgroundColor={Colors.statusBarOrange}
                 animated
                 barStyle="light-content"
               />
     
               <View style={Style.actionBarLeft}>
                 <Button
                   transparent
                   style={Style.actionBarBtn}
                   onPress={Actions.pop}
                 >
                   <Icon
                     active
                     name="arrow-left"
                     style={Style.textWhite}
                     type="MaterialCommunityIcons"
                   />
                 </Button>
               </View>
               <View style={Style.actionBarMiddle}>
                 <Text style={Style.actionBarText}>
                   {"NUP".toUpperCase()}
                 </Text>
               </View>
               <View style={Style.actionBarRight}>
                   <TouchableOpacity onPress={()=>this.setState({isVisible:true})}>
                       <Icon name="add" style={Style.textWhite} />
                   </TouchableOpacity>
               </View>
               </Header>
             <Content
               style={Style.layoutInner}
               contentContainerStyle={Style.layoutContent}
             >
              {/* <Image
              source={require("@Asset/images/tigabr.jpg")}
              style={{
                width: null,
                height: 168,
                resizeMode: "cover",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 8
              }}
            />  */}
              <View>
                    <ScrollView>
                    {
                        this.state.nups.map((data,key)=>
                            <Card style={{
                                height: null,
                                backgroundColor: 'white',
                                shadowOffset: { width: 1, height: 1 },
                                shadowColor: "#37BEB7",
                                shadowOpacity: 0.5,
                                elevation: 5,
                                paddingHorizontal: 10,
                                paddingVertical: 10
                            }} key={key}>
                                <View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{
                                            fontSize: 12,
                                            textAlign: 'left',
                                            color: '#333',
                                            fontWeight : "bold"
                                        }}>
                                            {data.comm_doc_no}
                                            </Text>
                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: '500',
                                            textAlign: 'left',
                                            color: 'green'
                                        }}>
                                            {moment(data.trx_date).format("DD MMM YYYY")}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '500',
                                            textAlign: 'right',
                                            color: '#333'
                                        }}>
                                            Lot {data.lot_no}
                                        </Text>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '500',
                                            textAlign: 'right',
                                            color: '#333'
                                        }}>
                                            Name {data.name}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '500',
                                            textAlign: 'right',
                                            color: '#333'
                                        }}>
                                            Sell Price {numFormat(data.sell_price)}
                                        </Text>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '500',
                                            textAlign: 'right',
                                            color: '#333'
                                        }}>
                                            Com Percent {data.comm_percen}%
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '500',
                                            textAlign: 'right',
                                            color: '#02da00'
                                        }}>
                                            Com Amt {numFormat(data.comm_amount_dtl)}
                                        </Text>
                                        <Text style={{
                                            fontSize: 12,
                                            fontWeight: '500',
                                            textAlign: 'right',
                                            color: '#ff720d'
                                        }}>
                                            Status {data.status}
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                        )
                    }
                    </ScrollView>
                </View>

                <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.isVisible}
                onRequestClose={() => {
                    console.log('Modal has been closed.');
                }}>
                    <Header style={Style.navigationModal}>
                        <StatusBar
                            backgroundColor={Colors.statusBarOrange}
                            animated
                            barStyle="light-content"
                        />
                        <View style={Style.actionBarLeft}></View>
                        <View style={Style.actionBarMiddle}>
                            <Text style={Style.actionBarText}>
                            {"Add NUP".toUpperCase()}
                            </Text>
                        </View>
                        <View style={Style.actionBarRight}>
                            <Button
                            transparent
                            style={Style.actionBtnRight}
                            onPress={() => {
                                this.setState({ isVisible: !this.state.isVisible });
                            }}            >
                            <Icon
                                active
                                name="close"
                                style={Style.actionIcon}
                                type="FontAwesome"
                            />
                            </Button>
                        </View>
                    </Header>
                    <ScrollView>
                        <Form style={{marginTop:10}}>
                            <Item>
                                <Text>Add New NUP</Text>
                            </Item>
                            <Item floatingLabel>
                                <Label>Name</Label>
                                <Input onChangeText={(val)=>this.setState({name : val})} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Handphone</Label>
                                <Input onChangeText={(val)=>this.setState({handphone : val})} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Nationality</Label>
                                <Input multiline onChangeText={(val)=>this.setState({descs : val})} />
                            </Item>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input onChangeText={(val)=>this.setState({refEmail : val})} />
                            </Item>
                            <Body style={{ paddingVertical:32 }} >
                                <Button rounded success full
                                style={{ marginTop:16 }} >
                                    <Text>Save</Text>
                                </Button>
                            </Body>
                        </Form>
                    </ScrollView>
                </Modal>

                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default NUPPage;

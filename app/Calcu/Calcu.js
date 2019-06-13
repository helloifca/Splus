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
    Card
  } from "native-base";
  import { Actions } from "react-native-router-flux";
  import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import {Fonts, Metrics, Style, Colors } from "../Themes";
import Styles from "./Style";

import {_storeData,_getData} from '@Component/StoreAsync';
import {urlApi} from '@Config/services';
import moment from 'moment'

let isMount = false
// create a component
class Calcu extends Component {

    constructor(props){
      super(props)

      this.state={
        hd : null,

        customers : [],
        user : "",
        name : "",
        project : []
    }

      console.log('props cf',props);
    }

    async componentDidMount(){
      isMount = true
      const data = {
        hd : new Headers({
          'Token' : await _getData('@Token')
        }),
        user : await _getData('@User'),
        name : await _getData('@UserId'),
        project : await _getData('@UserProject')
      }

      this.setState(data,()=>{
        // this.getCustomers()
      })
    }

    getCustomers = () =>{

        {isMount ?
            this.state.project.map((val)=>{
                fetch(urlApi+'c_reservate/myReservation/'+val.db_profile+'/'+this.state.name,{
                    method:'GET',
                    headers : this.state.hd,
                }).then((response) => response.json())
                .then((res)=>{
                    if(!res.Error){
                        const resData = res.Data
                        resData.map((data)=>{
                            this.setState(prevState=>({
                                customers : [...prevState.customers, data]
                            }))
                        })
                    } else {
                        this.setState({isLoaded: !this.state.isLoaded},()=>{
                            alert(res.Pesan)
                        });
                    }
                    console.log('getCustomers',res);
                }).catch((error) => {
                    console.log(error);
                })
            })
        :null}
    }

    clickChouseUnit(item) {
      
        Actions.chouseunit({
          unitItems : item,
          items : this.props.item,
          prevItems : this.props.prevItems
        });
        // this.setState({ click : true})
    }
    clickUnitEnquiry() {
        Actions.unitenquiry();
        this.setState({ click : true})
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
                        onPress={Actions.pop}>
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
                        {"Simulasi Perhitungan KPA/R".toUpperCase()}
                        </Text>
                    </View>
                    <View style={Style.actionBarRight}></View>
                </Header>
                <Content
                style={Style.layoutInner}
                contentContainerStyle={Style.layoutContent}>
                <View>
                    <View style={styles.overview}>
                        <Text style={styles.overviewTitle}>Simulasi Perhitungan KPA/R</Text>

                        <TextInput
                            style={styles.textInput}
                            placeholder={"Total Credit ( IDR )"}
                            keyboardType="numeric"
                        />

                        <View style={styles.col}>
                            <TextInput
                            style={styles.textInputHalf}
                            placeholder={"Bunga (%)"}
                            keyboardType="numeric" />
                            <TextInput
                            style={styles.textInputHalf}
                            placeholder={"Time (years)"}
                            keyboardType="numeric" />
                        </View>

                        <Button style={styles.btn} >
                            <Text style={styles.formBtnText}>{"Hitung".toUpperCase()}</Text>
                            <Icon active name="calculator" type="FontAwesome" style={styles.formBtnIcon} />
                        </Button>

                    </View>
                    <View style={styles.overview}>

                        <Text style={styles.countText}>
                        * Angka di atas merupakan angka estimasi, untuk lebih akuratnya mohon hubungi bank terkait.
                        </Text>
                    </View>
                </View>
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
    overview: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor : '#fff'
    },
    overviewTitle: {
        flex: 1,
        fontFamily: Fonts.type.sfuiDisplaySemibold,
    },
    textInput: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
        borderBottomWidth: 0,
        borderColor: '#DDD',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 12,
        width: '100%',
        marginBottom: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
    },
    textInputHalf: {
		fontFamily: Fonts.type.sfuiDisplaySemibold,
        borderBottomWidth: 0,
        borderColor: '#DDD',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 12,
        width: '48.5%',
        marginBottom: 10,
        borderRadius: 5,
    },
    btn: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#FCC300',
        paddingVertical: 15,
        paddingLeft: 5,
      },
    btnText: {
        fontFamily: Fonts.type.sfuiDisplaySemibold,
        color: '#333',
        fontSize: 14,
        alignSelf: 'center',
    },
    formBtnText: {
        fontFamily: Fonts.type.sfuiDisplaySemibold,
        color: '#333',
        fontSize: 12,
    },
    formBtnIcon: {
        color: '#333',
        fontSize: 24,
    },
    countText: {
    fontFamily: Fonts.type.sfuiDisplaySemibold,
        fontSize: 12,
        color: '#999',
        flexWrap: 'wrap',
        flex :1,
        textAlign : 'center'
    },
    col: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

//make this component available to the app
export default Calcu;

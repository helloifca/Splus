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
    Badge
  } from "native-base";

  import { Actions } from "react-native-router-flux";
  import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import { Style, Colors } from "../Themes";
import Styles from "./Style";


// create a component
class ChouseFloor extends Component {
    clickChouseUnit() {
        Actions.chouseunit();
        this.setState({ click : true})
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
                 backgroundColor="#7E8BF5"
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
                   {"Unit Detail".toUpperCase()}
                 </Text>
               </View>
               <View style={Style.actionBarRight}>
               <Button
                   transparent
                   style={Style.actionBarBtnRight}
                   onPress={Actions.categoris}
                 >
                   <Icon
                     active
                     name="action-undo"
                     style={Style.actionIcon}
                     type="SimpleLineIcons"
                   />
                 </Button>
                 </View>
                 
                
               </Header>
             <Content
               style={Style.layoutInner}
               contentContainerStyle={Style.layoutContent}
             >
              <Image
              source={require("@Asset/images/tigabr.jpg")}
              style={{
                width: null,
                height: 168,
                resizeMode: "cover",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 8
              }}
            /> 
              <View>
                    <View style={Styles.headerUnit}>
                        <Text style={Styles.sHeader}>{'Yukata suites'.toUpperCase()}</Text>
                        <Right>
                            <Button small rounded style={Styles.sBtn} onPress={() => { this.clickUnitEnquiry(); 
                            }}  >
                                <Text style={Styles.sLink}>Unit Enquiry</Text>
                            </Button>
                        </Right>
                    </View>
                    <Text style={{
                        fontWeight: "300",
                        fontSize: 16,
                        paddingLeft: 16,
                        justifyContent: "center",
                        alignItems: "center",

                    }}>Unit type</Text>
                    <View style={Styles.city}>
                            <TouchableOpacity style={Styles.btnCity} onPress={() => {
        this.clickChouseUnit();
      }} >
                                <View style={Styles.btnCityLocation}>
                                    <Icon
                                        active
                                        name="floor-plan"
                                        style={Style.actionIconquiry}
                                        type="MaterialCommunityIcons"
                                    />
                                    <Text style={Styles.btnCityText}>Lantai 01 </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.btnCity} >
                                <View style={Styles.btnCityLocation}>
                                    <Icon
                                        active
                                        name="floor-plan"
                                        style={Style.actionIconquiry}
                                        type="MaterialCommunityIcons"
                                    />
                                    <Text style={Styles.btnCityText}>Lantai 02 </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.btnCity} >
                                <View style={Styles.btnCityLocation}>
                                    <Icon
                                        active
                                        name="floor-plan"
                                        style={Style.actionIconquiry}
                                        type="MaterialCommunityIcons"
                                    />
                                    <Text style={Styles.btnCityText}>Lantai 03 </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.btnCity} >
                                <View style={Styles.btnCityLocation}>
                                    <Icon
                                        active
                                        name="floor-plan"
                                        style={Style.actionIconquiry}
                                        type="MaterialCommunityIcons"
                                    />
                                    <Text style={Styles.btnCityText}>Lantai 01 </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.btnCity} >
                                <View style={Styles.btnCityLocation}>
                                    <Icon
                                        active
                                        name="floor-plan"
                                        style={Style.actionIconquiry}
                                        type="MaterialCommunityIcons"
                                    />
                                    <Text style={Styles.btnCityText}>Lantai 02 </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.btnCity} >
                                <View style={Styles.btnCityLocation}>
                                    <Icon
                                        active
                                        name="floor-plan"
                                        style={Style.actionIconquiry}
                                        type="MaterialCommunityIcons"
                                    />
                                    <Text style={Styles.btnCityText}>Lantai 03 </Text>
                                </View>
                            </TouchableOpacity>
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
});

//make this component available to the app
export default ChouseFloor;

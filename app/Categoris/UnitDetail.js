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

import { Style, Colors } from "../Themes/";
import Styles from "./Style";


// create a component
class UnitDetail extends React.Component {

    clickChouseFloor() {
      Actions.chousefloor();
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
          <View style={Style.actionBarRight}/>
           
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
            <Text
              style={{
                fontWeight: "300",
                fontSize: 16,
                padding: 8,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              The Riez Condo
            </Text>
            <Text style={{ fontSize: 16,                 padding: 8,
 }}>
              Apartment | REIZ 1BR | 50.66 m²
            </Text>

            <View style={{ paddingTop: 10 }} >  
        
              <Text
                style={{
                  fontSize: 12,
                  padding:8

                }}
              >
                SPECIFICATION
                {"\n\n"}Interior : Lightweight brick with smooth plastered &
                painted Exterior : Precast Panel & ACP
                {"\n\n"}Flooring
                {"\n\n"}Main Room : Homogenous Tile 60 x 60 Living Room :
                Homogenous Tile 60 x 60 Dining Room : Homogenous Tile 60 x 60
                Bedroom : Parquette Service Room : Homogenous Tile 60 x 60
                Bathroom : Homogenous Tile 60 x 60 Lobby : Granite
                {"\n\n"}Ceiling
                {"\n\n"}Gypsum metal frame painted finishing
                {"\n\n"}Door Main Room : Solid double layared wood panel Bedroom
                : Double layared wood panel Bathroom :Double layered wood panel
                {"\n\n"}Window Frame Tinted glass with alumunium powder coating
                frame
                {"\n\n"}Sanitary Toto Sanitary Wares or equal
              </Text>
              </View>
            
    </Content>
    <Button full style={{ backgroundColor: "#fb5f26" }}
    onPress={() => {
        this.clickChouseFloor();
      }}>
          <Text>Find Unit</Text>
        </Button>
    </Container>
   );
}
}  


//make this component available to the app
export default UnitDetail;

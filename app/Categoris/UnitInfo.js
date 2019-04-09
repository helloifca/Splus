//import liraries
import React, { Component } from "react";
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
  Form,
  Label
} from "native-base";

import Interested from "./Interested"

import { Actions } from "react-native-router-flux";
import ParallaxScroll from "@monterosa/react-native-parallax-scroll";

import { Style, Colors } from "../Themes";
import Styles from "./Style";

import RBSheet from "react-native-raw-bottom-sheet";


// create a component
class UnitInfo extends Component {
    state = {
        isVisible: false, //state of modal default false
      };  
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
            <Text style={Style.actionBarText}>{"Unit Info".toUpperCase()}</Text>
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
          <Text
            style={{
              fontSize: 12,
              paddingTop: 16,
              marginLeft: 16,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            YUKATA SUITES
          </Text>
          <Text style={{ fontSize: 12, marginLeft: 16 }}>MIZU | Lantai 03</Text>
          <Text style={{ fontSize: 12, marginLeft: 16 }}>3 BR | 03/B</Text>
          <Text style={{ fontSize: 12, marginLeft: 16 }}>
            By Request : IDR,.
          </Text>
        </Content>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <Header style={Style.navigation}>
          <StatusBar
            backgroundColor="#7E8BF5"
            animated
            barStyle="light-content"
          />
           <View style={Style.actionBarLeft}>
               </View>
          <View style={Style.actionBarMiddle}>
            <Text style={Style.actionBarText}>
              {"I'm Interested".toUpperCase()}
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
        <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Nama Anda</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Handphone</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Deskripsi</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Reference Email</Label>
              <Input />
            </Item>
            <Body style={{ paddingVertical:32 }} >
            <Button rounded success full
            style={{ marginTop:16 }} >
            <Text>Send Email</Text>
          </Button>
            <Button rounded warning iconRight full
            style={{ marginTop:16 }}>
            <Text>Send via WhatsApp</Text>
            <Icon name='whatsapp' 
            type="FontAwesome5"/>
          </Button>
          </Body>
          </Form>
          </ScrollView>
        </Modal>
        <Button full style={{ backgroundColor: "#fb5f26" }}   onPress={() => {
            this.setState({ isVisible: true });
          }}>
          <Text>I'm Interested</Text>
        </Button>
      </Container>
    );
  }
}



// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

//make this component available to the app
export default UnitInfo;

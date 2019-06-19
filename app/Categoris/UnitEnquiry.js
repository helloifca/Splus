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
  Modal,
  Alert
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

import Interested from "./Interested";


import { Actions } from "react-native-router-flux";
import ParallaxScroll from "@monterosa/react-native-parallax-scroll";

import { Style, Colors } from "../Themes";
import Styles from "./Style";

import RBSheet from "react-native-raw-bottom-sheet";


// create a component
class UnitEnquiry extends Component {
  constructor(props) {
    super(props);
    // const elementButton = (value) => (
    //   <TouchableOpacity onPress={() => this._alertIndex(value)}>
    //     <View style={styles.btn}>
    //       <Text style={styles.btnText}>{value}</Text>
    //     </View>
    //   </TouchableOpacity>
    // );

    // this.state = {
    //   tableTitle: ['Left Coloum', 'Left Coloum', 'Left Coloum', 'Left Coloum', 'Left Coloum', 'Left Coloum', 'Left Coloum', 'Left Coloum', 'Left Coloum', 'Left Coloum', 'Left Coloum','satu'],
    //   tableData: [
    //     [elementButton('Header 2'), 'a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'],
    //     [elementButton('Header 3'), '1', '2', '3', '4','a', 'b', 'c', 'd','a', 'b', 'c', 'd'],
    //     [elementButton('Header 4'), 'a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'],
    //     [elementButton('Header 5'), 'a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'],
    //     [elementButton('Header 6'), 'a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'],
    //     [elementButton('Header 7'), 'a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'],
    //     [elementButton('Header 8'), 'a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'],
    //     [elementButton('Header 9'), 'a', 'b', 'c', 'd','a', 'b', 'c', 'd','a', 'b', 'c', 'd'],
        
    //   ]
    // }

    this.state = { GridViewItems: [
      {key: 'Lantai 1'},
      {key: 'Lantai 4'},
      {key: 'Lantai 6'},
      {key: 'Lantai 9'},
      {key: 'Lantai 7'},
      {key: 'Lantai 11'},
      {key: 'Lantai 18'},
      {key: 'Lantai 40'},
      {key: 'Lantai 33'},
      {key: 'Lantai 11'},
      {key: 'Lantai 18'},
      {key: 'Lantai 40'},
      {key: 'Lantai 33'},
      {key: 'Lantai 11'},
      {key: 'Lantai 18'},
      {key: 'Lantai 40'},
      {key: 'Lantai 33'},
      
    ]}

    this.state2 = { GridViewItems2: [
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio A'},
      {key: 'R-0708 1 Bedroom'},
      {key: 'R-0708 2 Bedroom'},
      {key: 'R-0708 Studio B'},
      {key: 'R-0708 Studio B'},
    ]}
  }

  // _alertIndex(value) {
  //   Alert.alert(`This is column ${value}`);
  // }

  GetGridViewItem (item) {
  
 Alert.alert(item);
 
 }

  state = {
    isVisible: false //state of modal default false
  };

  render() {
    const state = this.state;
    const state2 = this.state2;
    return (
      <Container style={Style.bgMain}>

        <Header style={Style.navigation}>
          
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
              {"Unit Enquiry".toUpperCase()}
            </Text>
          </View>
          <View style={Style.actionBarRight}>
          
          </View>
        </Header>
        <View style={{padding:16}}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000000'}}>
            IFCA Apartment {'&'} Resident
          </Text>

          <Text style={{fontSize: 15, color: '#000000'}}>
            Apartment
          </Text>
        </View>
       
        <Header style={Style.navigationRow}>
          <View style={Style.actionBarLeft}>
            <Text>Block /Tower</Text>
          </View>
          <View style={Style.actionBarMiddle}>
            <Text style={Style.actionBarText}>{"Unit".toUpperCase()}</Text>
          </View>
          <View style={Style.actionBarRight} />
        </Header>
        <Content
          style={Style.layoutInner}
          contentContainerStyle={Style.layoutContent}
        >
          <View style={styles.container}>
          </View>
          <View style={styles.MainContainer}>
        {/* head */}
       
        {/* end head */}


      {/* top fixed */}
        {/* <View style={{backgroundColor: '#ffffff', width: '100%', height: 50}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 10, width: '30%'}}>
              <Text style={{color: '#000000', fontSize: 15}}>
                  Block / Floor
              </Text>
            </View>
            <View style={{padding: 10, width: '70%'}}>
              <Text style={{color: '#000000', fontSize: 15}}>
                  Unit
              </Text>
            </View>
          </View> 
        </View>   */}
      {/* end top fixed */}


        <ScrollView>
          <View style={{flexDirection: 'row'}}>
        
            <FlatList style={{width: '40%'}}
              data={ this.state.GridViewItems }

              renderItem={({item}) =>

                <View style={styles.GridViewBlockStyle_Left}>

                  <Text style={{fontSize: 14, color: '#ffffff'}} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                
                </View>       
              }

              numColumns={1}
            />

          <ScrollView horizontal>

            <FlatList style={{width: '60%'}}
              data={ this.state2.GridViewItems2 }

              renderItem={({item}) =>

                  <View style={styles.GridViewBlockStyle}>
                    <View style={{backgroundColor: 'red', borderRadius: 10, paddingLeft: 5, borderWidth: 3, borderColor: '#c1c1c0',elevation: 2,height: 40, width: 80,justifyContent: 'center',alignItems: 'center',padding: 2}}>
                      <Text style={{fontSize: 13, color: '#ffffff'}} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                    </View>
                  </View>}

              numColumns={5}
              />
          </ScrollView>

          </View>
        </ScrollView>
   
   
</View>
         
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flexibleContainer: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: '#02326b',
    fontSize: 40,
    lineHeight: 80,
  },
  MainContainer :{
   
    justifyContent: 'center',
    flex:1,
    margin: 10,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0
     
    },
     
    GridViewBlockStyle_Left: {
     
      justifyContent: 'center',
      flex:1,
      alignItems: 'center',
      height: 55,
      // marginTop: 5,
      backgroundColor: '#ff720d',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
     
    },
  
    GridViewBlockStyle: {
     
      justifyContent: 'center',
      // start: 'left',
      flex:1,
      // alignItems: 'center',
      height: 55,
      width: 90,
      // borderRadius: 20,
      // margin: 5,
      padding: 1,
      backgroundColor: 'white',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
     
    },
     
    GridViewInsideTextItemStyle: {
     
       color: '#fff',
      //  padding: 10,
       fontSize: 18,
       justifyContent: 'center',
       
     },
});

//make this component available to the app
export default UnitEnquiry;

import React, { Component } from "react";
import { SafeAreaView,ActivityIndicator } from "react-native";
import {
  Scene,
  Router,
  Actions,
  Stack,
  ActionConst
} from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "./Home/Home";
import Login from "./Intro/Intro";
import Search from "./Find/Search";
import Calcu from "./Calcu/Calcu";
import Akun from "./Akun/Akun";

import PropertyDetail from "./Property/PropertyDetail";

import Categoris from "./Categoris/Categoris";
import Unitgoris from "./Categoris/Unitgoris";
import Unittype from "./Categoris/Unittype";
import UnitDetail from "./Categoris/UnitDetail";

import { Tab } from "native-base";
import ChouseFloor from "./Categoris/ChouseFloor";
import ChooseTower from "./Categoris/ChooseTower";
import ChouseUnit from "./Categoris/ChouseUnit";
import UnitInfo from "./Categoris/UnitInfo";
import UnitEnquiry from "./Categoris/UnitEnquiry";

//Reservation
import MyReservationProjectPage from "./Reservation/myReservation";

//Unit
import MyUnitPage from "./MyUnit/myUnit";

//Profile
import Profile from "./Profile";

//Feed 
import Feed from './Feed/Feed';

//News And Promo 
import NewsPage from './NewsAndPromo/news';

import {_storeData,_getData} from '@Component/StoreAsync';


const TabIcon = ({ focused, iconName }) => {
  var color = focused ? "#1abc9c" : "#7f8c8d";
  return (
    <Icon name={iconName} color={color} size={24} style={{ marginTop: 8 }} />
  );
};

class Routes extends Component{

  constructor(){
    super()

    this.state = {
      hasLogin : false,
      isLoaded : false
    }
  }

  async componentDidMount() {
    try {
      const isLogin = await _getData('@isLogin')
      console.log('isLogin: ', isLogin)
      if (isLogin) {
          this.setState({hasLogin:true,isLoaded:true})
      } else {
          this.setState({hasLogin:null,isLoaded:true})
      }
    } catch (err) {
      console.log('error: ', err)
    }
  }

  render(){
    if(!this.state.isLoaded){
      return(
          <ActivityIndicator />
      )
    } else {
      return (
        <Router>
          <Scene key="root" headerLayoutPreset="center">
            <Scene key="Login" initial={!this.state.hasLogin} component={Login} hideNavBar={true} title="" />
            <Scene key="tabbar" initial={this.state.hasLogin} hideNavBar translucent={true} tabs={true}>
              <Scene
                key="home"
                component={Home}
                navTransparent={true}
                hideNavBar={true}
                title=""
                tabBarLabel="Home"
                activeTintColor="#333"
                inactiveTintColor="#fff"
                iconName="home"
                icon={TabIcon}
              />
              <Scene
                key="ListingProjectPage"
                component={Search}
                navTransparent={true}
                hideNavBar={true}
                title=""
                tabBarLabel="Project"
                iconName="building-o"
                icon={TabIcon}
              />
              <Scene
                key="calcu"
                component={Feed}
                navTransparent={true}
                hideNavBar={true}
                title=""
                tabBarLabel="Feed"
                iconName="newspaper-o"
                icon={TabIcon}
              />
              <Scene
                key="akun"
                component={Akun}
                navTransparent={true}
                hideNavBar={true}
                title=""
                tabBarLabel="Akun"
                iconName="user"
                icon={TabIcon}
              />
            </Scene>
            <Scene
                  key="propertydetail"
                  component={PropertyDetail}
                  hideNavBar={true}
                  title=""
        
                />
                <Scene
                  key="categoris"
                  component={Categoris}
                  hideNavBar={true}
                  title=""
        
                />
                  <Scene
                  key="unitgoris"
                  component={Unitgoris}
                  hideNavBar={true}
                  title=""
        
                />
    
                <Scene
                  key="unittype"
                  component={Unittype}
                  hideNavBar={true}
                  title=""
                />
    
                 <Scene
                  key="unitdetail"
                  component={UnitDetail}
                  hideNavBar={true}
                  title=""
                />
                
                <Scene
                  key="chousefloor"
                  component={ChouseFloor}
                  hideNavBar={true}
                  title=""
                />
                <Scene
                  key="choosetower"
                  component={ChooseTower}
                  hideNavBar={true}
                  title=""
                />
                 <Scene
                  key="chouseunit"
                  component={ChouseUnit}
                  hideNavBar={true}
                  title=""
                />
                 <Scene
                  key="unitinfo"
                  component={UnitInfo}
                  hideNavBar={true}
                  title=""
                />
                 <Scene
                  key="unitenquiry"
                  component={UnitEnquiry}
                  hideNavBar={true}
                  title=""
                />

                <Scene
                  key="profile"
                  component={Profile}
                  hideNavBar={true}
                  title=""
                />

                <Scene
                  key="MyReservationProjectPage"
                  component={MyReservationProjectPage}
                  hideNavBar={true}
                  title=""
                />

                <Scene
                  key="MyUnitPage"
                  component={MyUnitPage}
                  hideNavBar={true}
                  title=""
                />

                <Scene
                  key="SimulasiPage"
                  component={Calcu}
                  hideNavBar={true}
                  title=""
                />

                <Scene
                  key="NewsPage"
                  component={NewsPage}
                  hideNavBar={true}
                  title=""
                />
          </Scene>
        </Router>
      );
    }
    
  }

}

export default Routes;

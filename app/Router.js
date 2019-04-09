import React, { Component } from "react";
import { SafeAreaView } from "react-native";
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
import ChouseUnit from "./Categoris/ChouseUnit";
import UnitInfo from "./Categoris/UnitInfo";
import UnitEnquiry from "./Categoris/UnitEnquiry";

const TabIcon = ({ focused, iconName }) => {
  var color = focused ? "#1abc9c" : "#7f8c8d";
  return (
    <Icon name={iconName} color={color} size={24} style={{ marginTop: 8 }} />
  );
};

const Routes = () => {
  return (
    <Router>
      <Scene key="root" headerLayoutPreset="center">
        <Scene key="Login" component={Login} hideNavBar={true} title="" />
        <Scene key="tabbar" hideNavBar translucent={true} tabs={true}>
          <Scene
            key="home"
            component={Home}
            navTransparent={true}
            hideNavBar={true}
            title=""
            tabBarLabel="Home"
            iconName="home"
            icon={TabIcon}
          />
          <Scene
            key="search"
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
            component={Calcu}
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
            
      </Scene>
    </Router>
  );
};

export default Routes;

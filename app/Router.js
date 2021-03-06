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
import Signup from './Signup/Signup';
import Reset from './ResetPass/Reset';
import Search from "./Find/Search";
import Calcu from "./Calcu/Calcu";
import Notif from "./Notif/Notif";
import Akun from "./Akun/Akun";
import AkunHome from "./Akun/AkunHome";
import PDFViewer from "./components/PDFViewer/index";

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

//Billing
import MyBillingPage from "./MyBilling/myBilling";

//Profile
import Profile from "./Profile";

//Feed 
import Feed from './Feed/Feed';

//News And Promo 
import NewsPage from './NewsAndPromo/news';

//Booking
import BookingPage from './Booking/Booking';

//Project
import Project from './Project/Search';

//Download
import DownloadPage from './Download/Download';

//Download
import NewsAndPromoDetail from './NewsAndPromo/NewsAndPromoDetail';

//Report
import ReportPage from './Reports/Reports';

//Report New
import ReportNew from './ReportNew/ReportNew';

//Comission
import Comission from './Comission/Comission';

// NUP
import NUPPage from './NUP/NUP';

import Dashboard from './Reports/Dashboard';

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
                key="Feed"
                component={Feed}
                navTransparent={true}
                hideNavBar={true}
                title=""
                tabBarLabel="Feed"
                iconName="newspaper-o"
                icon={TabIcon}
              />
              <Scene
                key="notif"
                component={Notif}
                navTransparent={true}
                hideNavBar={true}
                title=""
                tabBarLabel="Notification"
                iconName="bell"
                icon={TabIcon}
              />
              <Scene
                key="akun"
                component={AkunHome}
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
                  key="ProductProjectPage"
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
                  key="UnitEnquiryProjectPage"
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

                <Scene
                  key="BookingPage"
                  component={BookingPage}
                  hideNavBar={true}
                  title=""
                />

                <Scene
                  key="project"
                  component={Project}
                  hideNavBar={true}
                  title=""
                />

                <Scene
                  key="TWPBillProjectPage"
                  component={MyBillingPage}
                  hideNavBar={true}
                  title=""
                />

                <Scene
                  key="ProjectDownloadPage"
                  component={DownloadPage}
                  hideNavBar={true}
                  title=""
                />
                {/* //!! Sementara diubah Dulu */}
                <Scene
                  key="ReportProject"
                  component={ReportNew}
                  hideNavBar={true}
                  title=""
                />
                <Scene
                  key="Dashboard"
                  component={Dashboard}
                  hideNavBar={false}
                  title=""
                />
                <Scene
                  key="NewsAndPromoDetail"
                  component={NewsAndPromoDetail}
                  hideNavBar={true}
                  title=""
                />

                {/*//! Sementara diubah  */}
                <Scene
                  key="ReportNew"
                  component={ReportPage}
                  hideNavBar={true}
                  title=""
                />
                <Scene
                  key="ComissionPage"
                  component={Comission}
                  hideNavBar={true}
                  title=""
                />
                <Scene
                  key="NUPPage"
                  component={NUPPage}
                  hideNavBar={true}
                  title=""
                />
                <Scene
                  key="Signup"
                  component={Signup}
                  hideNavBar={true}
                  title=""
                />
                <Scene
                  key="ResetPass"
                  component={Reset}
                  hideNavBar={true}
                  title=""
                />
                <Scene
                  key="PDFViewer"
                  component={PDFViewer}
                  hideNavBar={true}
                  title=""
                />
                <Scene
                  key="menu"
                  component={Akun}
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

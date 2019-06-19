/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project 
import { Text, View, Image, StatusBar, Platform, ActivityIndicator, ImageBackground ,TouchableOpacity, BackHandler,I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Left, Body, Title} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from '../Intro/styles';
import { Actions } from 'react-native-router-flux'
import {_storeData,_getData} from '@Component/StoreAsync';
import DeviceInfo from 'react-native-device-info';
import {urlApi} from '@Config/services';

let isMount = false;

//import AppIntroSlider to use it
export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: true,//To show the main page of the app
      isLoaded : true,

      email : '',
      password : ''
    };
  }
  componentWillMount() {
    isMount = true
  }

  async componentDidMount(){
    const isIntro = await _getData('@isIntro')
    // if(isMount){
    //   BackHandler.addEventListener('hardwareBackPress', function() {
    //     Actions.home()
    //     return true;
    //   })
    // }
    this.setState({showRealApp : isIntro})

  }

  componentWillUnmount(){
    isMount = false
    // BackHandler.removeEventListener('hardwareBackPress')
  }

  clickHome() {
    Actions.tabbar()
    this.setState({click:true})
  }

  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true },()=>{
      _storeData('@isIntro',true);
    });
  }

  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true },()=>{
      _storeData('@isIntro',true);
    });
  }

  btnLoginClick = async () => {
    const mac = await DeviceInfo.getMACAddress().then(mac => {return mac});
    const formData = {
      email : this.state.email,
      password : this.state.password,
      token : '',
      token_firebase : "",
      device : Platform.OS,
      mac : mac
    }
    console.log('formData',formData)
    var lengthPass = this.state.password.length;
    if(lengthPass < 4 ){
      // this.setState({isCorrect:false,titleButtonAlert:"Try Again"});
      alert('Wrong password !!!')
    }else{
      this.doLogin(formData);
    }
  }

  doLogin (value) {
    this.setState({isLoaded: !this.state.isLoaded});
    data = JSON.stringify(value);

    fetch(urlApi+'c_auth/Login',{
        method:'POST',
        headers : {
            'Accept':'application/json',
            'Content-Type' : 'application/json',
        },
        body : data
    }).then((response) => response.json())
    .then((res)=>{
        if(!res.Error){
            this.getTower(res)
        } else {
            this.setState({isLoaded: !this.state.isLoaded},()=>{
                alert(res.Pesan)
            });
        }
        console.log('Login Result',res);
    }).catch((error) => {
        console.log(error);
        this.setState({isLoaded: !this.state.isLoaded},()=>{
          alert(error)
      });
    });
  }

  getTower = (res) => {
    let result = res.Data
    const email = this.state.email;
    fetch(urlApi+'c_product_info/getData/IFCAMOBILE/' +email ,{
        method : "GET",
    })
    .then((response) => response.json())
    .then((res)=>{
      console.log('res',res);
        if(res.Error === false){
            let resData = res.Data
            let data = []
            resData.map((item)=>{
              let items = {...item,illustration : item.picture_url,title :item.project_descs,subtitle:item.db_profile+item.project_no}
              data.push(items)
            })

            result['UserProject'] = data
            this.signIn(result)
        }
    }).catch((error) => {
        console.log(error);
    });
  }

  signIn = async(res) =>{
    console.log('res',res);
    try {
        _storeData('@DashMenu', res.DashMenu);
        _storeData('@UserId', res.UserId);
        _storeData('@Name', res.name);
        _storeData('@Token', res.Token);
        _storeData('@User', res.user);
        _storeData('@Group', res.Group);
        _storeData('@Handphone',res.handphone);
        _storeData("@isLogin",true);
        _storeData("@isReset",res.isResetPass);
        _storeData("@AgentCd",res.AgentCd);
        _storeData("@Debtor",res.Debtor_acct);
        _storeData('@rowID', res.rowID);
        _storeData('@RefreshProfile', false);
        _storeData('@UserProject', res.UserProject);
        
    } catch(err){
        console.log('error:', err)
    } finally{
      this.setState({isLoaded : true},()=>{
        Actions.reset('tabbar')
      })
    }
  }

  

  render() {
    // let BG_Image = { uri : 'https://antiqueruby.aliansoftware.net/Images/signin/ic_main_bg_stwo.png'};
		StatusBar.setBarStyle('light-content', true);

    if(Platform.OS === 'android') {
     StatusBar.setBackgroundColor('transparent',true);
     StatusBar.setTranslucent(true);
   	}
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <Container>
				<ImageBackground style={styles.backgroundImage}>
					<Header style={styles.header}>
						<Left style={styles.left}>
						</Left>
						<Body style={styles.body}>
						</Body>
						<Right style={styles.right}>
            <TouchableOpacity style={styles.textRight} onPress={()=>this.props.navigation.navigate('Guest')}>
              <Text style={styles.textTitle} onPress={() =>this.clickHome()} >Skip Login</Text>
							</TouchableOpacity>
           </Right>
					</Header>
					<View style={styles.inputFieldStyles}>
          <Image  style={styles.images} source={ require("../Images/logo.png")}/>

						<View style={styles.containEmail}>
							<Input
								ref='email'
								style={styles.inputEmail}
                editable={true}
                onChangeText={(val)=>this.setState({email:val})}
								keyboardType='email-address'
								returnKeyType='next'
								autoCapitalize='none'
								autoCorrect={false}
								underlineColorAndroid='transparent'
								textAlign={I18nManager.isRTL ? 'right' : 'left'}
								placeholder='Email'
								placeholderTextColor="rgba(0,0,0,0.20)" />
						</View>
						<View style={styles.divider}/>
						<View style={styles.containPassword}>
							<Input
								ref='password'
								style={styles.inputEmail}
								editable={true}
                onChangeText={(val)=>this.setState({password:val})}
								keyboardType='default'
								returnKeyType='next'
								autoCapitalize='none'
								autoCorrect={false}
								underlineColorAndroid='transparent'
								textAlign={I18nManager.isRTL ? 'right' : 'left'}
								placeholder='Password'
								placeholderTextColor="rgba(0,0,0,0.20)"
								secureTextEntry={true}/>
						</View>
					</View>
					<View style={styles.signbtnSec} pointerEvents={this.state.isLoaded ? 'auto' : 'none'}>
						<Button style={styles.signInBtn} onPress={() => this.btnLoginClick()}>
              {!this.state.isLoaded ? <ActivityIndicator color="#fff" /> :
            <Text style={styles.signInBtnText}>Sign In</Text>}
						</Button>
					</View>
					<Text style={styles.forgotPassword} onPress={() => alert("Forgot Password")}>Forgot your password?</Text>
					<View style={styles.socialSec}>
						<TouchableOpacity onPress={() => alert("FaceBook")}>
							<Text style={styles.fbButtonText}>New here? Register now</Text>
</TouchableOpacity>
					</View>
				</ImageBackground>
      </Container>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}

const slides = [
  {
    key: 's1',
    text: 'Temukan info dan update project yang dikembangkan oleh Ifca S+',
    title: 'Dapatkan Info Project',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
      uri:
        'http://aboutreact.com/wp-content/uploads/2018/08/mobile_recharge.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Lihat Tipe Unit',
    titleStyle: styles.title,
    text: 'Dapatkan detail info mengenai unit yang dipasarkan saat ini',
    image: {
      uri:
        'http://aboutreact.com/wp-content/uploads/2018/08/flight_ticket_booking.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Kemudahan NUP',
    titleStyle: styles.title,
    text: 'Pembelian dan pembayaran NUP ( Nomor Urut Pembeli ) lebih praktis via online',
    image: {
      uri: 'http://aboutreact.com/wp-content/uploads/2018/08/discount1.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Ilustrasi Cicilan',
    titleStyle: styles.title,
    text: 'Pilih tipe pembayaran unit dengan suku bunga terupdate',
    image: {
      uri: 'http://aboutreact.com/wp-content/uploads/2018/08/best_deals1.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Cek Realtime Unit',
    titleStyle: styles.title,
    text: 'Cek status available langsung dari handphone Anda dan spesifikasi tipe unit, view dan lain-lain',
    image: {
      uri:
        'http://aboutreact.com/wp-content/uploads/2018/08/bus_ticket_booking.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'About Ifca S+',
    titleStyle: styles.title,
    text: 'Ifca S+ merupakan platform property pertama yang terintegrasi dengan berbagai macam Perusahaan Properti atau Agen Property',
    image: {
      uri:
        'http://aboutreact.com/wp-content/uploads/2018/08/train_ticket_booking.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
];
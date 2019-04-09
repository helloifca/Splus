import React from "react";
import {
  StatusBar,
  WebView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  Platform,
  SafeAreaView,
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
  View,
  FooterTab,
  Badge,
  List,
  ListItem,
  Tab,
  Tabs,
  Fab,
  Form,
  Label
} from "native-base";
import { Actions } from "react-native-router-flux";

import GALLERY from "./Gallery";
import AMENITIES from "./Amenities";
import SIMILAR from "./Similar";

import { Style, Colors } from "../Themes/";
import Styles from "./Style";




//const {width, height} = Dimensions.get('window')
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          active: 'true',
          isVisible: false,
        };
      }
      
  componentDidMount() {
    Actions.refresh({ backTitle: () => this.props.title });
  }

  clickCategoris() {
    Actions.categoris();
    this.setState({ click : true})
}
clickSearch() {
  Actions.search();
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
              onPress={Actions.search}
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
              {"YUKATA SUITES".toUpperCase()}
            </Text>
          </View>
          <View style={Style.actionBarRight}>
            <Button
              transparent
              style={Style.actionBtnRight}
              onPress={Actions.pop}
            >
              <Icon
                active
                name="search"
                style={Style.actionIcon}
                type="FontAwesome"
              />
            </Button>
          </View>
        </Header>

        <StatusBar
          backgroundColor="rgba(0,0,0,0)"
          animated
          barStyle="dark-content"
        />

        <Content
          style={Style.layoutInner}
          contentContainerStyle={Style.layoutContent}
        >
          <ImageBackground
            source={{
              uri:
                "http://139.255.61.85/WaskitaWeb/img/PlProject/Logo_Yukata.png"
            }}
            imageStyle={"cover"}
            style={Styles.coverImg}
          >
          <Fab
            active={this.state.active}
            direction="down"
            containerStyle={{ marginLeft:8}}
            style={{ backgroundColor: '#DAD299', width:32, height: 32 }}
            position="topRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#DAD299',  width:32, height: 32,  marginLeft:4  }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#DAD299',  width:32, height: 32,  marginLeft:4  }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button style={{ backgroundColor: '#DAD299' ,  width:32, height: 32,  marginLeft:4 }}>
              <Icon name="mail" />
            </Button>
          </Fab>
          </ImageBackground>

          {/* <View style={Styles.section}>
                    <Text style={Styles.price}>$2,850,000</Text>
                    <View style={Styles.locationTop}>
                        <Icon active name='map-marker-radius' style={Styles.locationTopIcon} type="MaterialCommunityIcons" />
                        <Text style={Styles.locationTopInfo}>Bristol, England</Text>
                    </View>
                </View> */}

          <View style={Styles.count}>
           <ScrollView horizontal={true}>
            <View style={[Styles.countItem, Styles.countFirst]}>
              <TouchableOpacity onPress={() => this.clickCategoris()}>
                <View style={Styles.countCol}>
                  <Image
                    source={require("@Asset/images/type.png")}
                    style={{ width: 34, height: 34 }}
                  />
                  <View style={{ marginLeft: 8 }}>
                    <Text style={Styles.countNo}>5</Text>
                    <Text style={Styles.countText}>Category</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.countItem}>
              <TouchableOpacity>
                <View style={Styles.countCol}>
                  <Image
                    source={require("@Asset/images/booking.png")}
                    style={{ width: 40, height: 36 }}
                  />
                  <View style={{ marginLeft: 8 }}>
                    <Text style={Styles.countNo} />
                    <Text style={Styles.countText}>Booking Now</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={Styles.countItem}>
              <TouchableOpacity>
                <View style={Styles.countCol}>
                  <Image
                    source={require("@Asset/images/brosur.png")}
                    style={{ width: 34, height: 34 }}
                  />
                  <View style={{ marginLeft: 8 }}>
                    <Text style={Styles.countNo} />
                    <Text style={Styles.countText}>Brosur</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            </ScrollView>
          </View>

          <ImageBackground
            source={require("@Asset/images/shadow.png")}
            imageStyle={"cover"}
            style={Styles.shadow}
          />

          <View style={Styles.overview}>
            <Text style={Styles.overviewTitle}>Overview</Text>
            <Text style={Styles.overviewDesc}>
              Yukata Suites adalah bangunan apartemen bertingkat 32 yang berada
              di area seluas 5000 meter persegi dengan nilai investasi tinggi
              dan mengusung konsep ketepatan, kemewahan dalam keheningan, dan
              arsitektur yang membawa ketenangan.
              {"\n\n"}Yukata berasal dari bahasa Jepang yang berarti pakaian
              tradisional Jepang. Orang Jepang memakai Yukata saat mereka pergi
              ke Onsen untuk berisirahat dari rutinitas sehari-hari dan
              menemukan ketenangan.
              {"\n\n"}Kehidupan di kota besar yang hiruk-pikuk membuat Yukata
              Suites menjadi tempat tinggal yang sempurna bagi mereka yang
              mendambakan ketenangan dan privasi.
            </Text>
          </View>
          <Tabs tabBarUnderlineStyle={Styles.tabBorder}>
            <Tab
              tabStyle={Styles.tabGrey}
              textStyle={Styles.tabTextActive}
              activeTabStyle={Styles.tabGrey}
              activeTextStyle={Styles.tabTextActive}
              heading="Informations"
            >
              <List style={Styles.infoTab}>
                <View style={Styles.overview}>
                  <Text style={Styles.overviewTitle}>Feature</Text>
                  <Text style={Styles.overviewDesc}>
                    Yukata Suites, apartmen yang Disajikan fasilitas bernuansa
                    Jepang dan di lengkapi dengan Private Lift, Yukata Suites
                    didesign dengan konsep Japanese Resort yang menghubungkan 5
                    elemen alam seperti Tanah, Air, Angin, Kayu, dan Logam.
                    sehingga setiap penghuni dapat merasakan 'Therapy' dengan
                    pengalaman 4 dimensi. anda dapat bermeditasi di Zen Garden,
                    mengenakan pakaian 'Yukata' dan 'Bakiak' saat menuju ke ke
                    pamdian air panas Jepang (Osen) di lantai fasilitas.
                    {"\n\n"}Fasilitas : Olympic Size Swimming Pool Exclusive
                    Function Room Lounge BBQ Pavilions Playground Kids Pool
                    Library GYM Private Lift Karaoke Room Indoor Onsen Outdoor
                    Onsen Reading Area Contemplation Garden Zen Garden "Mizu"
                    Units Outdoor Area
                  </Text>
                </View>
              </List>
            </Tab>
            <Tab
              tabStyle={Styles.tabGrey}
              textStyle={Styles.tabText}
              activeTabStyle={Styles.tabGrey}
              activeTextStyle={Styles.tabText}
              heading="Gallery"
            >
              <List style={Styles.infoTab}>
                <View style={Styles.overview}>
                  <Text style={Styles.overviewTitle}>Photo Gallery</Text>
                  <FlatList
                    data={GALLERY}
                    horizontal
                    style={Styles.slider}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, separators }) => (
                      <TouchableOpacity
                        underlayColor="transparent"
                        onPress={() => {
                          NavigationService.navigate("StudentActivities");
                        }}
                      >
                        <View>
                          <Image
                            source={{ uri: item.image }}
                            style={Styles.sliderImg}
                          />
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                </View>
                <View style={Styles.amenities}>
                  <Text style={Styles.amenityTitle}>Facilities</Text>
                  <View>
                    <FlatList
                      data={AMENITIES}
                      horizontal
                      renderItem={({ item, separators }) => (
                        <View style={Styles.amenity}>
                          <Image
                            source={item.icon}
                            style={Styles.amenityIcon}
                          />
                          <Text style={Styles.amenityItem}>{item.amenity}</Text>
                        </View>
                      )}
                    />
                  </View>
                </View>
              </List>
            </Tab>
            <Tab
              tabStyle={Styles.tabGrey}
              textStyle={Styles.tabText}
              activeTabStyle={Styles.tabGrey}
              activeTextStyle={Styles.tabText}
              heading="Simulasi KPA/R"
            >
              <List style={Styles.infoTab}>
                <View style={Styles.overview}>
                  <Text style={Styles.overviewTitle}>Simulasi Perhitungan KPA/R</Text>
               
                  <TextInput
                    style={Styles.textInput}
                    placeholder={"Total Credit ( IDR )"}
                    keyboardType="numeric"
                  />
                  <View style={Styles.col}>
                    <TextInput
                      style={Styles.textInputHalf}
                      placeholder={"Bunga (%)"}
                      keyboardType="numeric"


                    />
                    <TextInput
                      style={Styles.textInputHalf}
                      placeholder={"Time (years)"}
                      keyboardType="numeric"

                    />
                  </View>
                  <Button
                    style={Styles.btn}
                  >
                    <Text style={Styles.formBtnText}>
                      {"Hitung".toUpperCase()}
                    </Text>
                    <Icon
                      active
                      name="calculator"
                      type="FontAwesome"
                      style={Styles.formBtnIcon}
                    />
                  </Button>
                  </View>
                  <View style={Styles.overview}>

                  <Text style={Styles.countText}>
                  * Angka di atas merupakan angka estimasi, untuk lebih akuratnya mohon hubungi bank terkait.
                  </Text>
                  </View>

                  </List>
            </Tab>
          </Tabs>

          <View style={Styles.sectionGrey}>
            <View style={Styles.headerBg}>
              <Text style={Styles.sHeader}>
                {"News & Promo".toUpperCase()}
              </Text>
              <Right>
                <Button
                  small
                  rounded
                  style={Styles.sBtn}
                  onPress={() => {
                    NavigationService.navigate("PublicProperties");
                  }}
                >
                  <Text style={Styles.sLink}>See All</Text>
                </Button>
              </Right>
            </View>
            <FlatList
              data={SIMILAR}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={Styles.flatList}
              renderItem={({ item, separators }) => (
                <TouchableOpacity
                  style={Styles.item}
                  underlayColor="transparent"
                  
                >
                  <View>
                    <View>
                      <Image
                        source={{ uri: item.image }}
                        style={Styles.itemImg}
                      />
                    </View>
                    <Text style={Styles.itemPrice}>{item.title}</Text>
                    <Text style={Styles.itemLocation}>{item.subtitle}</Text>
                    {/* <View style={Styles.itemRow}>
                      <View style={Styles.itemOverview}>
                        <Icon
                          name="bed"
                          type="FontAwesome"
                          style={Styles.itemIcon}
                        />
                        <Text style={Styles.itemNo}>{item.bedroom}</Text>
                      </View>
                      <View style={Styles.itemOverview}>
                        <Icon
                          name="bathtub"
                          type="FontAwesome"
                          style={Styles.itemIcon}
                        />
                        <Text style={Styles.itemNo}>{item.bathroom}</Text>
                      </View>
                    </View> */}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
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
        </Content>
        <Button full style={{ backgroundColor: "#fb5f26" }}  onPress={() => {
            this.setState({ isVisible: true });
        }}>
          <Text>I'm Interested</Text>
        </Button>
      </Container>
    );
  }
}

import React, { Component } from "react";
import {
  Platform,
  View,
  ScrollView,
  StatusBar,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { sliderWidth, itemWidth } from "./styles/SliderEntry";
import SliderEntry from "../components/SlideEntry";
import styles, { colors } from "./styles/index";
import { ENTRIES1, ENTRIES2 } from "./static/entries";
import { scrollInterpolators, animatedStyles } from "./utils/animations";
import CardSlide from "../components/CardSlide";

const { height, width } = Dimensions.get('window')

const IS_ANDROID = Platform.OS === "android";
const SLIDER_1_FIRST_ITEM = 1;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  componentWillMount() {
    this.startHeaderHeight = 80
    if (Platform.OS == 'android') {
        this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
}

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({ item, index }) {
    return <SliderEntry data={item} even={false} />;
  }

  _renderDarkItem({ item, index }) {
    return <SliderEntry data={item} even={true} />;
  }

  mainExample(number, title) {
    const { slider1ActiveSlide } = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>{`Hey Guest`}</Text>
        <Text style={styles.subtitle}>{`Welcome to Ifca S+`}</Text>
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
            flex: 1,
            paddingRight: 16,
            marginTop: -32
          }}
        >
          <TouchableOpacity style={styles.InBtn}>
            <Text style={styles.InBtnText}>All Project</Text>
          </TouchableOpacity>
        </View>

        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
        />
        
      </View>
    );
  }

  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 0, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render() {
    const example1 = this.mainExample(1, "");
    // const example2 = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');
    // const example3 = this.layoutExample(3, '"Stack of cards" layout | Loop', 'stack');
    // const example4 = this.layoutExample(4, '"Tinder-like" layout | Loop', 'tinder');
    // const example5 = this.customExample(5, 'Custom animation 1', 1, this._renderItem);
    // const example6 = this.customExample(6, 'Custom animation 2', 2, this._renderLightItem);
    // const example7 = this.customExample(7, 'Custom animation 3', 3, this._renderDarkItem);
    // const example8 = this.customExample(8, 'Custom animation 4', 4, this._renderLightItem);

    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={"rgba(0, 0, 0, 0.3)"}
          barStyle={"light-content"}
        />
        {this.gradient}
        <ScrollView
          style={styles.scrollview}
          scrollEventThrottle={200}
          directionalLockEnabled={true}
        >
          {example1}
          <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', paddingHorizontal: 20 }}>
                                Hot Promo
                            </Text>

                            <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <CardSlide imageUri={require('../Images/home.jpg')}
                                        name="Home"
                                    />
                                    <CardSlide imageUri={require('../Images/experiences.jpg')}
                                        name="Experiences"
                                    />
                                    <CardSlide imageUri={require('../Images/restaurant.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20, paddingBottom: 16 }}>
                                <Text style={{ fontSize: 18, fontWeight: '500' }}>
                                    Introducing Ifca SPlus
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    A new selection of homes verified for quality & comfort

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../Images/home.jpg')}
                                    />

                                </View>
                            </View>
                        </View>
                    </ScrollView>          
        </ScrollView>
      </View>
    );
  }
}

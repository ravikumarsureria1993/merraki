import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  AppState,
  StatusBar,
  SafeAreaView
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Colors } from '../../utils/Colors';
import RouteString from '../../navigation/RouteString';
import ImagePath from '../../assests/ImagePath';
const { WIDTH, HEIGHT } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const slides = [
  {
    key: 1,
    title: `Welcome to`,
    text: 'Expense Tracker',
    textone: `Effortlessly manage your \nbe expenses and stay organized.`,
    image: ImagePath.ONBOARDING_ICON,
  },
  {
    key: 2,
    title: `Capture`,
    text: 'Receipts Easily',
    textone: ' Simply take photos of your \n bills and invoices.',
    image: ImagePath.ONBOARDING_ICON,
  },
  {
    key: 3,
    title: `Stay`,
    text: 'in Control',
    textone: ' Get an overview of your\n expenses at a glance.',//  
    image: ImagePath.ONBOARDING_ICON,
  },
];

export default class OnBoardingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastSlide: false,
    };
  }

  onSkipPress() {
    this.props.navigation.navigate(RouteString.SIGNUP_SCREEN);
  }
  onContinuePress() {
    this.props.navigation.navigate(RouteString.SIGNUP_SCREEN);
  }
  _renderPagination = (activeIndex) => {
    return (
      <View style={Style.paginationContainer}>
        <View style={Style.paginationDots}>
          {slides.length > 1 &&
            slides.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  Style.dot,
                  i === activeIndex
                    ? { backgroundColor: Colors.buttonColor }
                    : { backgroundColor: Colors.grey },
                ]}
              // onPress={() => this.slider?.goToSlide(i, true)}
              />
            ))}
        </View>
        <View style={{ marginVertical: 24, flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
          {activeIndex == 0 || activeIndex == 1 ?
            <TouchableOpacity onPress={() => this.onSkipPress()}
              style={[Style.shadowColor, { alignSelf: 'center', paddingHorizontal: 20, borderRadius: 20, paddingVertical: 5, }]}>
              <Text style={[Style.loginSignUpText, {}]}>Skip</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => this.onContinuePress()}>
              <AntDesign name="rightcircle" color={Colors.buttonColor} size={35} />
            </TouchableOpacity>

          }
        </View>
      </View>
    );
  };

  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", paddingHorizontal: 20 }}>
        <View style={{ width: '100%', alignSelf: 'center', flex: 0.7 }}>
          <Image source={item.image} resizeMode="contain" style={Style.image} />
        </View>
        <View style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'flex-start', alignSelf: "flex-start" }}>
          <View style={{}}>
            <Text style={Style.titleStyle}>{item.title}</Text>
            <Text style={Style.titleStyle}>{item.text}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }}>
            <Text style={Style.textone} numberOfLines={3}>{item.textone}</Text>
          </View>
        </View>
      </View>
    );
  };

  slideChange = (index, lastIndex) => {
    if (index == 2 && lastIndex == 2) {
      this.setState({ lastSlide: true });
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.WhiteColor }}>
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          showNextButton={false}
          showDoneButton={false}
          onSlideChange={this.slideChange}
          renderPagination={this._renderPagination}
        />
      </SafeAreaView>
    );
  }
}

const width = Dimensions.get('window').width;

const Style = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
  },
  loginSignUpText: {
    color: Colors.blackColor,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: "400"
  },
  titleStyle: {
    fontSize: 20,
    color: Colors.blackColor,
    fontWeight: "500"
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textone: {
    fontSize: 15,
    color: "#a5a5a5",
    lineHeight: 24,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  shadowColor: {
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    elevation: 10,
    backgroundColor: Colors.WhiteColor
  },
})
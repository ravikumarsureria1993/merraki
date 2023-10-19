import React, { useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import Styles from '../../utils/Style'
import ImagePath from '../../assests/ImagePath'
import TextinputComp from '../../componets/TextinputComp'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { Colors } from '../../utils/Colors'
import ButtonComp from '../../componets/Button'
import RouteString from '../../navigation/RouteString'

const LoginScreen = (props) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onBackPress = () => {
    props.navigation.navigate(RouteString.SIGNUP_SCREEN);
  }
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={{ flex: 0.3 }}>
        <ImageBackground resizeMode='stretch' source={ImagePath.HEADER_ICON} style={{ height: "90%", width: "80%", }}>
          <View style={{ padding: 20 }}>
            <TouchableOpacity onPress={() => onBackPress()}>
              <Ionicons name='chevron-back' size={20} color={Colors.WhiteColor} />
            </TouchableOpacity>
            <Text style={Styles.headerTitle} numberOfLines={2}>Welcome{'\n'}Back</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground resizeMode='stretch' source={ImagePath.HEADER3_ICON} style={Styles.loginBgStyle}>
          <View style={Styles.inputView}>
            <TextinputComp
              placeholder={'Type here...'}
              title='Email'
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <TextinputComp
              placeholder={'Type here...'}
              title='Password'
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <ButtonComp
              text={"Log in"}
              buttonStyle={{ marginBottom: 20 }}
              onPress={() => props.navigation.navigate(RouteString.TABNAVIGATOR_SCREEN)}
            />
            <TouchableOpacity style={{ alignSelf: 'center' }}>
              <Text style={{ marginHorizontal: 5, color: Colors.WhiteColor, fontSize: 20 }}>Forget Password</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;
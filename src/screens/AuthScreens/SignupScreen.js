import React, { useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, TouchableOpacity, Image, ScrollView,  } from 'react-native'
import Styles from '../../utils/Style'
import ImagePath from '../../assests/ImagePath'
import TextinputComp from '../../componets/TextinputComp'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { Colors } from '../../utils/Colors'
import ButtonComp from '../../componets/Button'
import RouteString from '../../navigation/RouteString'

const SignupScreen = (props) => {
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={{ flex: 0.3 }}>
        <ImageBackground resizeMode='stretch' source={ImagePath.HEADER_ICON} style={{ height: "90%", width: "80%", }}>
          <View style={{ padding: 20 }}>
            <Ionicons name='chevron-back' size={20} color={Colors.WhiteColor} />
            <Text style={Styles.headerTitle} numberOfLines={2}>Create{'\n'}Account</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 0.7 }}>
        <ImageBackground resizeMode='stretch' source={ImagePath.HEADERBG_ICON} style={{ height: "100%", width: "100%" }}>
          <ScrollView>
            <View style={{ width: "90%", alignSelf: 'center', marginTop: 60, marginBottom: 10, flex: 1 }}>
              <TextinputComp
                placeholder={'Type here...'}
                title='Full Name'
                value={fullName}
                onChangeText={(value) => setFullName(value)}
              />
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
                text={"Sign up"}
                buttonStyle={{ marginBottom: 20 }}
                onPress={() => props.navigation.navigate(RouteString.LOGIN_SCREEN)}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                <View style={Styles.orLine} />
                <Text style={Styles.orTextStyle}>or</Text>
                <View style={Styles.orLine} />
              </View>
              <View style={Styles.fDAlignSelf}>
                <Image source={ImagePath.FACEBOOK_ICON} style={Styles.socialIcon} />
                <Image source={ImagePath.GOOGLE_ICON} style={Styles.socialIcon} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={Styles.orTextStyle}>Already have an account?</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate(RouteString.LOGIN_SCREEN)}>
                  <Text style={[Styles.orTextStyle, { color: Colors.buttonColor }]}>Log in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>


    </SafeAreaView>
  )
}

export default SignupScreen
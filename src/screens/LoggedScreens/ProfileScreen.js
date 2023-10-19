import React, { useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import Styles from '../../utils/Style'
import ImagePath from '../../assests/ImagePath'
import TextinputComp from '../../componets/TextinputComp'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { Colors } from '../../utils/Colors'
import ButtonComp from '../../componets/Button'
import RouteString from '../../navigation/RouteString'
import TabNavigator from '../../navigation/TabNavigator'


const ProfileScreen=()=>{
    return (
        <SafeAreaView style={{flex: 1}}>
        <View  >
            <Text  style={{      fontSize: 30, marginTop:'100%',color:"#0000ff",alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                Welcome ProfileScreen 
            </Text>
        </View>
        <View>
            <ButtonComp
             text={"Log out"}
             buttonStyle={{ marginBottom: 20 }}
             />
        </View>
        </SafeAreaView>
    )
}
export default ProfileScreen;
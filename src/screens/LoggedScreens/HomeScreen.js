import React from 'react'
import {SafeAreaView, Text,View,backgroundColor} from 'react-native'
import { Colors } from '../../utils/Colors'
import TabNavigator from '../../navigation/TabNavigator'
import Styles from '../../utils/Style'
const HomeScreen=()=>{
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,backgroundColor:"#0000"}} >
            <Text  style={{flex:0.1,fontSize:25,marginTop:'100%',color:"#0000ffff",alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                 Welcome
            </Text>
        </View>
        </SafeAreaView>
    )
}
export default HomeScreen;
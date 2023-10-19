import React from 'react';
import {SafeAreaView,View,Text,stylesheet} from 'react-native';
import Styles from '../../utils/Style';
const ScanScreen=()=>{
    return (
        <SafeAreaView  style={Styles.safeAreaView}>
            <View  style={Styles.inputView}>
            <Text  style={{flex:0.1,fontSize:25,marginTop:'100%',color:"#0000ffff",alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                    Scanner
                </Text>
            </View>
        </SafeAreaView>
    )
}
export default ScanScreen;
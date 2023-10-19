import React from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from './Colors';

const Styles = StyleSheet.create({
   safeAreaView: {
      backgroundColor: Colors.WhiteColor,
      flex: 1,
   },
   loginBgStyle: {
      height: "100%",
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center'
   },
   headerTitle:{ 
      fontSize: 30, 
      color: Colors.WhiteColor,
       marginTop: 10, 
       marginLeft: 20 
      },
   inputView: {
      width: "90%",
      alignSelf: 'center',
      position: "absolute",
      bottom: 50, 
      flex: 1
   },
   orLine: {
      height: 1,
      backgroundColor: Colors.WhiteColor,
      width: 40
   },
   orTextStyle: {
      marginHorizontal: 5,
      top: -2,
      color: Colors.WhiteColor,
      fontSize: 20
   },
   fDAlignSelf: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center'
   },
   socialIcon:{ 
      width: 30, 
      height: 30,
       margin: 20 
      },
});


export default Styles;

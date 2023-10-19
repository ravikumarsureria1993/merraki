import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { Colors } from '../utils/Colors';

export default function ButtonComp({ text, onPress, buttonStyle }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.buttonStyle,{...buttonStyle}]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.WhiteColor,
    fontSize: 15,
    fontWeight:"700",
    textAlign: 'center',
  },
  buttonStyle: {
    borderRadius: 25,
    marginTop:15,
    backgroundColor: Colors.buttonColor,
    padding: 15,
    justifyContent: 'center',
    width: "30%",
    alignSelf: "center"
  }
 
});

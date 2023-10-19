import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Colors } from '../utils/Colors';

export default function TextinputComp({
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  value,
  customStyle = {},
  style = {},
  maxLength = 80,
  onChangeText = () => { },
  onChange = () => { },
  inputRef,
  multiline = false,
  title=''
}) {
  return (
    <View>
      <Text style={{ color:Colors.WhiteColor, fontSize: 14, margin: 10 }}>{title}</Text>
      <View
        style={{
          ...styles.mainView,
          alignItems: 'center',
          ...style,
        }}>
        <TextInput
          ref={inputRef}
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
          placeholderTextColor={"grey"}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          onChange={onChange}
          style={{
            ...styles.inputView,
            color: Colors.WhiteColor,
            ...customStyle,
          }}
          multiline={multiline}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputView: {
    fontSize: 14,
    marginLeft: 12,
    color:'red',
    borderRadius: 10,
    flex: 1,
  },
  mainView: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor:"#1F2E4D",
    height: 46,
    marginBottom: 10,
    overflow: 'hidden',
    paddingHorizontal: 16,
    borderRadius: 25
  },
});

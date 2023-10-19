import React, { useState } from "react";
import {  Dimensions, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from "../utils/Colors";
import RouteString from "./RouteString";
import { ScreenContainer } from "../screens/index";
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.WhiteColor} barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={RouteString.ONBOADING_SCREEN}
        >
          <Stack.Screen name={RouteString.ONBOADING_SCREEN} component={ScreenContainer.OnBoardingScreen} />
          <Stack.Screen name={RouteString.SIGNUP_SCREEN} component={ScreenContainer.SignupScreen} />
          <Stack.Screen name={RouteString.LOGIN_SCREEN} component={ScreenContainer.LoginScreen} />
          <Stack.Screen name={RouteString.TABNAVIGATOR_SCREEN} component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default StackNavigator;

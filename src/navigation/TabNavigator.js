import React, { } from 'react';
import { Image, View, } from 'react-native';
import { Colors } from '../utils/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteString from './RouteString';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenContainer } from "../screens/index";
import ImagePath from '../assests/ImagePath';




const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: Colors.blackColor,
                tabBarInactiveTintColor: Colors.grey,
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                     borderTopRightRadius: 20,
                    height: 60,
                    backgroundColor: Colors.WhiteColor,
                    width: '100%'
                },
            }}
        >
            <Tab.Screen
                name={RouteString.HOME_SCREEN}
                component={ScreenContainer.HomeScreen}
                options={{
                    tabBarIcon: (color) => (
                        <View>
                            <Image source={ImagePath.HOME_TAB} resizeMode='contain'  style={{height:20, width:20, tintColor:color}}/>
                        </View>
                        //<AntDesign name="menu" size={30} color={color} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name={RouteString.HOME_SCREEN}
                component={Screens.HomeScreen}
                options={{
                    tabBarIcon: ({  color }) => (
                        <MaterialIcons name="favorite-border" size={30} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={RouteString.HOME_SCREEN}
                component={Screens.HomeScreen}
                options={{
                    tabBarIcon: ({  color }) => (
                        <FontAwesome6 name="list-check" size={30} color={color} />
                    ),
                }}
            />
            */
                <Tab.Screen
                    name={RouteString.SCAN_SCREEN}
                    component={ScreenContainer.ScanScreen}
                    options={{
                        tabBarIcon: () => (
                            <View>
                                <Image source={ImagePath.SCAN_ICON} resizeMode='contain' style={{height:30, width:30}} />
                            </View>

                            // <Ionicons name="chatbubble-outline" size={30} color={color} />
                        ),
                    }}
                />}
            <Tab.Screen
                name={RouteString.PROFILE_SCREEN}
                component={ScreenContainer.ProfileScreen}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Image source={ImagePath.PROFILE_TAB}  resizeMode='contain' style={{height:20, width:20}} />
                        </View>

                        //  <AntDesign name="user" size={30} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};
export default TabNavigator;






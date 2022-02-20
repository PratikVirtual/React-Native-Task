// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Alert,
    Button,
    SafeAreaView,
    View,
    Dimensions,
    Pressable,
    Image
} from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// import UserCard from './src/user/UserCard';

import TaskScreen from './src/TaskScreen';
import WalletScreen from './src/WalletScreen';
import JobScreen from './src/JobScreen';
import MenuScreen from './src/MenuScreen';
import EmptyScreen from './src/EmptyScreen';
import { color } from 'react-native-reanimated';





const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={EmptyScreen}
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#141515',
                        height: 70,
                    }
                }}>

                <Tab.Screen name={"Wallet"} component={WalletScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                // centring tab button..
                                position: 'absolute',
                                // top: '10%'
                            }}>
                                <AntDesign
                                    name="wallet"
                                    size={30}
                                    color={focused ? '#2DAF95' : 'gray'} />
                            </View>
                        )
                    }}

                ></Tab.Screen>

                <Tab.Screen name={"Task"} component={TaskScreen}
                    options={{

                        headerTintColor: '#C7D6D6',
                        headerTitle: 'My Task',
                        headerStyle: { backgroundColor: '#011A15' },
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                // centring tab button..
                                position: 'absolute',

                            }}>
                                <Feather name="calendar" size={24} color={focused ? '#2DAF95' : 'gray'} />
                            </View>
                        )
                    }}
                ></Tab.Screen>


                <Tab.Screen name={"Home"} component={EmptyScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity>
                            <View style={{
                                width: 80,
                                height: 70,
                                borderRadius: 40,
                                backgroundColor: '#2DAF95',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 40,
                                tintColor: 'white'
                            }}>

                                <AntDesign
                                    name="home"
                                    size={60}
                                    color="black"
                                    borderRadius='20'

                                />

                            </View>
                        </TouchableOpacity>
                    )
                }}
                ></Tab.Screen>


                <Tab.Screen name={"Job"} component={JobScreen}
                    options={{

                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                // centring tab button..
                                position: 'absolute',
                                // top: '10%'
                            }}>
                                <Feather name="home" size={24} color={focused ? '#2DAF95' : 'gray'} />
                            </View>
                        )
                    }}></Tab.Screen>

                <Tab.Screen name={"Menu"} component={MenuScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{
                                // centring tab button..
                                position: 'absolute',
                                // top: '10%'
                            }}>
                                <Ionicons name="menu-outline" size={24} color={focused ? '#2DAF95' : 'gray'} />
                            </View>
                        )
                    }}></Tab.Screen>


            </Tab.Navigator>
        </NavigationContainer >
    );
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});








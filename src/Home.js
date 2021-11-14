import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BoardScreen from './screens/Board';
import ProfileScreen from './screens/Profile';
import ShareScreen from './screens/Share';
import ChateScreen from './screens/Chat';
import { Image } from "react-native"

const Tab = createMaterialBottomTabNavigator();
const Home = () => {
    return (
        <Tab.Navigator
            screenOptions = {({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let inActiveIcon;
                    let activeIcon;
                    if (route.name === '공유') {
                        inActiveIcon = require('../assets/Food1.png')
                        activeIcon = require('../assets/Food1-toggle.png')
                    }
                    else if (route.name === '채팅') {
                        inActiveIcon = require('../assets/Board.png')
                        activeIcon = require('../assets/Board-toggle.png')
                    }
                    else if (route.name === '자유게시판') {
                        inActiveIcon = require('../assets/Board.png')
                        activeIcon = require('../assets/Board-toggle.png')
                    }
                    else if (route.name === '프로필') {
                        inActiveIcon = require('../assets/profile.png')
                        activeIcon = require('../assets/profile-toggle.png')
                    }
                    return <Image source={focused ? activeIcon : inActiveIcon} style={{width:35, height:35}}/>
                },

                initialRouteName:"공유",
                tabBarColor: "white",
                tabBarLabel: false,
                barStyle: { backgroundColor: '#694fad' },
            })}
            shifting={false}
            initialRouteName="공유"
            barStyle= {{ backgroundColor: 'white' }}
            >
            
            <Tab.Screen name="공유" component={ShareScreen} />
            <Tab.Screen name="채팅" component={ChateScreen}/>
            <Tab.Screen name="자유게시판" component={BoardScreen}/>
            <Tab.Screen name="프로필" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
export default Home;
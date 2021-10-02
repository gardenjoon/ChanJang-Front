import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FoodScreen from './src/screens/Food';
import GoodsScreen from './src/screens/Goods';
import BoardScreen from './src/screens/Board';
import ProfileScreen from './src/screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
            screenOptions = {({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let inActiveIcon;
                    let activeIcon;
                    if (route.name === '반찬') {
                        inActiveIcon = require('./assets/Food1.png')
                        activeIcon = require('./assets/Food1-toggle.png')
                    }
                    else if (route.name === '생활용품') {
                        inActiveIcon = require('./assets/Goods.png')
                        activeIcon = require('./assets/Goods-toggle.png')
                    }
                    else if (route.name === '자유게시판') {
                        inActiveIcon = require('./assets/Board.png')
                        activeIcon = require('./assets/Board-toggle.png')
                    }
                    else if (route.name === '프로필') {
                        inActiveIcon = require('./assets/profile.png')
                        activeIcon = require('./assets/profile-toggle.png')
                    }
                    return <Image source={focused ? activeIcon : inActiveIcon} style={{width:35, height:35}}/>
                },
                initialRouteName:"반찬",
                tabBarColor: "white",
                tabBarLabel: false,
                barStyle: { backgroundColor: '#694fad' }
            })}
            shifting={false}
            initialRouteName="반찬"
            barStyle= {{ backgroundColor: 'white' }}
            >
            
            <Tab.Screen name="반찬" component={FoodScreen} options={{tabBarBadge:3}}/>
            <Tab.Screen name="생활용품" component={GoodsScreen} />
            <Tab.Screen name="자유게시판" component={BoardScreen}/>
            <Tab.Screen name="프로필" component={ProfileScreen} />
        </Tab.Navigator>
        </NavigationContainer>
    );
};
export default App;

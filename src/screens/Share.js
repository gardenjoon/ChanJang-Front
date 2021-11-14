import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FoodScreen from './Food';
import GoodsScreen from './Goods';

const Tab = createMaterialTopTabNavigator();

const ShareScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="음식" component={FoodScreen} />
      <Tab.Screen name="생활용품" component={GoodsScreen} />
    </Tab.Navigator>
  );
}

export default ShareScreen;
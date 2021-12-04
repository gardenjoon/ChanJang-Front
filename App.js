import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Login';
import HomeScreen from './src/Home';
import CreateFoodScreen from './src/screens/CreateFood';
import CreateGoodsScreen from './src/screens/CreateGoods';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: true,
            }}>
                <Stack.Screen name="Login" component={LoginScreen} options={{header: () => null}} />
                <Stack.Screen name="Home" component={HomeScreen} options={{header: () => null}} />
                <Stack.Screen
                    name="CreateFood"
                    component={CreateFoodScreen}
                    options={{
                      title: '반찬 공유 글쓰기',
                      headerStyle: {
                        backgroundColor: 'white',
                      },
                      headerTintColor: 'black',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    }}
                />
                <Stack.Screen
                    name="CreateGoods"
                    component={CreateGoodsScreen}
                    options={{
                      title: '생활용품 공유 글쓰기',
                      headerStyle: {
                        backgroundColor: 'white',
                      },
                      headerTintColor: 'black',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    }}
                />
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}

export default App;

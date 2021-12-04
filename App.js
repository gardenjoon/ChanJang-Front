import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/Login';
import HomeScreen from './src/Home';
import { UserContext } from './src/stores';

const Stack = createStackNavigator();

const App = () => {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false,
                    }}>
                        {!user ? 
                            <Stack.Screen name="Login" component={LoginScreen} /> :
                            <Stack.Screen name="Home" component={HomeScreen} />}
                    </Stack.Navigator>
                </NavigationContainer>
        </UserContext.Provider>
    )
}


export default App;

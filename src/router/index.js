import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Splash, LuasPersegi, LuasSegitiga, LuasLingkaran, Grade} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Lingkaran" component={LuasLingkaran} options={{headerShown: false}} />
      <Stack.Screen name="Segitiga" component={LuasSegitiga} options={{headerShown: false}} />
      <Stack.Screen name="Grade" component={Grade} options={{headerShown: false}} />
      <Stack.Screen name="Persegi" component={LuasPersegi} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}

export default Router

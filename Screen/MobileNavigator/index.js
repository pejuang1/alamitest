import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from '../CartScreen';
import DeviceIdScreen from '../DeviceIdScreen';
import HomeScreen from '../HomeScreen';
import ProgressScreen from '../ProgressScreen';


const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' options={{ headerShown: false }} component={ HomeScreen }></Stack.Screen>
            <Stack.Screen name='CartScreen' options={{ headerShown: false }} component={ CartScreen }></Stack.Screen>
            <Stack.Screen name='DeviceIdScreen' options={{ headerShown: false }} component={ DeviceIdScreen }></Stack.Screen>
            <Stack.Screen name='ProgressScreen' options={{ headerShown: false }} component={ ProgressScreen }></Stack.Screen>
        </Stack.Navigator>
    );
}
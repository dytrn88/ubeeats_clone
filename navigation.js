import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, RestaurantDetail } from './screens';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

function Rootnavigation() {
    const Stack = createNativeStackNavigator();
    const screenOptions = {
        headerShown: false,
    }

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Home'
                    screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    );
}

export default Rootnavigation;
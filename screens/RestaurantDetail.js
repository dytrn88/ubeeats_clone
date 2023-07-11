import React from 'react';
import { Text, View, } from 'react-native';
import { Divider } from 'react-native-elements';
import { About, MenuItems, MenuItems2, Test, ViewCart } from "../components/restaurantdetail"

function RestaurantDetail({ route, navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <About route={route} />
            <Divider width={1.8} style={{ marginVertical: 15 }} />
            <MenuItems
                restaurantName={route.params.name}
            />
            <ViewCart
                navigation={navigation}
                restaurantName={route.params.name} />
        </View>
    );
}

export default RestaurantDetail;
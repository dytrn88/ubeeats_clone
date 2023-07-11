import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
    {
        name: "the Butcher & his Daugther",
        image_url: "https://www.butcherdaughter.ch/wp-content/uploads/2020/08/309_BHD_Top-10_Badenerstrasse_07.jpg",
        categories: ["Restaurants", "Bar"],
        price: "$$",
        reviews: 819,
        rating: 4.3
    },
    {
        name: "YardBird",
        image_url: "https://d1ralsognjng37.cloudfront.net/84dbb09a-dc22-4aad-8207-cf308616fd29.jpeg",
        categories: ["Restaurants", "Bar"],
        price: "$$",
        reviews: 1287,
        rating: 4.5
    },
    {
        name: "Yalda",
        image_url: "https://images.squarespace-cdn.com/content/v1/5b7e7b442714e5e9c3aefe08/1622463803840-089RJ07VGU2KGICE6NIX/Yalda_Orientalisches_Buffet_Restaurant_kalte_Gerichte.jpg",
        categories: ["Restaurants", "Bar"],
        price: "$-$$$",
        reviews: 409,
        rating: 4.2
    },
    {
        name: "Yume Ramen",
        image_url: "https://i0.wp.com/harrysding.ch/wp-content/uploads/2017/02/Yume-Ramen-49.jpg",
        categories: ["Restaurants", "Bar"],
        price: "$-$$$",
        reviews: 1520,
        rating: 4.5
    },
];

const RestaurantImage = (props) => (
    <>
        <Image
            source={{ uri: props.image }}
            style={{
                width: '100%',
                height: 180,
                borderRadius: 20,
            }}
        />
        <TouchableOpacity
            style={{
                position: 'absolute',
                right: 20,
                top: 20,
            }}
        >
            <MaterialCommunityIcons
                name='heart-outline'
                size={25}
                color='#FFFFFF'
            />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
        }}>
        <View>
            <Text
                style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                }}
            >
                {props.name}
            </Text>
            <Text
                style={{
                    fontSize: 13,
                    color: 'gray',

                }}
            >
                30-45 • min
            </Text>
        </View>
        <View
            style={{
                backgroundColor: '#eee',
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
            }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)

function RestaurantItems({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.9}
                    style={{
                        marginBottom: 30,
                    }}
                    onPress={() => navigation.navigate('RestaurantDetail', {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                    })}
                >
                    <View
                        style={{
                            marginTop: 10,
                            padding: 15,
                            backgroundColor: '#fff'
                        }}
                    >
                        <RestaurantImage
                            image={restaurant.image_url}
                        />
                        <RestaurantInfo
                            name={restaurant.name}
                            rating={restaurant.rating}
                        />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
}

export default RestaurantItems;
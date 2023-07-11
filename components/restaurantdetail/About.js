import React from 'react';
import { View, Text, Image } from 'react-native';

const yelpRestaurantInfo = {
    name: 'the Butcher & his Daugher',
    image: 'https://www.butcherdaughter.ch/wp-content/uploads/2020/08/309_BHD_Top-10_Badenerstrasse_02.jpg',
    price: '$$',
    reviews: '827',
    rating: '4.5',
    categories: [{ title: 'American' }, { title: 'Fast Food' }]
};

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{
            width: '100%',
            height: 180
        }}
    />
)
const RestaurantName = (props) => (
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    }}
    >
        {props.name}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text style={{
        fontSize: 15.5,
        fontWeight: '400',
        marginTop: 10,
        marginHorizontal: 15,
    }}
    >
        {props.description}
    </Text>
)

function About(props) {
    const { name, image, price, reviews, rating, categories } = props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" • ")
    const description = `${formattedCategories} ${price ? ' • ' + price : ""} • ${rating} (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}

export default About
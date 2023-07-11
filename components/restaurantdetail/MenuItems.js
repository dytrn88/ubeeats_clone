import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
        type: "starters/",
        title: "ROMANA SALAD",
        description: "Grilled mini romana with avocado slices, fresh apples and wild herbs",
        price: "CHF 8.5",
        image:
            "https://www.butcherdaughter.ch/wp-content/uploads/2020/07/Food_01.jpg"
    },
    {
        type: "starters/",
        title: "BURRATA & TOMATOES",
        description: "Aromatic, grilled tomatoes with creamy burrata, balsamic pearls, basil, virgin olive oil and fleur de sel",
        price: "CHF 12.5",
        image:
            "https://www.butcherdaughter.ch/wp-content/uploads/2020/07/Food_02.jpg"
    },
    {
        type: "mains/",
        title: "BACON & CHEESE BURGER",
        description: "Medium grilled Swiss beef patty, crispy bacon, secret cheesemix, caramelized onions and Butcher's special dip",
        price: "CHF 29.5",
        image:
            "https://www.butcherdaughter.ch/wp-content/uploads/2020/07/Food_10.jpg"
    },
    {
        type: "mains/",
        title: "CRISPY CHICKEN BURGER",
        description: "Swiss chicken, crispy bacon, egg and favourite sauce",
        price: "CHF 28.5",
        image:
            "https://www.butcherdaughter.ch/wp-content/uploads/2020/07/Food_12.jpg"
    },
    {
        type: "sides/",
        title: "GRILLED SEASONAL VEGETABLES",
        description: "Green treat with broccoli, eggplant, mini peppers and chicory, served with olive oil and fleur de sel",
        price: "CHF 8.5",
        image:
            "https://www.butcherdaughter.ch/wp-content/uploads/2020/07/Food_13.jpg"
    },
    {
        type: "Sides/",
        title: "HANDMADE TRUFFLE FRIES",
        description: "Fries with truffle veganaise, parmesan and parsley",
        price: "CHF 8.5",
        image:
            "https://www.butcherdaughter.ch/wp-content/uploads/2020/07/Food_16.jpg"
    },
    {
        type: "desserts/",
        title: "MARSHMALLOWS GRILL  - for 2 people",
        description: "Marshmallows-grill-experience with chocolate, crisps and cookies",
        price: "CHF 15",
        image:
            "https://www.butcherdaughter.ch/wp-content/uploads/2020/07/Food_18-960x960.jpg"
    },
];


const FoodInfo = (props) => (
    <View
        style={{
            width: 240, justifyContent: "space-evenly"
        }}
    >
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.price}</Text>
        <Text style={styles.descriptionStyle}>{props.food.description}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
        />
    </View>
)

function MenuItems({ restaurantName }) {
    const dispatch = useDispatch();
    const selectItem = (item, checkboxValue) =>
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...item,
                restaurantName: restaurantName,
                checkboxValue: checkboxValue,
            },
        });

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items);
    const isFoodInCart = (food, cartItems) =>
        Boolean(cartItems.find((item) => item.title == food.title));
    ;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}                >
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox
                            fillColor='green'
                            iconStyle={{
                                borderColor: 'lightgray',
                                borderRadius: 5,
                            }}
                            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            isChecked={isFoodInCart(food, cartItems)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    <Divider
                        width={0.5}
                        style={{ marginHorizontal: 20 }} />
                </View>
            ))}
        </ScrollView>
    );
}

export default MenuItems;

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },
    typeStyle: {
        fontSize: 10,
        opacity: 0.8,
    },

    titleStyle: {
        fontSize: 14,
        fontWeight: '500',
    },
    descriptionStyle: {
        fontSize: 12,
        opacity: 0.7,
    },

})
import { React, useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import { BottomTabs, Categories, HeaderTabs, RestaurantItems, SearchBar } from '../components/home';
import { localRestaurants } from '../components/home/RestaurantItems';
import { ViewCart } from '../components/restaurantdetail';

const YELP_API_KEY =
    "3eNqNWXE5KmjPvw9gY2EePPguIQ9xhgJge_AFw4cHKNy3N9x0-Um8LhgupaoEC2Vz5dQcEEtJ2HkMgFSOILOi_rpYh8kpf3qskDKAktPceED22C_fTDq-sFz6TFtYnYx";

function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Newyork");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpURL =
            `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            }
        }

        return fetch(yelpURL, apiOptions)
            .then((res) => res.json())
            .then(json => setRestaurantData(
                json.businesses.filter((business) =>
                    business.transactions.includes(activeTab.toLowerCase())
                )
            )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15, }}>
                <HeaderTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems
                    restaurantData={restaurantData}
                    navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
}

export default Home
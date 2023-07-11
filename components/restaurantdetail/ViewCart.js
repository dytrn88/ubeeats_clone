import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

function ViewCart() {
    const [modalVisible, setModalVisible] = useState(false);
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
    const total = items
        .map((item => Number(item.price.replace('CHF', ''))))
        .reduce((prev, curr) => prev + curr, 0);

    const totalCHF = total.toLocaleString('chf', {
        style: "currency",
        currency: "CHF",
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modelCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem
                                key={index}
                                item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text style={styles.subtotalCHF}>{totalCHF}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row', justifyContent: 'center'
                            }}
                        >
                            <TouchableOpacity
                                style={styles.checkoutButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text
                                    style={styles.checkoutText}
                                >Checkout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    };

    console.log(totalCHF);

    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 105,
                        zIndex: 999,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                backgroundColor: 'black',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative',
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                    marginRight: 30,
                                }}
                            >View Cart</Text>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 20,
                                }}
                            >{totalCHF}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>)
            }

        </>
    );
}

export default ViewCart;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    modelCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 500,
        borderWidth: 1,
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10,
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    subtotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10,
    },
    subtotalCHF: {
        fontWeight: '600',
        fontSize: 16,
        marginEnd: 20,
    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: 'relative',
    },
    checkoutText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
})
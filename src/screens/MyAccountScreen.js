// import React from 'react'

// import {View, Text,StyleSheet} from 'react-native'


// export default function MyAccountScreen(){

//     return(
//         <View style ={{flex:1, alignItems:'center',justifyContent:'center'}}>
//             <Text>My Account</Text>
//         </View>
//     )
// }

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const MyAccountScreen = () => {
    // Sample user data
    const userData = {
        name: 'John Doe',
        email: 'john.doe@email.com',
        profileImage: require('../assets/images/avatar-1.jpg'), // Replace with your profile image
    };

    // Sample order history data
    const orderHistory = [
        { id: '1', restaurant: 'The Net Cafe', date: '2023-08-01', total: 25000.99 },
        { id: '2', restaurant: 'Barcardi Jos', date: '2023-07-15', total: 32000.50 },
        { id: '3', restaurant: " Jw's Cuisines", date: '2023-06-20', total: 45000.25 },
        { id: '4', restaurant: 'Tin City Cafe', date: '2023-05-10', total: 18000.75 },
        // Add more order history items here
    ];

    // Calculate the total spent
    const totalSpent = orderHistory.reduce((acc, item) => acc + item.total, 0);

    // Display only the first 4 items from order history
    const displayedOrders = orderHistory.slice(0, 4);

    return (
        <View style={styles.container}>
            <Image source={userData.profileImage} style={styles.profileImage} />
            <Text style={styles.username}>{userData.name}</Text>
            <Text style={styles.email}>{userData.email}</Text>

            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>

            <View style={styles.ordersContainer}>
                <Text style={styles.ordersTitle}>Order History</Text>
                <FlatList
                    data={displayedOrders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.orderItem}>
                            <Text style={styles.restaurantName}>{item.restaurant}</Text>
                            <Text style={styles.orderDate}>{item.date}</Text>
                            <Text style={styles.orderTotal}>₦{item.total.toFixed(2)}</Text>
                        </View>
                    )}
                />
                <Text style={styles.totalSpent}>Total Spent: ₦{totalSpent.toFixed(2)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    editButton: {
        backgroundColor: '#ff8c52',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ordersContainer: {
        width: '100%',
    },
    ordersTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderDate: {
        fontSize: 14,
        color: 'gray',
    },
    orderTotal: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    totalSpent: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default MyAccountScreen;

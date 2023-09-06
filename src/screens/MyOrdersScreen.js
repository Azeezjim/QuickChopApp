// import React from 'react'

// import {View, Text,StyleSheet} from 'react-native'


// export default function MyOrdersScreen(){

//     return(
//         <View style ={{flex:1, alignItems:'center',justifyContent:'center'}}>
//             <Text>My Orders Screen</Text>
//         </View>
//     )
// }
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const menuItems = [
  { id: 1, name: 'Burger', price: 8.99 },
  { id: 2, name: 'Pizza', price: 10.99 },
  { id: 3, name: 'Pasta', price: 12.99 },
  { id: 4, name: 'Salad', price: 7.99 },
  { id: 5, name: 'Steak', price: 15.99 },
  { id: 6, name: 'Sushi', price: 18.99 },
//   { id: 7, name: 'Fried Chicken', price: 9.99 },
//   { id: 8, name: 'Sandwich', price: 6.99 },
//   { id: 9, name: 'Soup', price: 4.99 },
//   { id: 10, name: 'Dessert', price: 5.99 },
];

const MyOrderScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  
  const addToOrder = (item) => {
    const itemIndex = selectedItems.findIndex((i) => i.id === item.id);
    if (itemIndex === -1) {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems[itemIndex].quantity += 1;
      setSelectedItems(updatedItems);
    }
  };

  const removeFromOrder = (item) => {
    const itemIndex = selectedItems.findIndex((i) => i.id === item.id);
    if (itemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[itemIndex].quantity -= 1;
      if (updatedItems[itemIndex].quantity === 0) {
        updatedItems.splice(itemIndex, 1);
      }
      setSelectedItems(updatedItems);
    }
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <ScrollView
        contentContainerStyle={styles.menuContainer}
        showsVerticalScrollIndicator={false}
      >
        {menuItems.map((menuItem) => (
          <View key={menuItem.id} style={styles.menuItem}>
            <Text style={styles.menuItemText}>{menuItem.name}</Text>
            <Text style={styles.menuItemPrice}>${menuItem.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addToOrder(menuItem)}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.title}>Your Order</Text>
      <ScrollView
        contentContainerStyle={styles.orderContainer}
        showsVerticalScrollIndicator={false}
      >
        {selectedItems.map((item) => (
          <View key={item.id} style={styles.orderItem}>
            <Text style={styles.orderItemText}>{item.name}</Text>
            <View style={styles.orderItemQuantityContainer}>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromOrder(item)}
              >
                <Text style={styles.removeButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.orderItemQuantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => addToOrder(item)}
              >
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.total}>Total: ${calculateTotal().toFixed(2)}</Text>

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#003366',
    borderRadius: 20,
    // padding: 3,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    display:'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: -0
  },
  orderContainer: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
    paddingVertical: 10,
  },
  orderItemText: {
    fontSize: 16,
  },
  orderItemQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderItemQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  removeButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    // padding: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 20,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#ff8c52',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyOrderScreen;

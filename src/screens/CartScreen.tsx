import React from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { Product, removeCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';

const CartScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);

  // Function to handle remove, increment, and decrement
  const handleAction = (productId: number, actionType: 'increment' | 'decrement' | 'remove') => {
    if (actionType === 'remove') {
      Alert.alert(
        'Confirm Remove',
        'Are you sure you want to remove this item from the cart?',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Remove',
            onPress: () => dispatch(removeCart(productId)),
            style: 'destructive',
          },
        ],
        { cancelable: true }
      );
    } else if (actionType === 'increment') {
      dispatch(incrementQuantity(productId));
    } else if (actionType === 'decrement') {
      dispatch(decrementQuantity(productId));
    }
  };

  const renderCartItem = ({ item }: { item: Product }) => (
    <View style={styles.cartItem} key={item.id}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text>{item.name}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <Text>Rs{item.price}</Text>
        <View style={styles.buttonsContainer}>
          <Button title="+" onPress={() => handleAction(item.id, 'increment')} />
          <Button title="-" onPress={() => handleAction(item.id, 'decrement')} />
          <Button title="Delete" onPress={() => handleAction(item.id, 'remove')} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
      <Text style={styles.total}>Total: Rs{total}</Text>
      <Button
        title="Back to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'skyblue',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  total: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    width: '100%',
  },
});

export default CartScreen;

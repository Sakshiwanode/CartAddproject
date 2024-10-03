import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, FlatList, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, Product } from '../redux/cartSlice'; // Import Product type here
import { RootState } from '../redux/store';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../navigation/DrawerNavigator';

// Product List array with quantity field
const products: Omit<Product, 'quantity'>[] = [
  { id: 1, name: 'Product 1', price: 100, image: require('../assets/product_image.png') },
  { id: 2, name: 'Product 2', price: 150, image: require('../assets/product_image.png') },
  { id: 3, name: 'Product 3', price: 100, image: require('../assets/product_image.png') },
];

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items); // Fetch cart items from redux store

  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();

  // State to track which products have been added to the cart
  const [addedProducts, setAddedProducts] = useState<number[]>([]);

  const handleAddToCart = (product: Omit<Product, 'quantity'>) => {
    dispatch(addToCart({ ...product, quantity: 1 })); // Add quantity field when dispatching
    Alert.alert('Success', `${product.name} added to cart!`);
    setAddedProducts([...addedProducts, product.id]); // Mark product as added
  };

  const renderProductItem = ({ item }: { item: Omit<Product, 'quantity'> }) => {
    const isAdded = addedProducts.includes(item.id); // Check if the product is already added

    return (
      <View style={styles.productBox} key={item.id}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.imageName}>{item.name}</Text>
        <Text>Rs{item.price}</Text>
        {/* Button text changes based on whether the item is added to the cart */}
        <Button
          title={isAdded ? 'Added to Cart' : 'Add to Cart'}
          onPress={() => handleAddToCart(item)}
          disabled={isAdded} // Disable the button after adding the product
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      
      {/* FlatList rendering the products */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
      
      {/* Go to Cart Button */}
      <View style={{ marginTop: 20 }}>
        <Button title="View Cart" onPress={() => navigation.navigate('Cart')} />
      </View>
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
  productBox: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#11383d',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  imageName: {
    fontSize: 18,
    marginBottom: 10,
  },
  list: {
    flex: 1,
    width: '100%',
  },
});

export default ProfileScreen;

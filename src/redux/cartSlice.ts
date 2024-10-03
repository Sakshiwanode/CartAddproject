import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
  quantity: number;  // Add a quantity field
}

interface CartState {
  items: Product[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProduct = state.items.find(item => item.id === product.id);
      
      if (existingProduct) {
        existingProduct.quantity += 1;  // Increment quantity if already in cart
        state.total += product.price;
      } else {
        state.items.push({ ...product, quantity: 1 });
        state.total += product.price;
      }
    },
    removeCart: (state, action: PayloadAction<number>) => { // Expect a product ID here
      const productId = action.payload;
      const itemToRemove = state.items.find(item => item.id === productId);
      if (itemToRemove) {
        state.items = state.items.filter(item => item.id !== productId);
        state.total -= itemToRemove.price * itemToRemove.quantity;
      }
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product) {
        product.quantity += 1;
        state.total += product.price;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.total -= product.price;
        } else {
          state.items = state.items.filter(item => item.id !== productId);
          state.total -= product.price;
        }
      }
    },
  },
});

export const { addToCart, removeCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;

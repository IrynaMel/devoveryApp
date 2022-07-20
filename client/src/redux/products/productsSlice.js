import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'Cart',
  initialState: { products: [] },
  reducers: {
    addToCart(state, { payload }) {
      const exist = state.products.find(item => item._id === payload._id);

      if (exist) {
        state.products = state.products.map(item =>
          item._id === payload._id ? { ...payload, qty: exist.qty + 1 } : item
        );
      } else {
        state.products.push({ ...payload, qty: 1 });
      }
    },
    removeFromCard(state, { payload }) {
      const { qty } = state.products.find(item => item._id === payload._id);
      if (qty < 1) {
        state.products = state.products.filter(
          item => item._id !== payload._id
        );
      } else {
        state.products = state.products.map(item =>
          item._id === payload._id ? { ...payload, qty: item.qty - 1 } : item
        );
      }
    },
  },
});

export const { addToCart, removeFromCard } = cartSlice.actions;

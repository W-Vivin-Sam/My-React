import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import plantsReducer from '../features/plants/plantsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    plants: plantsReducer
  }
});
// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistSlice';

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
  devTools: true, // ✅ Enable Redux DevTools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; // ✅ Default export

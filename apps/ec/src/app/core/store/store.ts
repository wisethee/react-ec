import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './reducers/cart/cart.reducer';
import { categoriesSlice } from './reducers/categories/categories.reducer';

// Reducers
import { userSlice } from './reducers/user/user.reducer';

const reducer = {
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  categories: categoriesSlice.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['payload'],
        ignoredPaths: ['user'],
      },
    }),
});

export default store;

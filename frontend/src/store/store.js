import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { productsFetch } from '../features/productsSlice';
import cartReducer, { getTotals } from '../features/cartSlice';
import { productsApi } from '../features/productsApi';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		[productsApi.reducerPath]: productsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(productsApi.middleware);
	},
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

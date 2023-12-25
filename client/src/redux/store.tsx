import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './rootReducer';

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

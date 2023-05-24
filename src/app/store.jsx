import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../features/cart/cartSlice";
import { productsApi } from "src/features/products/productsApiSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
    devTools: true,
});

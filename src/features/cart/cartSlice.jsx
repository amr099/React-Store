import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.items.find((item) => item.id === action.payload.id)) {
                state?.items?.map((item) => {
                    if (item.id === action.payload.id) {
                        item = { ...item, quantity: (item.quantity += 1) };
                    }
                });
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },
        changeQuantity: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: action.payload.amount,
                    };
                } else return item;
            });
        },
        getTotalPrice: (state) => {
            let total = 0;
            state.items.map(
                (item) => (total += Number(item.price * item?.quantity))
            );
            state.totalPrice = total;
        },
    },
});

export const { addToCart, removeFromCart, changeQuantity, getTotalPrice } =
    cartSlice.actions;

export default cartSlice.reducer;

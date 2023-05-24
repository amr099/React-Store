import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push({ ...action.payload, quantity: 1 });
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
        getTotal: (state) => {
            let total = 0;
            state.items.map(
                (item) => (total += Number(item.price * item?.quantity))
            );
            state.total = total;
        },
    },
});

export const { addToCart, removeFromCart, changeQuantity, getTotal } =
    cartSlice.actions;

export default cartSlice.reducer;

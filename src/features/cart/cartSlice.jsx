import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: JSON.parse(localStorage.getItem("cart")) || [],
        totalPrice: JSON.parse(localStorage.getItem("cartTotal")) || 0,
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.items?.find((item) => item.id === action.payload.id)) {
                state?.items?.map((item) => {
                    if (item.id === action.payload.id) {
                        item = { ...item, quantity: (item.quantity += 1) };
                    }
                });
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            state.items = state.items?.filter(
                (item) => item.id !== action.payload
            );
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        changeQuantity: (state, action) => {
            state.items = state.items?.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: action.payload.amount,
                    };
                } else return item;
            });
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        getTotalPrice: (state) => {
            let total = 0;
            state.items?.map(
                (item) => (total += Number(item.price * item?.quantity))
            );
            state.totalPrice = total;
            localStorage.setItem("cartTotal", JSON.stringify(state.totalPrice));
        },
        clearCart: (state) => {
            localStorage.setItem("cart", JSON.stringify([]));
            localStorage.setItem("cartTotal", JSON.stringify(0));
            return { items: [], totalPrice: 0 };
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    changeQuantity,
    getTotalPrice,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: JSON.parse(sessionStorage.getItem("user")),
    reducers: {
        signIn: (state, action) => {
            const { uid, displayName, email, photoURL, admin } = action.payload;
            sessionStorage.setItem(
                "user",
                JSON.stringify({
                    uid: uid,
                    name: displayName,
                    email: email,
                    photoURL: photoURL,
                })
            );
            return {
                uid: uid,
                name: displayName,
                email: email,
                photoURL: photoURL,
            };
        },
        signOut: () => {
            sessionStorage.removeItem("user");
            return false;
        },
    },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;

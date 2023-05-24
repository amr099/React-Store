import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Home from "./Routes/Home";
import Checkout from "./Routes/Checkout";
import ProductDetails from "./Routes/ProductDetails";
import ErrorPage from "./Components/ErrorPage";
import Cart from "./Components/Cart/Cart";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { productsApi } from "./features/products/productsApiSlice";
import CategoryPage from "./Routes/CategoryPage";
import SearchPage from "./Routes/SearchPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "product/:id",
                element: <ProductDetails />,
            },
            {
                path: "products/category/:category",
                element: <CategoryPage />,
            },
            {
                path: "products/search",
                element: <SearchPage />,
            },
            {
                path: "/search",
                element: <SearchPage />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </Provider>
    </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./Routes/Home";
import Checkout from "./Routes/Checkout";
import ProductDetails from "./Routes/ProductDetails";
import ErrorPage from "./Components/ErrorPage";
import Cart from "./Routes/Cart";
import CategoryPage from "./Routes/CategoryPage";
import SearchPage from "./Routes/SearchPage";
import OrdersPage from "./Routes/OrdersPage";
import OrderPage from "./Routes/OrderPage";

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
                path: "cart",
                element: <Cart />,
            },
            {
                path: "orders",
                element: <OrdersPage />,
            },
            {
                path: "order/:id",
                element: <OrderPage />,
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

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./Routes/Home";
import Checkout from "./Routes/Checkout";
import ErrorPage from "./Components/ErrorPage";
import Cart from "./Routes/Cart";
import CategoryPage from "./Routes/CategoryPage";
import SearchPage from "./Routes/SearchPage";
import OrdersPage from "./Routes/OrdersPage";
import OrderPage from "./Routes/OrderPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Shop from "./Routes/Shop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "products",
                element: <Shop />,
            },
            {
                path: ":category",
                element: <CategoryPage />,
            },
            {
                path: "search",
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
                path: "orders/:id",
                element: <OrderPage />,
            },
            {
                path: "cart/checkout",
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

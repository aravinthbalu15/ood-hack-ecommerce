import { createBrowserRouter } from "react-router-dom"

import RootLayout from "../components/layout/RootLayout"
import HomePage from "../pages/home/HomePage"
import ProductsPage from "../pages/products/ProductsPage"
import ProductDetailsPage from "../pages/products/ProductDetailsPage"
import WishlistPage from "../pages/wishlist/WishlistPage"
import CartPage from "../pages/cart/CartPage"
import CheckoutPage from "../pages/checkout/CheckoutPage"
import OrdersPage from "../pages/orders/OrdersPage"
import InvoicesPage from "../pages/invoices/InvoicesPage"
import LoginPage from "../pages/auth/LoginPage"
import SignupPage from "../pages/auth/SignupPage"
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetailsPage /> },
      { path: "wishlist", element: <WishlistPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "invoices", element: <InvoicesPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
    ],
  },
])

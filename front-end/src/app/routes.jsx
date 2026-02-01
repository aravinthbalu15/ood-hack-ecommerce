import { createBrowserRouter } from "react-router-dom"

import HomePage from "../pages/home/HomePage"
import LoginPage from "../features/auth/LoginPage"
import SignupPage from "../features/auth/SignupPage"
import ForgotPasswordPage from "../features/auth/ForgotPasswordPage"
import CartPage from "../pages/cart/CartPage"
import WishlistPage from "../pages/wishlist/WishlistPage"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/cart",
    element: <CartPage />, // ✅ FIX
  },
  {
  path: "/wishlist",
  element: <WishlistPage />,
}

])

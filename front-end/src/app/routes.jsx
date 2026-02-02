// src/app/routes.jsx
import { createBrowserRouter } from "react-router-dom"

import HomePage from "../pages/home/HomePage"
import LoginPage from "../features/auth/LoginPage"
import SignupPage from "../features/auth/SignupPage"
import ForgotPasswordPage from "../features/auth/ForgotPasswordPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // AppLayout inside HomePage
  },
  {
    path: "/login",
    element: <LoginPage />, // AuthLayout only
  },
  {
    path: "/signup",
    element: <SignupPage />, // AuthLayout only
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />, // AuthLayout only
  },
])

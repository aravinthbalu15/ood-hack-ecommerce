// src/app/routes.jsx
import { createBrowserRouter } from "react-router-dom"

import HomePage from "../pages/home/HomePage"
import LoginPage from "../features/auth/LoginPage"
import SignupPage from "../features/auth/SignupPage"
import ForgotPasswordPage from "../features/auth/ForgotPasswordPage"
import AdminDashboard from "../pages/AdminDash/AdminDashboard"
import AdminProtectedRoute from "./AdminProtectedRoute"

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
    path: "/admin/dashboard",
    element: (
      <AdminProtectedRoute>
        <AdminDashboard />
      </AdminProtectedRoute>
    ),
  },
])

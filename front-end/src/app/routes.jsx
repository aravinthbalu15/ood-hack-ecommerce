import { createBrowserRouter } from "react-router-dom"

import LoginPage from "../features/auth/LoginPage"
import SignupPage from "../features/auth/SignupPage"
import HomePage from "../pages/home/HomePage"

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
])

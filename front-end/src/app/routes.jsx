import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../features/auth/LoginPage"
import SignupPage from "../features/auth/SignupPage"

export const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
])
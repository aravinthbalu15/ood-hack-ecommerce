import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./app/routes"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"
import { ToastProvider } from "./context/ToastContext"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
)

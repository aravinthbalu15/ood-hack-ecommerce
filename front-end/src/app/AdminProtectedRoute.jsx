import { Navigate } from "react-router-dom"

export default function AdminProtectedRoute({ children }) {
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />
  }

  // Logged in but not admin
  if (role !== "admin") {
    return <Navigate to="/" replace />
  }

  // Admin allowed
  return children
}

import { createContext, useContext, useEffect, useState } from "react"
import { login as loginApi, logout as logoutApi, signup } from "../api/auth.api"

const AuthContext = createContext()

const TOKEN_KEY = "appareldesk_token"
const USER_KEY = "appareldesk_user"

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem(USER_KEY)
    const storedToken = localStorage.getItem(TOKEN_KEY)
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (payload) => {
    const result = await loginApi(payload)
    localStorage.setItem(TOKEN_KEY, result.token)
    localStorage.setItem(USER_KEY, JSON.stringify(result.user))
    setUser(result.user)
    return result
  }

  const register = async (payload) => {
    const result = await signup(payload)
    localStorage.setItem(TOKEN_KEY, result.token)
    localStorage.setItem(USER_KEY, JSON.stringify(result.user))
    setUser(result.user)
    return result
  }

  const logout = async () => {
    await logoutApi()
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: Boolean(user),
        login,
        signup: register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

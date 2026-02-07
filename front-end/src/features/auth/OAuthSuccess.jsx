import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function OAuthSuccess() {
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const token = params.get("token")
    const role = params.get("role")

    if (token) {
      localStorage.setItem("token", token)
      localStorage.setItem("role", role)
    }

    navigate("/")   // redirect to home
  }, [])

  return <h2>Signing you in...</h2>
}

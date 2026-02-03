import { useState } from "react"
import axios from "axios"
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"
import Checkbox from "../../components/ui/Checkbox"
import { Link, useNavigate } from "react-router-dom"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function LoginForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!formData.email || !formData.password) {
      setError("Email and password are required")
      return
    }

    try {
      setLoading(true)

      const res = await axios.post(
        `${API_BASE_URL}/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      )

       // 🔥 ROLE BASED REDIRECT
    if (res.data.role === "admin") {
      navigate("/admin/dashboard")
    } else {
      navigate("/")
    }


    } catch (err) {
      setError(err.response?.data?.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
    <form className="space-y-5" onSubmit={handleSubmit}>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
          {error}
        </p>
      )}

      <Input
        label="Email address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="name@company.com"
        required
      />

      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-slate-700">
            Password
          </label>
          <Link
            to="/forgot-password"
            className="text-sm text-indigo-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </div>

      <Checkbox label="Remember me on this device" />

      <Button
        type="submit"
        disabled={loading}
        className={`
          w-full
          h-11
          font-medium
          rounded-lg
          transition
          ${loading
            ? "bg-indigo-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"}
        `}
      >
        {loading ? "Signing in..." : "Sign in"}
      </Button>
      

    </form>
    {/* SOCIAL LOGIN */}
<div className="space-y-3 mt-4">

  {/* GOOGLE */}
  <button
    type="button"
    className="w-full h-11 border flex items-center justify-center gap-3 rounded-lg hover:bg-slate-50 transition"
  >
    <img
      src="https://developers.google.com/identity/images/g-logo.png"
      alt="Google"
      className="w-5 h-5"
    />
    <span className="text-sm font-medium">Sign in with Google</span>
  </button>
  {/* FACEBOOK */}
  <button
    type="button"
    className="w-full h-11 bg-blue-600 text-white flex items-center justify-center gap-3 rounded-lg hover:bg-blue-700 transition"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
      alt="Facebook"
      className="w-5 h-5"
    />
    <span className="text-sm font-medium">Sign in with Facebook</span>
  </button>

</div>

    </div>
    
  )
}

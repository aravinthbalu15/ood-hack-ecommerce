import { useState } from "react"
import axios from "axios"
import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"
import Checkbox from "../../components/ui/Checkbox"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function SignupForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (preview) URL.revokeObjectURL(preview)
      setImage(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!image) {
      setError("Please upload a profile image")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    if (!agreed) {
      setError("You must agree to the Terms & Privacy Policy")
      return
    }

    try {
      setLoading(true)

      const data = new FormData()
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("password", formData.password)
      data.append("confirmPassword", formData.confirmPassword)
      data.append("image", image)

      const res = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        data
      )

      setSuccess(res.data.message)

      localStorage.setItem("token", res.data.token)
      localStorage.setItem("role", res.data.role)

      // RESET
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
      setImage(null)
      setPreview(null)
      setAgreed(false)

    } catch (err) {
      setError(err.response?.data?.message || "Signup failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <form className="space-y-5" onSubmit={handleSubmit}>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 p-2 rounded">
          {error}
        </p>
      )}

      {success && (
        <p className="text-sm text-green-600 bg-green-50 p-2 rounded">
          {success}
        </p>
      )}

      {/* PROFILE IMAGE UPLOAD */}
      <div className="flex justify-center">
        <label className="cursor-pointer">

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          <div
            className="
              w-28
              h-28
              rounded-full
              border-2
              border-dashed
              border-slate-300
              flex
              items-center
              justify-center
              overflow-hidden
              bg-slate-100
              hover:border-indigo-500
              transition
            "
          >
            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.5 20.25a8.25 8.25 0 0115 0"
                />
              </svg>
            )}
          </div>

          <p className="mt-2 text-xs text-center text-slate-500">
            Upload profile photo
          </p>

        </label>
      </div>

      <Input
        label="Full name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <Input
        label="Work email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Input
        label="Confirm password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <p className="text-xs text-slate-500">
        Use at least 8 characters with letters, numbers, and symbols.
      </p>

      <Checkbox
        label="I agree to the Terms and Privacy Policy"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />

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
        {loading ? "Creating..." : "Create account"}
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

    </>
  )
}

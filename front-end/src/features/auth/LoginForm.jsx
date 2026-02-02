import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"
import Checkbox from "../../components/ui/Checkbox"
import { Link, useNavigate } from "react-router-dom"

export default function LoginForm() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login submitted")
    navigate("/") // TEMP redirect after login
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input
        label="Email address"
        type="email"
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
          placeholder="Enter your password"
          required
        />
      </div>

      <Checkbox label="Remember me on this device" />

      <Button
  type="submit"
  className="
    w-full
    h-11
    bg-indigo-600
    text-white
    font-medium
    rounded-lg
    hover:bg-indigo-700
    focus:outline-none
    focus:ring-2
    focus:ring-indigo-500
    focus:ring-offset-2
    transition
  "
>
  Sign in
</Button>

    </form>
  )
}

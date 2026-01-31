import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"
import { Link } from "react-router-dom"

export default function ForgotPasswordForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Reset password email sent")
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <Input
        label="Email address"
        type="email"
        placeholder="name@company.com"
        required
      />

      <Button type="submit" className="w-full">
        Send reset link
      </Button>

      <div className="text-center text-sm text-slate-600">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:underline"
        >
          Back to login
        </Link>
      </div>
    </form>
  )
}

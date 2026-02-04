import { useState } from "react"
import { Link } from "react-router-dom"
import { useToast } from "../../context/ToastContext"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const { pushToast } = useToast()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    pushToast({
      type: "success",
      title: "Reset link sent",
      message: "Check your inbox for the next steps.",
    })
  }

  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <div className="rounded-2xl border border-default bg-surface p-8 shadow-card">
        <h1 className="text-2xl font-semibold text-primary">
          Reset your password
        </h1>
        <p className="mt-2 text-sm text-secondary">
          Enter your email to receive reset instructions.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-secondary">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-md border border-default px-3 py-2 text-sm focus-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Send reset link
          </button>
        </form>
        <div className="mt-4 text-sm text-secondary">
          Back to{" "}
          <Link to="/login" className="text-primary font-semibold">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

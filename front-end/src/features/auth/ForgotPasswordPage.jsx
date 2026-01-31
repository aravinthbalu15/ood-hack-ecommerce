import AuthLayout from "../../components/layout/AuthLayout"
import ForgotPasswordForm from "./ForgotPasswordForm"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-xl bg-white p-8 border shadow-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">
            Reset your password
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Enter your email and we’ll send you a reset link.
          </p>
        </div>

        <ForgotPasswordForm />
      </div>
    </AuthLayout>
  )
}

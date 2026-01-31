import { Link } from "react-router-dom"
import AuthLayout from "../../components/layout/AuthLayout"
import LoginForm from "./LoginForm"
import { AUTH_COPY } from "./auth.constants"

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm border">
        <div className="text-center mb-6">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-indigo-100
                          flex items-center justify-center text-indigo-600">
            🔒
          </div>
          <h1 className="text-2xl font-semibold">{AUTH_COPY.title}</h1>
          <p className="text-sm text-slate-600 mt-1">
            {AUTH_COPY.subtitle}
          </p>
        </div>

        <LoginForm />

        <div className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>

        <div className="mt-6 text-xs text-center text-slate-500">
          🔒 {AUTH_COPY.footer}
        </div>
      </div>
    </AuthLayout>
  )
}
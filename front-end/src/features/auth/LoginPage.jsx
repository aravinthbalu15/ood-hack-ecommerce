import { Link } from "react-router-dom"
import AuthLayout from "../../components/layout/AuthLayout"
import LoginForm from "./LoginForm"

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-md border">

        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Sign in to ApparelDesk
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Enter your credentials to continue
          </p>
        </div>

        <LoginForm />

        <p className="mt-6 text-center text-sm text-slate-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-medium text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}

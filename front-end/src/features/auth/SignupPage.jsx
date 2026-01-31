import { Link } from "react-router-dom"
import AuthLayout from "../../components/layout/AuthLayout"
import SignupForm from "./SignupForm"

export default function SignupPage() {
  return (
    <AuthLayout>
      {/* Header CTA */}
      <div className="absolute top-6 right-6 text-sm text-slate-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="ml-2 rounded-lg bg-slate-900 px-4 py-2
                     text-white text-sm font-medium hover:bg-slate-800"
        >
          Sign in
        </Link>
      </div>

      {/* Content */}
      <div className="w-full max-w-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
            Create your ApparelDesk account
          </h1>
          <p className="mt-2 text-slate-600">
            Enterprise-grade platform to manage apparel operations at scale.
          </p>
        </div>

        <div className="rounded-2xl bg-white px-8 py-10 shadow-lg ring-1 ring-slate-200">
          <SignupForm />
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          © 2024 ApparelDesk ERP Solutions. All rights reserved.
        </p>
      </div>
    </AuthLayout>
  )
}
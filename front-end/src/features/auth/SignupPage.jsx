import SignupForm from "./SignupForm"
import { Link } from "react-router-dom"

export default function SignupPage() {
  return (
    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-50
      px-4
    ">
      <div className="
        w-full
        max-w-md
        bg-white
        rounded-2xl
        shadow-lg
        border
        p-8
      ">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Start your journey with ApparelDesk
          </p>
        </div>

        {/* FORM */}
        <SignupForm />

        {/* Footer link */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

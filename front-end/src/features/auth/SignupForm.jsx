import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"
import Checkbox from "../../components/ui/Checkbox"

export default function SignupForm() {
  return (
    <form className="space-y-6">
      {/* Name */}
      <Input
        label="Full name"
        placeholder="John Doe"
      />

      {/* Email */}
      <Input
        label="Work email"
        type="email"
        placeholder="john@company.com"
      />

      {/* Passwords */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label="Password"
          type="password"
        />
        <Input
          label="Confirm password"
          type="password"
        />
      </div>

      {/* Password hint */}
      <p className="text-xs text-slate-500 leading-relaxed">
        Use at least 8 characters, including uppercase, lowercase, numbers, and symbols.
      </p>

      {/* Terms */}
      <Checkbox
        label={
          <span className="text-sm text-slate-600">
            I agree to the{" "}
            <span className="font-medium text-slate-900 hover:underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-medium text-slate-900 hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </span>
        }
      />

      {/* Primary CTA */}
      <Button type="submit">
        Create account
      </Button>

      {/* Divider */}
      <div className="relative py-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative text-center text-xs uppercase tracking-wide text-slate-400">
          <span className="bg-white px-4">Or continue with</span>
        </div>
      </div>

      {/* OAuth */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg
                     border border-slate-300 bg-white px-4 py-2.5
                     text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Google
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg
                     border border-slate-300 bg-white px-4 py-2.5
                     text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          Microsoft
        </button>
      </div>
    </form>
  )
}
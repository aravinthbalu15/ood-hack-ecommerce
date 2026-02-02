import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"
import Checkbox from "../../components/ui/Checkbox"

export default function SignupForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Signup submitted")
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      
      <Input
        label="Full name"
        placeholder="Enter your name"
        required
      />

      <Input
        label="Work email"
        type="email"
        placeholder="name@company.com"
        required
      />

      <Input
        label="Password"
        type="password"
        required
      />

      <Input
        label="Confirm password"
        type="password"
        required
      />

      <p className="text-xs text-slate-500">
        Use at least 8 characters with letters, numbers, and symbols.
      </p>

      <Checkbox
        required
        label="I agree to the Terms and Privacy Policy"
      />

      {/* PRIMARY SIGN UP BUTTON */}
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
        Create account
      </Button>

      {/* DIVIDER */}
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <div className="relative text-center text-xs text-slate-400">
          <span className="bg-white px-4">OR</span>
        </div>
      </div>

      {/* GOOGLE SIGN UP BUTTON */}
      <button
        type="button"
        className="
          w-full
          h-11
          flex
          items-center
          justify-center
          gap-3
          rounded-lg
          border
          border-slate-300
          bg-white
          text-sm
          font-medium
          text-slate-700
          hover:bg-slate-50
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
          focus:ring-offset-2
          transition
        "
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />
        Continue with Google
      </button>

    </form>
  )
}

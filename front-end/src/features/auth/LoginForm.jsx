import Input from "../../components/ui/Input"
import Button from "../../components/ui/Button"
import Checkbox from "../../components/ui/Checkbox"

export default function LoginForm() {
  return (
    <form className="space-y-5">
      <Input
        label="Email Address"
        placeholder="name@company.com"
      />

      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-slate-700">
            Password
          </label>
          <button
            type="button"
            className="text-sm text-indigo-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <Input type="password" />
      </div>

      <Checkbox label="Remember this device" />

      <Button type="submit">
        Sign In to ERP Dashboard
      </Button>
    </form>
  )
}
import { Search, ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-xl font-bold tracking-tight"
        >
          Apparel<span className="text-blue-600">Desk</span>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-1 items-center">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search products, brands and categories"
              className="w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            className="rounded-md p-2 hover:bg-slate-100"
            aria-label="Account"
          >
            <User className="h-5 w-5 text-slate-700" />
          </button>

          <button
            className="relative rounded-md p-2 hover:bg-slate-100"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5 text-slate-700" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] text-white">
              2
            </span>
          </button>

          <Link
            to="/login"
            className="hidden rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 sm:inline-flex"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  )
}

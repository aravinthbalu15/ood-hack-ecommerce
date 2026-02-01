import { Link, useNavigate } from "react-router-dom"
import { Search, ShoppingCart, Heart, LogOut, User } from "lucide-react"
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext"

export default function Navbar() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const { totalItems } = useCart()
  const { wishlistCount } = useWishlist()

  // TEMP auth state (replace later)
  const isLoggedIn = false
  const userName = "Raj Sharma"

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/search?q=${query}`)
  }

  const handleLogout = () => {
    console.log("Logged out")
    navigate("/login")
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center gap-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">
              A
            </div>
            <span className="hidden sm:block text-lg font-semibold text-slate-900">
              ApparelDesk
            </span>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/shop" className="hover:text-indigo-600">Shop</Link>
          </nav>

          {/* SEARCH */}
          <form onSubmit={handleSearch} className="flex flex-1 justify-center">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search products, brands & more"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="
                  w-full
                  rounded-lg
                  border
                  border-slate-300
                  py-2.5
                  pl-4
                  pr-12
                  text-sm
                  focus:border-indigo-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-indigo-200
                "
              />
              <button
                type="submit"
                disabled={!query.trim()}
                className="
                  absolute
                  right-1.5
                  top-1/2
                  -translate-y-1/2
                  rounded-md
                  bg-indigo-600
                  p-2
                  text-white
                  hover:bg-indigo-700
                  disabled:opacity-50
                "
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4 shrink-0">

            {/* WISHLIST */}
            <Link
              to="/wishlist"
              className="relative text-slate-700 hover:text-indigo-600"
              title="Wishlist"
            >
              <Heart size={22} />
              {wishlistCount > 0 && (
                <span className="
                  absolute
                  -top-2
                  -right-2
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-indigo-600
                  text-xs
                  text-white
                ">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* CART */}
            <Link
              to="/cart"
              className="relative text-slate-700 hover:text-indigo-600"
              title="Cart"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="
                  absolute
                  -top-2
                  -right-2
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-indigo-600
                  text-xs
                  text-white
                ">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* AUTH */}
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <User size={20} className="text-slate-600" />
                <span className="hidden sm:block text-sm text-slate-700">
                  {userName}
                </span>
                <button
                  onClick={handleLogout}
                  className="
                    rounded-lg
                    border
                    border-slate-300
                    px-3
                    py-2
                    text-sm
                    hover:bg-slate-50
                  "
                  title="Sign out"
                >
                  <LogOut size={16} />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="
                  rounded-lg
                  bg-indigo-600
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  hover:bg-indigo-700
                "
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

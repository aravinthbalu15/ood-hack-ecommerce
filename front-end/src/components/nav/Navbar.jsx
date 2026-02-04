import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useCart } from "../../context/CartContext"
import { useWishlist } from "../../context/WishlistContext"
import { useAuth } from "../../context/AuthContext"
import Modal from "../common/Modal"

const navLinks = [
  { label: "Men", href: "/products?gender=Men" },
  { label: "Women", href: "/products?gender=Women" },
  { label: "Kids", href: "/products?gender=Kids" },
  { label: "New Arrivals", href: "/products?sort=new" },
  { label: "Offers", href: "/products?offers=true" },
]

export default function Navbar() {
  const { totalItems } = useCart()
  const { count } = useWishlist()
  const { user, isAuthenticated, logout } = useAuth()
  const [hasShadow, setHasShadow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasShadow(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-surface border-b border-default ${
          hasShadow ? "shadow-nav" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                className="md:hidden text-secondary"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white font-semibold">
                  A
                </div>
                <span className="hidden sm:block text-lg font-semibold text-primary">
                  ApparelDesk
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-secondary">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className="transition hover:text-primary"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                className="text-secondary hover:text-primary transition"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search size={24} />
              </button>

              <Link
                to="/wishlist"
                className="relative text-secondary hover:text-primary transition"
                aria-label="Wishlist"
              >
                <Heart size={24} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs text-white">
                    {count}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="relative text-secondary hover:text-primary transition"
                aria-label="Cart"
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs text-white">
                    {totalItems}
                  </span>
                )}
              </Link>

              <div className="hidden sm:flex items-center gap-2">
                {isAuthenticated ? (
                  <div className="flex items-center gap-2">
                    <User size={20} className="text-secondary" />
                    <span className="text-sm text-primary">{user?.name}</span>
                    <button
                      onClick={logout}
                      className="rounded-lg border border-default px-3 py-2 text-sm text-primary hover:bg-slate-100 transition"
                      aria-label="Logout"
                    >
                      <LogOut size={16} />
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="rounded-lg border border-default px-4 py-2 text-sm text-primary hover:bg-slate-100 transition"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative h-full w-72 bg-surface shadow-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-primary">
                ApparelDesk
              </span>
              <button
                className="text-secondary"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-4 text-sm text-secondary">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/orders" className="hover:text-primary">
                Orders
              </Link>
              <Link to="/invoices" className="hover:text-primary">
                Invoices
              </Link>
              {!isAuthenticated ? (
                <Link to="/login" className="hover:text-primary">
                  Login
                </Link>
              ) : (
                <button
                  className="text-left text-secondary hover:text-primary"
                  onClick={logout}
                >
                  Logout
                </button>
              )}
            </nav>
          </div>
        </div>
      )}

      <Modal
        open={searchOpen}
        title="Search ApparelDesk"
        onClose={() => setSearchOpen(false)}
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search for products, categories, or styles"
            className="w-full rounded-md border border-default px-4 py-3 text-sm focus-ring"
          />
          <button className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white hover:bg-black transition">
            Search
          </button>
        </div>
      </Modal>
    </>
  )
}

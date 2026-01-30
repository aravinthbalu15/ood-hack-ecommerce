import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Top grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold text-white">
              Apparel<span className="text-blue-500">Desk</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Enterprise-grade apparel solutions for modern professionals.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase text-white">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white">Men</Link></li>
              <li><Link to="#" className="hover:text-white">Women</Link></li>
              <li><Link to="#" className="hover:text-white">Accessories</Link></li>
              <li><Link to="#" className="hover:text-white">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white">About Us</Link></li>
              <li><Link to="#" className="hover:text-white">Careers</Link></li>
              <li><Link to="#" className="hover:text-white">Corporate Orders</Link></li>
              <li><Link to="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase text-white">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white">Returns</Link></li>
              <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} ApparelDesk. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-default bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-base font-semibold text-primary">
            About ApparelDesk
          </h3>
          <p className="mt-3 text-sm text-secondary">
            Modern apparel essentials for professionals and teams. Built for
            style, comfort, and scale.
          </p>
        </div>
        <div>
          <h4 className="text-base font-semibold text-primary">
            Customer Support
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-secondary">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Order Tracking</li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold text-primary">Policies</h4>
          <ul className="mt-3 space-y-2 text-sm text-secondary">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold text-primary">Social</h4>
          <div className="mt-3 flex items-center gap-3 text-secondary">
            <Facebook size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
          </div>
        </div>
      </div>
      <div className="border-t border-default py-4 text-center text-xs text-secondary">
        © 2026 ApparelDesk. All rights reserved.
      </div>
    </footer>
  )
}

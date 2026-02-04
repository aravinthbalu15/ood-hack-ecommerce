import { Outlet } from "react-router-dom"
import Navbar from "../nav/Navbar"
import Footer from "../footer/Footer"
import ToastContainer from "../common/ToastContainer"

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-page flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}

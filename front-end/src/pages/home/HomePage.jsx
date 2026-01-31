import Navbar from "../../components/nav/Navbar"
import Footer from "../../components/footer/Footer"
import HeroSection from "./HeroSection"
import CategorySection from "./CategorySection"
import ProductGrid from "./ProductGrid"

export default function HomePage() {
  const user = null // change to object after login

  return (
    <>
      <Navbar user={user} />
      <main className="bg-slate-50">
        <HeroSection />
        <CategorySection />
        <ProductGrid />
      </main>
      <Footer />
    </>
  )
}

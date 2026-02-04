import HeroSection from "./HeroSection"
import CategorySection from "./CategorySection"
import FeaturedProducts from "./FeaturedProducts"
import WhySection from "./WhySection"

export default function HomePage() {
  return (
    <div className="bg-page">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <WhySection />
    </div>
  )
}

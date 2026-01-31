import AppLayout from "../../components/layout/AppLayout"
import HeroSection from "./HeroSection"
import CategorySection from "./CategorySection"
import FeaturedProducts from "./FeaturedProducts"
import ValueProposition from "./ValueProposition"

export default function HomePage() {
  return (
    <AppLayout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <ValueProposition />
    </AppLayout>
  )
}

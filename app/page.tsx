import { Header } from "@/components/header"
import { CategoryNav } from "@/components/category-nav"
import { HeroBanner } from "@/components/hero-banner"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNav />
      <HeroBanner />
      <ProductGrid />
      <Footer />
    </div>
  )
}

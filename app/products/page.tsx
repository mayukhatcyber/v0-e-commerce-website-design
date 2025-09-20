import { Header } from "@/components/header"
import { CategoryNav } from "@/components/category-nav"
import { ProductCatalog } from "@/components/product-catalog"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNav />
      <ProductCatalog />
      <Footer />
    </div>
  )
}

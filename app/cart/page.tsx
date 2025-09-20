import { Header } from "@/components/header"
import { CategoryNav } from "@/components/category-nav"
import { ShoppingCartPage } from "@/components/shopping-cart-page"
import { Footer } from "@/components/footer"

export default function CartPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNav />
      <ShoppingCartPage />
      <Footer />
    </div>
  )
}

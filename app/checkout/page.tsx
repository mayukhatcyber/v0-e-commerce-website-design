import { Header } from "@/components/header"
import { CategoryNav } from "@/components/category-nav"
import { CheckoutPage } from "@/components/checkout-page"
import { Footer } from "@/components/footer"

export default function Checkout() {
  return (
    <div className="min-h-screen">
      <Header />
      <CategoryNav />
      <CheckoutPage />
      <Footer />
    </div>
  )
}

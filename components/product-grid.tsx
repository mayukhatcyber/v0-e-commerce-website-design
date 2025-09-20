import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "₹1,34,900",
    originalPrice: "₹1,49,900",
    discount: "10% off",
    rating: 4.5,
    reviews: 1234,
    image: "/iphone-15-pro.png",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: "₹79,999",
    originalPrice: "₹89,999",
    discount: "11% off",
    rating: 4.3,
    reviews: 856,
    image: "/samsung-galaxy-s24-smartphone.jpg",
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: "₹1,14,900",
    originalPrice: "₹1,34,900",
    discount: "15% off",
    rating: 4.7,
    reviews: 432,
    image: "/macbook-air-m3-laptop.jpg",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: "₹24,990",
    originalPrice: "₹29,990",
    discount: "17% off",
    rating: 4.6,
    reviews: 2341,
    image: "/sony-wh-1000xm5.png",
  },
  {
    id: 5,
    name: "Nike Air Max 270",
    price: "₹8,995",
    originalPrice: "₹12,995",
    discount: "31% off",
    rating: 4.2,
    reviews: 1876,
    image: "/nike-air-max-270-sneakers.jpg",
  },
  {
    id: 6,
    name: "Canon EOS R6",
    price: "₹1,89,999",
    originalPrice: "₹2,09,999",
    discount: "10% off",
    rating: 4.8,
    reviews: 234,
    image: "/canon-eos-r6-camera.jpg",
  },
]

export function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Trending Products</h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="relative mb-3">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded-md"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
              </div>

              <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>

              <div className="flex items-center gap-1 mb-2">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm">{product.price}</span>
                  <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
                <Button size="sm" className="w-full text-xs">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

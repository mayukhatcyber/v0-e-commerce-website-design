"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Star, Filter, Grid, List } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const allProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 134900,
    originalPrice: 149900,
    discount: 10,
    rating: 4.5,
    reviews: 1234,
    image: "/iphone-15-pro.png",
    category: "Electronics",
    brand: "Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 79999,
    originalPrice: 89999,
    discount: 11,
    rating: 4.3,
    reviews: 856,
    image: "/samsung-galaxy-s24-smartphone.jpg",
    category: "Electronics",
    brand: "Samsung",
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 114900,
    originalPrice: 134900,
    discount: 15,
    rating: 4.7,
    reviews: 432,
    image: "/macbook-air-m3-laptop.jpg",
    category: "Electronics",
    brand: "Apple",
  },
  {
    id: 4,
    name: "Sony WH-1000XM5 Headphones",
    price: 24990,
    originalPrice: 29990,
    discount: 17,
    rating: 4.6,
    reviews: 2341,
    image: "/sony-wh-1000xm5.png",
    category: "Electronics",
    brand: "Sony",
  },
  {
    id: 5,
    name: "Nike Air Max 270",
    price: 8995,
    originalPrice: 12995,
    discount: 31,
    rating: 4.2,
    reviews: 1876,
    image: "/nike-air-max-270-sneakers.jpg",
    category: "Fashion",
    brand: "Nike",
  },
  {
    id: 6,
    name: "Canon EOS R6 Camera",
    price: 189999,
    originalPrice: 209999,
    discount: 10,
    rating: 4.8,
    reviews: 234,
    image: "/canon-eos-r6-camera.jpg",
    category: "Electronics",
    brand: "Canon",
  },
  {
    id: 7,
    name: "Adidas Ultraboost 22",
    price: 12999,
    originalPrice: 16999,
    discount: 24,
    rating: 4.4,
    reviews: 987,
    image: "/adidas-ultraboost-running-shoes.jpg",
    category: "Fashion",
    brand: "Adidas",
  },
  {
    id: 8,
    name: "Dell XPS 13 Laptop",
    price: 89999,
    originalPrice: 99999,
    discount: 10,
    rating: 4.3,
    reviews: 543,
    image: "/dell-xps-13-laptop-silver.jpg",
    category: "Electronics",
    brand: "Dell",
  },
]

const categories = ["All", "Electronics", "Fashion", "Home & Kitchen", "Beauty", "Sports"]
const brands = ["All", "Apple", "Samsung", "Sony", "Nike", "Canon", "Adidas", "Dell"]

export function ProductCatalog() {
  const [products, setProducts] = useState(allProducts)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 200000])
  const [sortBy, setSortBy] = useState("popularity")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const filterProducts = () => {
    let filtered = allProducts

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by brands
    if (selectedBrands.length > 0 && !selectedBrands.includes("All")) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand))
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "discount":
        filtered.sort((a, b) => b.discount - a.discount)
        break
      default:
        filtered.sort((a, b) => b.reviews - a.reviews)
    }

    setProducts(filtered)
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand])
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand))
    }
  }

  // Apply filters whenever dependencies change
  useState(() => {
    filterProducts()
  })

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <h3 className="font-semibold mb-3">Search Products</h3>
        <Input placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategory === category}
                onCheckedChange={() => setSelectedCategory(category)}
              />
              <label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold mb-3">Brands</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
              />
              <label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={200000} min={0} step={1000} className="mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <Card className="p-6">
            <FilterSidebar />
          </Card>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">Products ({products.length})</h1>

              {/* Mobile Filter */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSidebar />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                  <SelectItem value="discount">Discount</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="relative mb-3">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                        {product.discount}% off
                      </span>
                    </div>

                    <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>

                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm">₹{product.price.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <Button size="sm" className="w-full text-xs">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="relative flex-shrink-0">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-32 h-32 object-cover rounded-md"
                        />
                        <span className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                          {product.discount}% off
                        </span>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{product.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                        </div>

                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-bold text-xl">₹{product.price.toLocaleString()}</span>
                          <span className="text-muted-foreground line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-green-600 font-medium">{product.discount}% off</span>
                        </div>

                        <div className="flex gap-3">
                          <Button>Add to Cart</Button>
                          <Button variant="outline">
                            <Heart className="h-4 w-4 mr-2" />
                            Wishlist
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 bg-transparent"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedBrands([])
                  setPriceRange([0, 200000])
                  setSearchQuery("")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

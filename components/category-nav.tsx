import { Button } from "@/components/ui/button"

const categories = ["Electronics", "Fashion", "Home & Kitchen", "Beauty", "Sports", "Books", "Toys", "Automotive"]

export function CategoryNav() {
  return (
    <nav className="bg-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 py-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="whitespace-nowrap text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}

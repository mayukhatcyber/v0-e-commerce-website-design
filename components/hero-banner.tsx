import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroBanner() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Banner */}
        <Card className="md:col-span-2 relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Big Billion Days Sale</h2>
            <p className="text-lg mb-6 text-primary-foreground/90">Up to 80% off on Electronics, Fashion & More</p>
            <Button size="lg" variant="secondary">
              Shop Now
            </Button>
          </div>
          <img
            src="/shopping-sale-banner-with-electronics-and-fashion-.jpg"
            alt="Sale Banner"
            className="absolute right-0 top-0 h-full w-auto object-cover opacity-20"
          />
        </Card>

        {/* Side Banners */}
        <div className="space-y-6">
          <Card className="bg-secondary text-secondary-foreground p-6">
            <h3 className="text-xl font-semibold mb-2">Fashion Week</h3>
            <p className="text-sm mb-4">Trending styles for everyone</p>
            <Button variant="outline" size="sm">
              Explore
            </Button>
          </Card>

          <Card className="bg-accent text-accent-foreground p-6">
            <h3 className="text-xl font-semibold mb-2">Electronics</h3>
            <p className="text-sm mb-4">Latest gadgets & tech</p>
            <Button variant="outline" size="sm">
              Shop Tech
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

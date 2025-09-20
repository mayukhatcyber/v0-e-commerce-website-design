"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Smartphone, Wallet, MapPin, Truck, Shield, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

const cartItems = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 134900,
    quantity: 1,
    image: "/iphone-15-pro.png",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Headphones",
    price: 24990,
    quantity: 2,
    image: "/sony-wh-1000xm5.png",
  },
]

export function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [deliveryAddress, setDeliveryAddress] = useState("home")
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  })
  const [upiId, setUpiId] = useState("")
  const [selectedWallet, setSelectedWallet] = useState("")

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 0
  const total = subtotal + deliveryFee

  const handlePayment = () => {
    // Payment processing logic would go here
    alert(`Processing payment of ₹${total.toLocaleString()} via ${paymentMethod}`)
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/cart">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Checkout Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Delivery Address */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Delivery Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={deliveryAddress} onValueChange={setDeliveryAddress}>
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="home" id="home" />
                  <div className="flex-1">
                    <Label htmlFor="home" className="font-medium">
                      Home
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      123 Main Street, Apartment 4B
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      Phone: +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="office" id="office" />
                  <div className="flex-1">
                    <Label htmlFor="office" className="font-medium">
                      Office
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      456 Business Park, Floor 12
                      <br />
                      Bangalore, Karnataka 560001
                      <br />
                      Phone: +91 98765 43210
                    </p>
                  </div>
                </div>
              </RadioGroup>

              <Button variant="outline" className="mt-4 bg-transparent">
                Add New Address
              </Button>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="card" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Cards
                  </TabsTrigger>
                  <TabsTrigger value="upi" className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    UPI
                  </TabsTrigger>
                  <TabsTrigger value="wallet" className="flex items-center gap-2">
                    <Wallet className="h-4 w-4" />
                    Wallets
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="card" className="space-y-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        placeholder="John Doe"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="saveCard" />
                    <Label htmlFor="saveCard" className="text-sm">
                      Save this card for future purchases
                    </Label>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <img
                      src="/placeholder.svg?key=visa"
                      alt="Visa"
                      className="h-8 w-12 object-contain border rounded"
                    />
                    <img
                      src="/placeholder.svg?key=mastercard"
                      alt="Mastercard"
                      className="h-8 w-12 object-contain border rounded"
                    />
                    <img
                      src="/placeholder.svg?key=rupay"
                      alt="RuPay"
                      className="h-8 w-12 object-contain border rounded"
                    />
                    <img
                      src="/placeholder.svg?key=amex"
                      alt="American Express"
                      className="h-8 w-12 object-contain border rounded"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="upi" className="space-y-4 mt-6">
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input
                      id="upiId"
                      placeholder="yourname@paytm"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Popular UPI Apps</p>
                    <div className="grid grid-cols-4 gap-3">
                      {["Google Pay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                        <Button key={app} variant="outline" className="h-16 flex-col gap-1 bg-transparent">
                          <div className="w-8 h-8 bg-muted rounded"></div>
                          <span className="text-xs">{app}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      You will be redirected to your UPI app to complete the payment
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="wallet" className="space-y-4 mt-6">
                  <RadioGroup value={selectedWallet} onValueChange={setSelectedWallet}>
                    {[
                      { id: "paytm", name: "Paytm Wallet", balance: "₹2,450" },
                      { id: "mobikwik", name: "MobiKwik", balance: "₹1,200" },
                      { id: "freecharge", name: "FreeCharge", balance: "₹850" },
                      { id: "amazonpay", name: "Amazon Pay", balance: "₹3,100" },
                    ].map((wallet) => (
                      <div key={wallet.id} className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value={wallet.id} id={wallet.id} />
                        <div className="flex-1 flex justify-between items-center">
                          <Label htmlFor={wallet.id} className="font-medium">
                            {wallet.name}
                          </Label>
                          <span className="text-sm text-muted-foreground">Balance: {wallet.balance}</span>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Items */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Price Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Delivery</span>
                  <span>FREE</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              {/* Security Info */}
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>100% secure payments</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="h-4 w-4 text-blue-600" />
                  <span>Delivery by Tomorrow</span>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handlePayment}>
                <Check className="h-4 w-4 mr-2" />
                Place Order
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By placing your order, you agree to our Terms & Conditions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

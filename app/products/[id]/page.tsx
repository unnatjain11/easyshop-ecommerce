"use client"

import { useState, use } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/components/cart-provider"
import { ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { Card } from "@/components/ui/card"
import { productData } from "@/lib/product-data"
import Link from "next/link"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()
  const { addToCart } = useCart()

  // Find the product by ID
  const product = Object.values(productData)
    .flat()
    .find(product => product.id === id)

  // Handle if product not found
  if (!product) {
    // Handle if it's a category page
    if (['smartphones', 'laptops', 'smartwatches', 'luxurywatches', 'audio', 'accessories'].includes(id)) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 capitalize">{id}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productData[id]?.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <div className="p-0">
                  <div className="relative">
                    <Link href={`/products/${product.id}`}>
                      <div className="overflow-hidden">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-[200px] object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    {product.badge && (
                      <div className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs rounded shadow">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="font-medium hover:underline">{product.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">₹{product.price.toLocaleString()}</p>
                  </div>
                  <div className="p-4 pt-0">
                    <Button 
                      className="w-full" 
                      size="sm"
                      onClick={() => {
                        addToCart({...product, quantity: 1})
                        toast({
                          title: "Added to cart",
                          description: `${product.name} has been added to your cart.`,
                        })
                      }}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )
    }
    
    return notFound()
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} (Qty: ${quantity}) has been added to your cart.`,
    })
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="relative aspect-square">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg cursor-pointer hover:opacity-75"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mt-2">
              ₹{product.price.toLocaleString()}
            </p>
          </div>

          <p className="text-muted-foreground">{product.description || "No description available"}</p>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features?.map((feature, index) => (
                <li key={index} className="text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>

          <Card className="p-4">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Brand: {product.brand || 'EasyShop'}</p>
              <p>• Model: {product.model || 'ES-2024'}</p>
              <p>• Warranty: {product.warranty || '1 Year'}</p>
              <p>• Country of Origin: India</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

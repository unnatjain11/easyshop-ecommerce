"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { productData, Product } from "@/lib/product-data"

export default function ProductsPage() {
  const { addToCart } = useCart()
  const { toast } = useToast()
  
  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }
  
  // Create a list of featured products from all categories
  const featuredProducts = [
    ...productData.smartphones.slice(0, 2),
    ...productData.laptops.slice(0, 2),
    ...productData.smartwatches.slice(0, 1),
    ...productData.luxurywatches.slice(0, 1),
    ...productData.audio.slice(0, 1),
    ...productData.accessories.slice(0, 1),
  ]

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
          <p className="text-muted-foreground">Browse our collection of products across categories</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/products/smartphones">
            <Button variant="outline">Smartphones</Button>
          </Link>
          <Link href="/products/laptops">
            <Button variant="outline">Laptops</Button>
          </Link>
          <Link href="/products/smartwatches">
            <Button variant="outline">Smart Watches</Button>
          </Link>
          <Link href="/products/luxurywatches">
            <Button variant="outline">Luxury Watches</Button>
          </Link>
          <Link href="/products/audio">
            <Button variant="outline">Audio</Button>
          </Link>
          <Link href="/products/accessories">
            <Button variant="outline">Accessories</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="relative">
                <Link href={`/products/${product.id}`}>
                  <div className="overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-[200px] object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
                {product.badge && (
                  <Badge className="absolute top-2 right-2 bg-white text-black px-2 py-1 text-xs rounded shadow">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-medium hover:underline">{product.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground">₹{product.price.toLocaleString()}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button 
                className="w-full" 
                size="sm"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <CategoryCard 
            title="Smartphones" 
            image="/products/smartphones.jpg" 
            href="/products/smartphones" 
          />
          <CategoryCard 
            title="Laptops" 
            image="/products/laptops.jpg" 
            href="/products/laptops" 
          />
          <CategoryCard 
            title="Smart Watches" 
            image="/products/smartwatches.jpg" 
            href="/products/smartwatches" 
          />
          <CategoryCard 
            title="Luxury Watches" 
            image="/products/luxurywatches.jpg" 
            href="/products/luxurywatches" 
          />
          <CategoryCard 
            title="Audio" 
            image="/products/audio.jpg" 
            href="/products/audio" 
          />
          <CategoryCard 
            title="Accessories" 
            image="/products/accessories.jpg" 
            href="/products/accessories" 
          />
        </div>
      </div>
    </div>
  )
}

function CategoryCard({ title, image, href }: { title: string; image: string; href: string }) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative">
            <div className="overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className="w-full h-[200px] object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{title}</h3>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

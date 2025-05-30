"use client"

import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { useCart } from "@/components/cart-provider"
import { productData } from "@/lib/product-data"

type FeaturedProductsProps = {
  category: "electronics" | "watches"
}

export function FeaturedProducts({ category }: FeaturedProductsProps) {
  const { addToCart } = useCart()
  let products = []
  if (category === "electronics") {
    products = [
      ...productData.smartphones.slice(0, 1),
      ...productData.laptops.slice(0, 2),
      ...productData.audio.slice(0, 1),
    ]
  } else if (category === "watches") {
    products = [
      ...productData.smartwatches.slice(0, 2),
      ...productData.luxurywatches.slice(0, 2),
    ]
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <CardContent className="p-0">
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
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

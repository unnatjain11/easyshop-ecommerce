import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function CategorySection() {
  const categories = [
    {
      name: "Smartphones",
      image: "/products/smartphones.jpg",
      href: "/products/smartphones",
    },
    {
      name: "Laptops",
      image: "/products/laptops.jpg",
      href: "/products/laptops",
    },
    {
      name: "Smart Watches",
      image: "/products/smartwatches.jpg",
      href: "/products/smartwatches",
    },
    {
      name: "Luxury Watches",
      image: "/products/luxurywatches.jpg",
      href: "/products/luxurywatches",
    },
    {
      name: "Audio",
      image: "/products/audio.jpg",
      href: "/products/audio",
    },
    {
      name: "Accessories",
      image: "/products/accessories.jpg",
      href: "/products/accessories",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <Link key={category.name} href={category.href}>
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium">{category.name}</h3>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

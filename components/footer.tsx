import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <h2 className="text-lg font-bold">EasyShop</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Your one-stop shop for electronics and watches. Quality products at affordable prices.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link
                href="https://facebook.com"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Shop</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/products/smartphones" className="text-muted-foreground hover:text-foreground">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/products/laptops" className="text-muted-foreground hover:text-foreground">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/products/smartwatches" className="text-muted-foreground hover:text-foreground">
                  Smart Watches
                </Link>
              </li>
              <li>
                <Link href="/products/luxurywatches" className="text-muted-foreground hover:text-foreground">
                  Luxury Watches
                </Link>
              </li>
              <li>
                <Link href="/products/audio" className="text-muted-foreground hover:text-foreground">
                  Audio
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="text-muted-foreground hover:text-foreground">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/return-policy" className="text-muted-foreground hover:text-foreground">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} EasyShop. All rights reserved by Unnat Jain & JS Foundation. 
          </p>
        </div>
      </div>
    </footer>
  )
}

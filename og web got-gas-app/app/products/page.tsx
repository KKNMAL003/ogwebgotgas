"use client"

import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    title: "9 Kg LP Gas Bottle REFILL",
    description: "Small knee height bottle used for braai's, stoves & heaters. REFILL ONLY!",
    price: 344.0,
  },
  {
    id: 2,
    title: "19 Kg LP Gas Bottle REFILL",
    description: "Mid sized bottle used for braai's, stoves, heaters and small gas water heaters. REFILL ONLY!",
    price: 727.0,
  },
  {
    id: 3,
    title: "48 Kg LP Gas Bottle REFILL",
    description: "Large bottle for fireplaces, water heaters, restaurants, commercial, industrial. REFILL ONLY!",
    price: 1837.0,
  },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Select Your Gas Refill</h2>
        <div className="space-y-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}


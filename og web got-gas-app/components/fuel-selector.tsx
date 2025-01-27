"use client"

import { Button } from "@/components/ui/button"
import { Fuel, Droplet } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function FuelSelector() {
  const router = useRouter()

  const handleDisabledClick = () => {
    router.push("/contact")
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Select Fuel Type</h2>
      <div className="grid grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="flex flex-col items-center justify-center py-6 space-y-4 bg-zinc-900 border-zinc-800 opacity-50 cursor-not-allowed h-auto"
          onClick={handleDisabledClick}
        >
          <Fuel className="w-12 h-12" />
          <span>Diesel</span>
        </Button>
        <Button
          className="flex flex-col items-center justify-center py-6 space-y-4 bg-[#FF6B45] hover:bg-[#FF6B45]/90 text-white h-auto"
          asChild
        >
          <Link href="/products">
            <Droplet className="w-12 h-12" />
            <span>Gas</span>
          </Link>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center justify-center py-6 space-y-4 bg-zinc-900 border-zinc-800 opacity-50 cursor-not-allowed h-auto"
          onClick={handleDisabledClick}
        >
          <Fuel className="w-12 h-12" />
          <span>Petrol</span>
        </Button>
      </div>
    </div>
  )
}


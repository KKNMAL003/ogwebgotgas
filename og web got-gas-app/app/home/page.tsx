import { MapView } from "@/components/map-view"
import { FuelSelector } from "@/components/fuel-selector"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-[#FF6B45]">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <div>
            <p className="text-sm text-zinc-500">Your Location</p>
            <h1 className="text-xl font-semibold">Johannesburg, South Africa</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 space-y-8">
        <MapView />
        <FuelSelector />
      </div>
    </div>
  )
}


"use client"

import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MapView() {
  return (
    <div className="relative w-full h-[300px] bg-zinc-900 rounded-lg overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 bg-[#121212] opacity-90">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 rounded-full bg-[#FF6B45] animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FF6B45] opacity-20 animate-ping" />
        </div>

        {/* Decorative Map Markers */}
        <div className="absolute top-1/4 left-1/4">
          <MapPin className="w-5 h-5 text-zinc-700" />
        </div>
        <div className="absolute bottom-1/4 right-1/3">
          <MapPin className="w-5 h-5 text-zinc-700" />
        </div>
      </div>

      {/* Station Card */}
      <Card className="absolute left-4 right-4 bottom-4 bg-zinc-900/90 border-zinc-800">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-800 rounded-lg">
              <MapPin className="w-5 h-5 text-[#FF6B45]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Onolo Gas</h3>
              <p className="text-sm text-zinc-400">Johannesburg, South Africa</p>
            </div>
          </div>
          <p className="text-[#FF6B45] text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B45]" />
            Open from 7 am to 10 pm
          </p>
          <Button asChild className="w-full bg-[#FF6B45] hover:bg-[#FF6B45]/90 text-white rounded-xl">
            <Link href="/products">Ask for a delivery</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}


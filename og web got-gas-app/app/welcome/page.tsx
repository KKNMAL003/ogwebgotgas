"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function WelcomePage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-6">
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl mx-auto w-full">
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <h1 className="text-7xl font-bold tracking-tighter">
              <span className="text-[#FF6B45]">Fast</span> & <span className="text-[#FF6B45]">Reliable</span>
            </h1>
            <p className="text-lg text-muted-foreground">Don't worry, we will deliver your fuel wherever you wish</p>
          </div>

          <div className="w-full h-px bg-border/5" />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Secure Payment</span>
            </div>
          </div>

          <Button
            onClick={() => router.push("/home")}
            className="w-full sm:w-auto bg-[#FF6B45] hover:bg-[#FF6B45]/90 text-white rounded-full"
            size="lg"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="flex justify-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-2 h-2 rounded-full bg-border" />
            <span className="w-2 h-2 rounded-full bg-border" />
          </div>
        </div>
      </div>
    </div>
  )
}


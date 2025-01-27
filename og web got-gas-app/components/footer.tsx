"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribed:", email)
    toast({
      title: "Subscribed!",
      description: "You've successfully subscribed to our newsletter.",
    })
    setEmail("")
  }

  return (
    <footer className="bg-secondary/50 border-t border-border/10">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold mb-4 text-primary">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email here..."
                className="bg-background rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-primary">Customer Info</h3>
            <ul className="space-y-3">
              {["About Us", "Contact Us", "Delivery", "Gas Safety Tips"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-primary">Contact</h3>
            <div className="space-y-3">
              {[
                "Onolo Group (Pty) Ltd",
                "472 Spionkop Avenue,",
                "Unit A23 Co.Space Entrepreneurial Village",
                "Kya Sand, 2163",
                "info@onolo.co.za",
              ].map((line) => (
                <p key={line} className="text-foreground/70">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-foreground/50">
          <p>&copy; 2025 Onolo Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


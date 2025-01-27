"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, ShoppingCart, MessageCircle, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Cart } from "./cart"
import { Chat } from "./chat"

export function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const NavItem = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center justify-center flex-1 h-full transition-all duration-200",
        isActive(href) ? "text-[#FF6B45] brightness-125 scale-110" : "text-[#FF6B45]",
      )}
    >
      <Icon className={cn("h-5 w-5", isActive(href) && "drop-shadow-lg")} />
      <span className={cn("text-xs mt-1", isActive(href) && "font-semibold")}>{label}</span>
    </Link>
  )

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border/5">
      <div className="flex items-center justify-around h-16">
        <NavItem href="/home" icon={Home} label="Home" />
        <NavItem href="/products" icon={ShoppingBag} label="Order" />
        <Cart iconColor="#FF6B45" textColor="#FF6B45" isActive={isActive("/cart")} />
        <Chat iconColor="#FF6B45" textColor="#FF6B45" isActive={isActive("/chat")} />
        <Sheet>
          <SheetTrigger className="flex flex-col items-center justify-center flex-1 h-full text-[#FF6B45]">
            <Menu className="h-5 w-5" />
            <span className="text-xs mt-1">Menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Customer Info</h3>
                <div className="space-y-4">
                  {[
                    { title: "About Us", href: "/about" },
                    { title: "Contact Us", href: "/contact" },
                    { title: "Delivery", href: "/delivery" },
                    { title: "Gas Safety Tips", href: "/safety" },
                  ].map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Contact</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Onolo Group (Pty) Ltd</p>
                  <p>472 Spionkop Avenue,</p>
                  <p>Unit A23 Co.Space</p>
                  <p>Kya Sand, 2163</p>
                  <p className="text-primary">info@onolo.co.za</p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}


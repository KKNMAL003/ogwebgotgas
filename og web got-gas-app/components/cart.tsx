"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/store/cart"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface CartProps {
  iconColor: string
  textColor: string
  isActive: boolean
}

export function Cart({ iconColor = "gray", textColor = "gray", isActive = false }: CartProps) {
  const [open, setOpen] = useState(false)
  const { items, removeItem, updateQuantity, total } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    setOpen(false)
    router.push("/checkout")
  }

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className={cn(
            "flex flex-col items-center justify-center flex-1 h-full relative text-muted-foreground transition-all duration-200",
            isActive ? "text-[#FF6B45] brightness-125 scale-110" : "",
          )}
        >
          <ShoppingCart
            className={cn("h-5 w-5", isActive && "drop-shadow-lg")}
            style={{ color: isActive ? "#FF6B45" : iconColor }}
          />
          <span
            className={cn("text-xs mt-1", isActive && "font-semibold")}
            style={{ color: isActive ? "#FF6B45" : textColor }}
          >
            Cart
          </span>
          {items.length > 0 && (
            <span className="absolute top-1 right-1/4 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground">Your cart is empty</p>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 bg-secondary rounded-2xl p-4">
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">R {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-full"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full text-destructive"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex justify-between mb-4">
                  <span>Total</span>
                  <span className="font-bold">R {calculateTotal().toFixed(2)}</span>
                </div>
                <Button className="w-full rounded-full" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}


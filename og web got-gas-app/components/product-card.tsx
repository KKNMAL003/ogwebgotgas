import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { GasIcon } from "./icons"
import { useCart } from "@/store/cart"

interface ProductCardProps {
  id: number
  title: string
  description: string
  price: number
}

export function ProductCard({ id, title, description, price }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <Card className="bg-secondary/50 border-border/10 overflow-hidden">
      <CardHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#FF6B45] rounded-full">
            <GasIcon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="font-bold mt-4 text-2xl text-[#FF6B45]">R {price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-6">
        <Button
          onClick={() => addItem({ id, title, price })}
          className="w-full rounded-full bg-[#FF6B45] hover:bg-[#FF6B45]/90 text-white"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}


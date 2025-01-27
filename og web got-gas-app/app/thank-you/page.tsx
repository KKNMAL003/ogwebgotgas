import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 pt-24">
      <Card className="max-w-md mx-auto bg-secondary/50 border-border/10">
        <CardHeader>
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
          <CardTitle className="text-center">Order Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground">
            Thank you for your order. We'll send you a confirmation email with your order details.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild className="rounded-full">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}


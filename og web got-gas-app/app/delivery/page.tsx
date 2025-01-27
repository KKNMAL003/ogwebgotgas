// app/delivery/page.tsx
export default function DeliveryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Delivery Information</h1>
      <p className="mb-4">Got Gas offers fast and reliable delivery services:</p>
      <ul className="list-disc list-inside">
        <li>Same-day delivery for orders placed before 2 PM</li>
        <li>Free delivery for orders over R500</li>
        <li>Delivery available 7 days a week</li>
        <li>Real-time tracking of your delivery</li>
      </ul>
    </div>
  )
}


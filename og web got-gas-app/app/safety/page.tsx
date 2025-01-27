// app/safety/page.tsx
export default function SafetyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Gas Safety Tips</h1>
      <ul className="list-disc list-inside">
        <li>Always keep gas cylinders in a well-ventilated area</li>
        <li>Check for leaks using soapy water, never with an open flame</li>
        <li>Turn off the gas at the cylinder when not in use</li>
        <li>Regularly inspect your gas appliances and connections</li>
        <li>Never use gas appliances intended for outdoor use indoors</li>
      </ul>
    </div>
  )
}


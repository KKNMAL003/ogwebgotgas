import Image from "next/image"
import Link from "next/link"
import { MapPin, User } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/5">
      <div className="container mx-auto flex justify-between items-center h-14 px-4">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-1.5">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled.jpg-ZyeMIc6wgwyI7kUyqtwhQ8Lc1DIAa6.jpeg"
              alt="Onolo Group Logo"
              width={24}
              height={24}
              className="brightness-100"
            />
          </div>
          <h1 className="text-lg font-bold text-primary">Onolo Group</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center text-foreground/80 bg-secondary/50 px-3 py-1.5 rounded-full">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm">Your Location</span>
          </div>
          <Link
            href="/dashboard"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/50 text-foreground/80"
          >
            <User className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}


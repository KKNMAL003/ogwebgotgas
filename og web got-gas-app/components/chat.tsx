"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
}

interface ChatProps {
  iconColor: string
  textColor: string
  isActive: boolean
}

export function Chat({ iconColor, textColor, isActive }: ChatProps) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I assist you today?", sender: "bot" },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = { id: messages.length + 1, text: input, sender: "user" }
      setMessages([...messages, newMessage])
      setInput("")

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: "Thank you for your message. Our team will get back to you soon.",
          sender: "bot",
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
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
          <MessageCircle
            className={cn("h-5 w-5", isActive && "drop-shadow-lg")}
            style={{ color: isActive ? "#FF6B45" : iconColor }}
          />
          <span
            className={cn("text-xs mt-1", isActive && "font-semibold")}
            style={{ color: isActive ? "#FF6B45" : textColor }}
          >
            Chat
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Chat Assistant</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-grow mt-4 -mx-6 px-6">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex items-center mt-4">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-grow"
          />
          <Button onClick={handleSend} className="ml-2" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}


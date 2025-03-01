"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Building2, Users, FileText, BookOpen, Mail, Home, Info, UserSquare2 } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Speakers", href: "/speakers", icon: Users },
    { name: "Call for Papers", href: "/call-for-papers", icon: FileText },
    { name: "Registration", href: "/registration", icon: UserSquare2 },
    { name: "Publications", href: "/publications", icon: BookOpen },
    { name: "Committee", href: "/committee", icon: Building2 },
    { name: "Contact", href: "/contact", icon: Mail },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold">ICSEIT 2K25</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "inline-flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}


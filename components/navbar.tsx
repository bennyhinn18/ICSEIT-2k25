"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Building2, Users, FileText, BookOpen, Mail, Home, Info, UserSquare2, Menu } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

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
    <nav className="sticky top-0 z-50 w-full border-b bg-[#212429] backdrop-blur supports-[backdrop-filter]:bg-[#212429]">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 justify-start items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://infance-tony.github.io/ICSEIT-2K25/logo1.png"
              alt="Logo"
              width={80}
              height={90}
              className=" object-contain ml-0"
            />
            <span className="text-xl font-bold text-primary">ICSEIT 2K25</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <button
            className="md:hidden inline-flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="mr-2 h-4 w-4" />
            
          </button>
          <div className={`md:flex ${menuOpen ? "block" : "hidden"} space-x-2`}>
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
      </div>
    </nav>
  )
}


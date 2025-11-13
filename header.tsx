"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white">
              💻
            </div>
            CodeMaster
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#cursos" className="text-sm text-muted-foreground hover:text-foreground transition">
              Cursos
            </Link>
            <Link href="#projetos" className="text-sm text-muted-foreground hover:text-foreground transition">
              Projetos
            </Link>
            <Link href="#comunidade" className="text-sm text-muted-foreground hover:text-foreground transition">
              Comunidade
            </Link>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">
              Começar Gratuitamente
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            <Link href="#cursos" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Cursos
            </Link>
            <Link href="#projetos" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Projetos
            </Link>
            <Link href="#comunidade" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Comunidade
            </Link>
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition">
              Começar Gratuitamente
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

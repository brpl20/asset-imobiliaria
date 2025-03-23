"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-black">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gold">ASSET</span>
          <span className="hidden sm:inline-block text-sm font-medium text-brown">Inteligência Imobiliária</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-gold",
              isActive("/") ? "text-gold" : "text-brown",
            )}
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className={cn(
              "text-sm font-medium transition-colors hover:text-gold",
              isActive("/sobre") ? "text-gold" : "text-brown",
            )}
          >
            Sobre
          </Link>
          <Link
            href="/servicos"
            className={cn(
              "text-sm font-medium transition-colors hover:text-gold",
              isActive("/servicos") ? "text-gold" : "text-brown",
            )}
          >
            Serviços
          </Link>
          <Link
            href="/imoveis"
            className={cn(
              "text-sm font-medium transition-colors hover:text-gold",
              isActive("/imoveis") ? "text-gold" : "text-brown",
            )}
          >
            Imóveis
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-sm font-medium transition-colors hover:text-gold",
              isActive("/blog") ? "text-gold" : "text-brown",
            )}
          >
            Blog
          </Link>
          <Link
            href="/contato"
            className={cn(
              "text-sm font-medium transition-colors hover:text-gold",
              isActive("/contato") ? "text-gold" : "text-brown",
            )}
          >
            Contato
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/admin/login" 
            className="px-4 py-2 rounded-md bg-gold text-black font-medium text-sm hover:bg-opacity-90 transition-colors"
          >
            Área do Cliente
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className={cn(
                "block py-2 text-base font-medium",
                isActive("/") ? "text-gold" : "text-brown",
              )}
              onClick={toggleMenu}
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className={cn(
                "block py-2 text-base font-medium",
                isActive("/sobre") ? "text-gold" : "text-brown",
              )}
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            <Link
              href="/servicos"
              className={cn(
                "block py-2 text-base font-medium",
                isActive("/servicos") ? "text-gold" : "text-brown",
              )}
              onClick={toggleMenu}
            >
              Serviços
            </Link>
            <Link
              href="/imoveis"
              className={cn(
                "block py-2 text-base font-medium",
                isActive("/imoveis") ? "text-gold" : "text-brown",
              )}
              onClick={toggleMenu}
            >
              Imóveis
            </Link>
            <Link
              href="/blog"
              className={cn(
                "block py-2 text-base font-medium",
                isActive("/blog") ? "text-gold" : "text-brown",
              )}
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/contato"
              className={cn(
                "block py-2 text-base font-medium",
                isActive("/contato") ? "text-gold" : "text-brown",
              )}
              onClick={toggleMenu}
            >
              Contato
            </Link>
            <div className="pt-4 border-t border-gold/10">
              <Link
                href="/admin/login"
                className="block py-2 text-base font-medium text-gold"
                onClick={toggleMenu}
              >
                Área do Cliente
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


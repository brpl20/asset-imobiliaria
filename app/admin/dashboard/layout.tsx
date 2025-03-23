"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, FileText, Home, LogOut, Menu, MessageSquare, Settings, User, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const isActive = (path: string) => pathname === path

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: Home },
    { name: "Blog", href: "/admin/dashboard/blog", icon: FileText },
    { name: "Imóveis", href: "/admin/dashboard/imoveis", icon: BarChart2 },
    { name: "Mensagens", href: "/admin/dashboard/mensagens", icon: MessageSquare },
    { name: "Usuários", href: "/admin/dashboard/usuarios", icon: User },
    { name: "Configurações", href: "/admin/dashboard/configuracoes", icon: Settings },
  ]

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar para mobile */}
      {isMobile && isSidebarOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleSidebar} />

          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-black">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Fechar sidebar</span>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <span className="text-2xl font-bold text-gold">ASSET</span>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      isActive(item.href)
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-base font-medium rounded-md",
                    )}
                  >
                    <item.icon
                      className={cn(
                        isActive(item.href) ? "text-gold" : "text-gray-400 group-hover:text-gray-300",
                        "mr-4 flex-shrink-0 h-6 w-6",
                      )}
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-800 p-4">
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <div className="h-10 w-10 rounded-full bg-brown flex items-center justify-center text-white">
                      A
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gold">Admin</p>
                    <Link
                      href="/admin/login"
                      className="text-sm font-medium text-gray-400 group-hover:text-gold flex items-center"
                    >
                      <LogOut className="mr-2 h-4 w-4" /> Sair
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar para desktop */}
      {!isMobile && (
        <div
          className={cn(
            "flex flex-col flex-shrink-0 bg-black transition-all duration-300",
            isSidebarOpen ? "w-64" : "w-20",
          )}
        >
          <div className="flex flex-col h-0 flex-1">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                {isSidebarOpen ? (
                  <span className="text-2xl font-bold text-gold">ASSET</span>
                ) : (
                  <span className="text-2xl font-bold text-gold">A</span>
                )}
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      isActive(item.href)
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                      !isSidebarOpen && "justify-center",
                    )}
                  >
                    <item.icon
                      className={cn(
                        isActive(item.href) ? "text-gold" : "text-gray-400 group-hover:text-gray-300",
                        "flex-shrink-0 h-6 w-6",
                        isSidebarOpen && "mr-3",
                      )}
                    />
                    {isSidebarOpen && <span>{item.name}</span>}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-800 p-4">
              <div className="flex-shrink-0 w-full group block">
                {isSidebarOpen ? (
                  <div className="flex items-center">
                    <div>
                      <div className="h-10 w-10 rounded-full bg-brown flex items-center justify-center text-white">
                        A
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gold">Admin</p>
                      <Link
                        href="/admin/login"
                        className="text-xs font-medium text-gray-400 group-hover:text-gold flex items-center"
                      >
                        <LogOut className="mr-1 h-3 w-3" /> Sair
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full bg-brown flex items-center justify-center text-white">
                      A
                    </div>
                    <Link
                      href="/admin/login"
                      className="mt-2 text-xs font-medium text-gray-400 group-hover:text-gold"
                    >
                      <LogOut className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            className="px-4 border-r border-gray-200 text-brown focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold lg:hidden"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Abrir sidebar</span>
            <Menu className="h-6 w-6" />
          </button>

          {!isMobile && (
            <button
              className="px-4 text-brown focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold hidden lg:block"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </button>
          )}

          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-2xl font-semibold text-brown">
                {navigation.find((item) => isActive(item.href))?.name || "Dashboard"}
              </h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-white p-1 rounded-full text-brown hover:text-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold">
                <span className="sr-only">Ver notificações</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}


import type React from "react"
import { Archivo } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: {
    default: "ASSET: Inteligência Imobiliária",
    template: "%s | ASSET: Inteligência Imobiliária",
  },
  description:
    "Especialistas em inteligência imobiliária, oferecendo insights valiosos para investimentos no mercado imobiliário brasileiro.",
  keywords: [
    "imobiliária",
    "investimentos imobiliários",
    "mercado imobiliário",
    "consultoria imobiliária",
    "brasil",
    "imóveis",
  ],
  authors: [{ name: "ASSET" }],
  creator: "ASSET: Inteligência Imobiliária",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://asset-imobiliaria.com.br",
    title: "ASSET: Inteligência Imobiliária",
    description:
      "Especialistas em inteligência imobiliária, oferecendo insights valiosos para investimentos no mercado imobiliário brasileiro.",
    siteName: "ASSET: Inteligência Imobiliária",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
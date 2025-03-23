import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary text-xl font-bold mb-4">ASSET</h3>
            <p className="text-gray-300 mb-4">
              Inteligência Imobiliária para investimentos estratégicos e valorização do seu patrimônio.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-primary">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-primary">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/imoveis" className="text-gray-300 hover:text-primary">
                  Imóveis
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/consultoria" className="text-gray-300 hover:text-primary">
                  Consultoria Imobiliária
                </Link>
              </li>
              <li>
                <Link href="/servicos/avaliacao" className="text-gray-300 hover:text-primary">
                  Avaliação de Imóveis
                </Link>
              </li>
              <li>
                <Link href="/servicos/investimentos" className="text-gray-300 hover:text-primary">
                  Análise de Investimentos
                </Link>
              </li>
              <li>
                <Link href="/servicos/compra-venda" className="text-gray-300 hover:text-primary">
                  Compra e Venda
                </Link>
              </li>
              <li>
                <Link href="/servicos/locacao" className="text-gray-300 hover:text-primary">
                  Locação
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-300">Av. Paulista, 1000, São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">(11) 3000-0000</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <a href="mailto:contato@asset-imobiliaria.com.br" className="text-gray-300 hover:text-primary">
                  contato@asset-imobiliaria.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ASSET: Inteligência Imobiliária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


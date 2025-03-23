import Link from "next/link"
import { ArrowUpRight, Building, FileText, MessageSquare, TrendingUp } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary/10 rounded-md p-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total de Posts</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">24</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link
                href="/admin/dashboard/blog"
                className="font-medium text-secondary hover:text-secondary/80 flex items-center"
              >
                Ver todos os posts
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary/10 rounded-md p-3">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Imóveis Cadastrados</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">42</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link
                href="/admin/dashboard/imoveis"
                className="font-medium text-secondary hover:text-secondary/80 flex items-center"
              >
                Ver todos os imóveis
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-primary/10 rounded-md p-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Mensagens Recebidas</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">18</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link
                href="/admin/dashboard/mensagens"
                className="font-medium text-secondary hover:text-secondary/80 flex items-center"
              >
                Ver todas as mensagens
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Últimos Posts</h2>
            <Link href="/admin/dashboard/blog" className="text-sm font-medium text-secondary hover:text-secondary/80">
              Ver todos
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { id: 1, title: "Análise do Mercado Imobiliário em 2023", date: "15/06/2023", status: "Publicado" },
              {
                id: 2,
                title: "Como Avaliar o Potencial de Valorização de um Imóvel",
                date: "22/05/2023",
                status: "Publicado",
              },
              { id: 3, title: "Financiamento Imobiliário: Guia Completo", date: "10/04/2023", status: "Publicado" },
              { id: 4, title: "Tendências para o Mercado Imobiliário em 2024", date: "05/03/2023", status: "Rascunho" },
            ].map((post) => (
              <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{post.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                </div>
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      post.status === "Publicado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {post.status}
                  </span>
                  <Link href={`/admin/dashboard/blog/${post.id}`} className="ml-4 text-gray-400 hover:text-gray-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Imóveis em Destaque</h2>
            <Link
              href="/admin/dashboard/imoveis"
              className="text-sm font-medium text-secondary hover:text-secondary/80"
            >
              Ver todos
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { id: 1, title: "Apartamento de Luxo em Moema", price: "R$ 2.500.000", status: "Ativo" },
              { id: 2, title: "Cobertura Duplex no Itaim Bibi", price: "R$ 5.800.000", status: "Ativo" },
              { id: 3, title: "Casa em Condomínio na Barra da Tijuca", price: "R$ 4.200.000", status: "Ativo" },
              { id: 4, title: "Sala Comercial na Faria Lima", price: "R$ 1.800.000", status: "Inativo" },
            ].map((property) => (
              <div key={property.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{property.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{property.price}</p>
                </div>
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      property.status === "Ativo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {property.status}
                  </span>
                  <Link
                    href={`/admin/dashboard/imoveis/${property.id}`}
                    className="ml-4 text-gray-400 hover:text-gray-500"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Desempenho do Site</h2>
            <div className="flex space-x-3">
              <button className="text-xs font-medium text-gray-500 hover:text-gray-700 px-2 py-1 rounded-md bg-gray-100">
                7 dias
              </button>
              <button className="text-xs font-medium text-white px-2 py-1 rounded-md bg-secondary">30 dias</button>
              <button className="text-xs font-medium text-gray-500 hover:text-gray-700 px-2 py-1 rounded-md bg-gray-100">
                90 dias
              </button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center">
            <TrendingUp className="h-24 w-24 text-gray-200" />
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Mensagens Recentes</h2>
            <Link
              href="/admin/dashboard/mensagens"
              className="text-sm font-medium text-secondary hover:text-secondary/80"
            >
              Ver todas
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { id: 1, name: "João Silva", subject: "Interesse em Apartamento", date: "18/06/2023", read: false },
              { id: 2, name: "Maria Oliveira", subject: "Dúvida sobre Financiamento", date: "16/06/2023", read: true },
              { id: 3, name: "Carlos Santos", subject: "Avaliação de Imóvel", date: "15/06/2023", read: true },
            ].map((message) => (
              <div key={message.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{message.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{message.subject}</p>
                  <p className="text-xs text-gray-400 mt-1">{message.date}</p>
                </div>
                <div className="flex items-center">
                  {!message.read && <span className="inline-flex h-2 w-2 rounded-full bg-primary"></span>}
                  <Link
                    href={`/admin/dashboard/mensagens/${message.id}`}
                    className="ml-4 text-gray-400 hover:text-gray-500"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


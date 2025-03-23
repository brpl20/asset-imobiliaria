"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, Edit, Eye, Plus, Search, Trash } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "Análise do Mercado Imobiliário em 2023: Tendências e Oportunidades",
    excerpt:
      "Um panorama completo do mercado imobiliário brasileiro em 2023, com análise de tendências, oportunidades de investimento e previsões para os próximos anos.",
    date: "15/06/2023",
    author: "Ricardo Santos",
    category: "Análise de Mercado",
    status: "Publicado",
    views: 1245,
  },
  {
    id: 2,
    title: "Como Avaliar o Potencial de Valorização de um Imóvel",
    excerpt:
      "Descubra os principais fatores que influenciam a valorização de um imóvel e aprenda a identificar propriedades com alto potencial de retorno sobre investimento.",
    date: "22/05/2023",
    author: "Ana Oliveira",
    category: "Investimentos",
    status: "Publicado",
    views: 987,
  },
  {
    id: 3,
    title: "Financiamento Imobiliário: Guia Completo para Escolher a Melhor Opção",
    excerpt:
      "Um guia detalhado sobre as diferentes modalidades de financiamento imobiliário disponíveis no Brasil, com dicas para escolher a opção mais adequada ao seu perfil.",
    date: "10/04/2023",
    author: "Paulo Mendes",
    category: "Financiamento",
    status: "Publicado",
    views: 856,
  },
  {
    id: 4,
    title: "Os Impactos da Taxa Selic no Mercado Imobiliário",
    excerpt:
      "Entenda como as variações na taxa Selic afetam o mercado imobiliário, os financiamentos e as decisões de investimento em imóveis.",
    date: "18/03/2023",
    author: "Carla Rodrigues",
    category: "Economia",
    status: "Publicado",
    views: 723,
  },
  {
    id: 5,
    title: "Investimento em Imóveis Comerciais: Riscos e Oportunidades",
    excerpt:
      "Uma análise detalhada sobre o investimento em imóveis comerciais, com foco nos riscos, oportunidades e estratégias para maximizar o retorno.",
    date: "25/02/2023",
    author: "Ricardo Santos",
    category: "Investimentos",
    status: "Publicado",
    views: 645,
  },
  {
    id: 6,
    title: "Locação de Imóveis: Como Maximizar o Retorno do seu Investimento",
    excerpt:
      "Dicas práticas para proprietários que desejam maximizar o retorno de seus imóveis para locação, desde a escolha do imóvel até a gestão do aluguel.",
    date: "30/01/2023",
    author: "Ana Oliveira",
    category: "Locação",
    status: "Publicado",
    views: 589,
  },
  {
    id: 7,
    title: "Tendências para o Mercado Imobiliário em 2024",
    excerpt:
      "Análise das principais tendências que devem moldar o mercado imobiliário brasileiro em 2024, com base em dados econômicos e comportamentais.",
    date: "05/03/2023",
    author: "Ricardo Santos",
    category: "Análise de Mercado",
    status: "Rascunho",
    views: 0,
  },
]

export default function BlogAdminPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("Todos")
  const [sortBy, setSortBy] = useState("date")
  const [sortOrder, setSortOrder] = useState("desc")

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
  }

  const filteredPosts = posts
    .filter(
      (post) =>
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (statusFilter === "Todos" || post.status === statusFilter),
    )
    .sort((a, b) => {
      if (sortBy === "title") {
        return sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      } else if (sortBy === "views") {
        return sortOrder === "asc" ? a.views - b.views : b.views - a.views
      } else {
        // Default sort by date
        const dateA = new Date(a.date.split("/").reverse().join("-"))
        const dateB = new Date(b.date.split("/").reverse().join("-"))
        return sortOrder === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime()
      }
    })

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Gerenciar Blog</h2>
        <Link
          href="/admin/dashboard/blog/novo"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
        >
          <Plus className="h-4 w-4 mr-2" />
          Novo Post
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm"
                placeholder="Buscar posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div>
                <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  id="status-filter"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>Todos</option>
                  <option>Publicado</option>
                  <option>Rascunho</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("title")}
                >
                  <div className="flex items-center">
                    Título
                    {sortBy === "title" && <ArrowUpDown className="ml-1 h-4 w-4" />}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Categoria
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Autor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("date")}
                >
                  <div className="flex items-center">
                    Data
                    {sortBy === "date" && <ArrowUpDown className="ml-1 h-4 w-4" />}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort("views")}
                >
                  <div className="flex items-center">
                    Visualizações
                    {sortBy === "views" && <ArrowUpDown className="ml-1 h-4 w-4" />}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{post.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.status === "Publicado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.views}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <Link href={`/blog/${post.id}`} className="text-gray-400 hover:text-gray-500" title="Visualizar">
                        <Eye className="h-5 w-5" />
                      </Link>
                      <Link
                        href={`/admin/dashboard/blog/editar/${post.id}`}
                        className="text-indigo-600 hover:text-indigo-700"
                        title="Editar"
                      >
                        <Edit className="h-5 w-5" />
                      </Link>
                      <button className="text-red-600 hover:text-red-700" title="Excluir">
                        <Trash className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Mostrando <span className="font-medium">{filteredPosts.length}</span> de{" "}
              <span className="font-medium">{posts.length}</span> posts
            </div>
            <div className="flex-1 flex justify-center sm:justify-end">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Anterior</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Próximo</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


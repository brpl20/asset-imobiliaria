"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ImageIcon, Save } from "lucide-react"

export default function NewBlogPostPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [category, setCategory] = useState("")
  const [status, setStatus] = useState("Rascunho")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulação de envio - em um ambiente real, isso seria uma chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Redirecionar para a lista de posts após o envio bem-sucedido
      alert("Post criado com sucesso!")
      // router.push('/admin/dashboard/blog')
    } catch (err) {
      console.error(err)
      alert("Erro ao criar o post. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <Link href="/admin/dashboard/blog" className="mr-4 text-gray-500 hover:text-gray-700">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h2 className="text-2xl font-bold text-gray-900">Novo Post</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Título *
                </label>
                <input
                  type="text"
                  id="title"
                  required
                  className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                  Resumo *
                </label>
                <textarea
                  id="excerpt"
                  rows={3}
                  required
                  className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
                <p className="mt-1 text-sm text-gray-500">Breve descrição do post que aparecerá na listagem do blog.</p>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Conteúdo *
                </label>
                <div className="border border-gray-300 rounded-md overflow-hidden">
                  <div className="bg-gray-50 px-3 py-2 border-b border-gray-300 flex items-center space-x-2">
                    <button type="button" className="p-1 rounded hover:bg-gray-200" title="Inserir imagem">
                      <ImageIcon className="h-5 w-5 text-gray-500" />
                    </button>
                    <button type="button" className="p-1 rounded hover:bg-gray-200 font-bold" title="Negrito">
                      B
                    </button>
                    <button type="button" className="p-1 rounded hover:bg-gray-200 italic" title="Itálico">
                      I
                    </button>
                    <button type="button" className="p-1 rounded hover:bg-gray-200 underline" title="Sublinhado">
                      U
                    </button>
                  </div>
                  <textarea
                    id="content"
                    rows={15}
                    required
                    className="block w-full border-0 focus:ring-0 sm:text-sm"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Categoria *
                  </label>
                  <select
                    id="category"
                    required
                    className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="Análise de Mercado">Análise de Mercado</option>
                    <option value="Investimentos">Investimentos</option>
                    <option value="Financiamento">Financiamento</option>
                    <option value="Economia">Economia</option>
                    <option value="Locação">Locação</option>
                    <option value="Dicas">Dicas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                    Status *
                  </label>
                  <select
                    id="status"
                    required
                    className="block w-full shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm border-gray-300 rounded-md"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Rascunho">Rascunho</option>
                    <option value="Publicado">Publicado</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Imagem de Capa</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-secondary hover:text-secondary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-secondary"
                      >
                        <span>Carregar um arquivo</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">ou arraste e solte</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-3 bg-gray-50 text-right">
            <div className="flex justify-end space-x-3">
              <Link
                href="/admin/dashboard/blog"
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:opacity-50"
              >
                <Save className="h-4 w-4 mr-2" />
                {isSubmitting ? "Salvando..." : "Salvar Post"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}


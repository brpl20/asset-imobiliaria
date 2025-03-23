import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Insights Imobiliários",
  description:
    "Artigos, análises e insights sobre o mercado imobiliário brasileiro. Fique por dentro das tendências e oportunidades de investimento.",
}

const posts = [
  {
    id: 1,
    title: "Análise do Mercado Imobiliário em 2023: Tendências e Oportunidades",
    excerpt:
      "Um panorama completo do mercado imobiliário brasileiro em 2023, com análise de tendências, oportunidades de investimento e previsões para os próximos anos.",
    date: new Date("2023-06-15"),
    author: "Ricardo Santos",
    category: "Análise de Mercado",
    image: "/placeholder.svg?height=600&width=800",
    slug: "analise-mercado-imobiliario-2023",
  },
  {
    id: 2,
    title: "Como Avaliar o Potencial de Valorização de um Imóvel",
    excerpt:
      "Descubra os principais fatores que influenciam a valorização de um imóvel e aprenda a identificar propriedades com alto potencial de retorno sobre investimento.",
    date: new Date("2023-05-22"),
    author: "Ana Oliveira",
    category: "Investimentos",
    image: "/placeholder.svg?height=600&width=800",
    slug: "como-avaliar-potencial-valorizacao-imovel",
  },
  {
    id: 3,
    title: "Financiamento Imobiliário: Guia Completo para Escolher a Melhor Opção",
    excerpt:
      "Um guia detalhado sobre as diferentes modalidades de financiamento imobiliário disponíveis no Brasil, com dicas para escolher a opção mais adequada ao seu perfil.",
    date: new Date("2023-04-10"),
    author: "Paulo Mendes",
    category: "Financiamento",
    image: "/placeholder.svg?height=600&width=800",
    slug: "financiamento-imobiliario-guia-completo",
  },
  {
    id: 4,
    title: "Os Impactos da Taxa Selic no Mercado Imobiliário",
    excerpt:
      "Entenda como as variações na taxa Selic afetam o mercado imobiliário, os financiamentos e as decisões de investimento em imóveis.",
    date: new Date("2023-03-18"),
    author: "Carla Rodrigues",
    category: "Economia",
    image: "/placeholder.svg?height=600&width=800",
    slug: "impactos-taxa-selic-mercado-imobiliario",
  },
  {
    id: 5,
    title: "Investimento em Imóveis Comerciais: Riscos e Oportunidades",
    excerpt:
      "Uma análise detalhada sobre o investimento em imóveis comerciais, com foco nos riscos, oportunidades e estratégias para maximizar o retorno.",
    date: new Date("2023-02-25"),
    author: "Ricardo Santos",
    category: "Investimentos",
    image: "/placeholder.svg?height=600&width=800",
    slug: "investimento-imoveis-comerciais",
  },
  {
    id: 6,
    title: "Locação de Imóveis: Como Maximizar o Retorno do seu Investimento",
    excerpt:
      "Dicas práticas para proprietários que desejam maximizar o retorno de seus imóveis para locação, desde a escolha do imóvel até a gestão do aluguel.",
    date: new Date("2023-01-30"),
    author: "Ana Oliveira",
    category: "Locação",
    image: "/placeholder.svg?height=600&width=800",
    slug: "locacao-imoveis-maximizar-retorno",
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6 text-primary">Blog e Insights</h1>
            <p className="text-xl">
              Acompanhe nossos artigos, análises e insights sobre o mercado imobiliário brasileiro. Fique por dentro das
              tendências e oportunidades de investimento.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="card overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary text-black text-sm font-medium py-1 px-3">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-gray-500 text-sm mb-2">
                      {formatDate(post.date)} • por {post.author}
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="text-secondary font-medium inline-flex items-center">Ler mais</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="heading-lg mb-6 text-black">Inscreva-se em nossa newsletter</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
            Receba as últimas análises e insights do mercado imobiliário diretamente em seu e-mail.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-grow px-4 py-3 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <button type="submit" className="btn-secondary whitespace-nowrap">
              Inscrever-se
            </button>
          </form>
        </div>
      </section>
    </>
  )
}


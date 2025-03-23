import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

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
]

export default function BlogPreview() {
  return (
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
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{post.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
              <div className="text-secondary font-medium inline-flex items-center">Ler mais</div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}


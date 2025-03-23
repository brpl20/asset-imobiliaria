import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, Building, Home, TrendingUp, Users } from "lucide-react"
import type { Metadata } from "next"
import FeaturedProperties from "@/components/featured-properties"
import TestimonialSlider from "@/components/testimonial-slider"
import BlogPreview from "@/components/blog-preview"

export const metadata: Metadata = {
  title: "Início | Inteligência Imobiliária",
  description:
    "ASSET: Inteligência Imobiliária - Especialistas em análise de mercado e investimentos imobiliários no Brasil.",
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Imagem de fundo de imóveis de luxo"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6 text-primary">Inteligência Imobiliária para Decisões Estratégicas</h1>
            <p className="text-xl mb-8">
              Análise de mercado, avaliação precisa e consultoria especializada para maximizar o valor do seu
              investimento imobiliário.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contato" className="btn-primary">
                Fale com um Especialista
              </Link>
              <Link href="/servicos" className="btn-outline border-primary text-primary">
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para todas as suas necessidades imobiliárias, com foco em análise de mercado
              e valorização patrimonial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BarChart2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Análise de Mercado</h3>
              <p className="text-gray-600 mb-4">
                Estudos detalhados sobre tendências, oportunidades e riscos do mercado imobiliário para embasar suas
                decisões.
              </p>
              <Link href="/servicos/analise" className="text-secondary font-medium inline-flex items-center">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consultoria de Investimentos</h3>
              <p className="text-gray-600 mb-4">
                Orientação especializada para maximizar o retorno dos seus investimentos imobiliários com estratégias
                personalizadas.
              </p>
              <Link href="/servicos/consultoria" className="text-secondary font-medium inline-flex items-center">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Building className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Avaliação de Imóveis</h3>
              <p className="text-gray-600 mb-4">
                Avaliação precisa do valor de mercado do seu imóvel com metodologias avançadas e análise comparativa.
              </p>
              <Link href="/servicos/avaliacao" className="text-secondary font-medium inline-flex items-center">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Home className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compra e Venda</h3>
              <p className="text-gray-600 mb-4">
                Intermediação especializada para compra e venda de imóveis, com foco na melhor negociação e segurança
                jurídica.
              </p>
              <Link href="/servicos/compra-venda" className="text-secondary font-medium inline-flex items-center">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Administração de Locações</h3>
              <p className="text-gray-600 mb-4">
                Gestão completa de locações, desde a captação de inquilinos até a administração do contrato e
                manutenções.
              </p>
              <Link href="/servicos/locacao" className="text-secondary font-medium inline-flex items-center">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BarChart2 className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consultoria Jurídica</h3>
              <p className="text-gray-600 mb-4">
                Assessoria jurídica especializada em transações imobiliárias, contratos e regularização de documentação.
              </p>
              <Link href="/servicos/juridico" className="text-secondary font-medium inline-flex items-center">
                Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="heading-lg mb-4">Imóveis em Destaque</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Selecionamos as melhores oportunidades do mercado para você investir ou encontrar o imóvel dos seus
                sonhos.
              </p>
            </div>
            <Link href="/imoveis" className="btn-secondary hidden md:block">
              Ver Todos
            </Link>
          </div>

          <FeaturedProperties />

          <div className="mt-8 text-center md:hidden">
            <Link href="/imoveis" className="btn-secondary">
              Ver Todos os Imóveis
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-black text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4 text-primary">Por que escolher a ASSET?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Combinamos expertise de mercado, análise de dados e atendimento personalizado para oferecer as melhores
              soluções imobiliárias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Expertise de Mercado</h3>
              <p className="text-gray-300">
                Nossa equipe possui ampla experiência e conhecimento do mercado imobiliário brasileiro, com
                especialização em diferentes segmentos e regiões.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Análise de Dados</h3>
              <p className="text-gray-300">
                Utilizamos tecnologia avançada e análise de dados para identificar tendências, oportunidades e riscos no
                mercado imobiliário.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Atendimento Personalizado</h3>
              <p className="text-gray-300">
                Cada cliente recebe um atendimento exclusivo, com soluções personalizadas de acordo com seus objetivos e
                necessidades específicas.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Transparência</h3>
              <p className="text-gray-300">
                Trabalhamos com total transparência em todas as etapas do processo, fornecendo informações claras e
                precisas para nossos clientes.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Rede de Parceiros</h3>
              <p className="text-gray-300">
                Contamos com uma ampla rede de parceiros estratégicos, incluindo advogados, arquitetos, engenheiros e
                instituições financeiras.
              </p>
            </div>

            <div className="border border-primary/30 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3 text-primary">Resultados Comprovados</h3>
              <p className="text-gray-300">
                Nossa trajetória é marcada por casos de sucesso e clientes satisfeitos, com resultados concretos em
                diferentes tipos de operações imobiliárias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">O que nossos clientes dizem</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é o nosso maior patrimônio. Confira alguns depoimentos de quem já contou
              com a ASSET.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="heading-lg mb-4">Blog e Insights</h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Acompanhe nosso blog para ficar por dentro das últimas tendências e análises do mercado imobiliário.
              </p>
            </div>
            <Link href="/blog" className="btn-secondary hidden md:block">
              Ver Todos
            </Link>
          </div>

          <BlogPreview />

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="btn-secondary">
              Ver Todos os Artigos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="heading-lg mb-6 text-black">Pronto para investir com inteligência?</h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto mb-8">
            Entre em contato conosco e descubra como podemos ajudar você a tomar as melhores decisões no mercado
            imobiliário.
          </p>
          <Link href="/contato" className="btn-secondary">
            Fale com um Especialista
          </Link>
        </div>
      </section>
    </>
  )
}


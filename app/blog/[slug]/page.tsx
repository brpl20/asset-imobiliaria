import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { ArrowLeft, Facebook, Linkedin, Twitter } from "lucide-react"
import type { Metadata } from "next"

// Normalmente, isso viria de um CMS ou banco de dados
const posts = [
  {
    id: 1,
    title: "Análise do Mercado Imobiliário em 2023: Tendências e Oportunidades",
    content: `
      <p>O mercado imobiliário brasileiro tem passado por transformações significativas nos últimos anos, influenciado por fatores econômicos, sociais e tecnológicos. Em 2023, observamos tendências importantes que moldam o setor e criam novas oportunidades para investidores e compradores.</p>
      
      <h2>Panorama Econômico</h2>
      
      <p>A economia brasileira apresentou sinais de recuperação em 2023, com a inflação mostrando tendência de queda e a taxa Selic estabilizando após um ciclo de alta. Esse cenário tem impacto direto no mercado imobiliário, especialmente no que diz respeito ao financiamento habitacional.</p>
      
      <p>Com a estabilização da taxa de juros, observamos um aumento na demanda por financiamento imobiliário, o que tem impulsionado as vendas de imóveis, principalmente no segmento residencial. As instituições financeiras também têm oferecido condições mais atrativas, com prazos mais longos e taxas competitivas.</p>
      
      <h2>Tendências do Mercado</h2>
      
      <p>Entre as principais tendências observadas no mercado imobiliário em 2023, destacam-se:</p>
      
      <ul>
        <li><strong>Valorização de imóveis em regiões específicas:</strong> Áreas com boa infraestrutura, mobilidade urbana e qualidade de vida têm apresentado valorização acima da média.</li>
        <li><strong>Aumento da demanda por imóveis sustentáveis:</strong> Cresce o interesse por empreendimentos com certificações ambientais, eficiência energética e aproveitamento de recursos naturais.</li>
        <li><strong>Expansão do mercado de segunda residência:</strong> Com a consolidação do trabalho remoto, muitas pessoas buscam imóveis em regiões litorâneas ou no interior para conciliar trabalho e qualidade de vida.</li>
        <li><strong>Crescimento do mercado de locação de longo prazo:</strong> A locação tem se mostrado uma alternativa atrativa tanto para quem busca flexibilidade quanto para investidores que desejam renda recorrente.</li>
      </ul>
      
      <h2>Oportunidades de Investimento</h2>
      
      <p>Para investidores, o mercado imobiliário continua oferecendo oportunidades interessantes em 2023. Destacamos:</p>
      
      <ul>
        <li><strong>Imóveis para renda:</strong> Apartamentos compactos em regiões centrais ou próximas a universidades e polos de emprego têm apresentado boa rentabilidade.</li>
        <li><strong>Desenvolvimento de empreendimentos sustentáveis:</strong> Projetos com foco em sustentabilidade tendem a valorizar mais e atrair um público disposto a pagar um prêmio por esses diferenciais.</li>
        <li><strong>Retrofit de imóveis antigos:</strong> A revitalização de imóveis em regiões centrais tem se mostrado uma estratégia interessante, especialmente em cidades com limitação de novos terrenos.</li>
        <li><strong>Investimento em regiões em desenvolvimento:</strong> Áreas que estão recebendo investimentos em infraestrutura e mobilidade urbana tendem a apresentar valorização significativa no médio e longo prazo.</li>
      </ul>
      
      <h2>Desafios e Riscos</h2>
      
      <p>Apesar das oportunidades, o mercado imobiliário também apresenta desafios e riscos que devem ser considerados:</p>
      
      <ul>
        <li><strong>Volatilidade econômica:</strong> Mudanças na política monetária e fiscal podem impactar o mercado imobiliário, afetando tanto a demanda quanto as condições de financiamento.</li>
        <li><strong>Saturação em determinados segmentos:</strong> Algumas regiões e tipologias de imóveis podem enfrentar excesso de oferta, o que pode pressionar os preços e a rentabilidade.</li>
        <li><strong>Mudanças regulatórias:</strong> Alterações na legislação urbanística e tributária podem afetar a viabilidade de investimentos imobiliários.</li>
      </ul>
      
      <h2>Perspectivas para os Próximos Anos</h2>
      
      <p>Para os próximos anos, esperamos a continuidade de algumas tendências observadas em 2023, com destaque para:</p>
      
      <ul>
        <li><strong>Digitalização do setor:</strong> Avanço das proptechs e adoção de tecnologias como realidade virtual, blockchain e inteligência artificial nos processos de compra, venda e gestão de imóveis.</li>
        <li><strong>Consolidação do ESG no mercado imobiliário:</strong> Critérios ambientais, sociais e de governança devem ganhar ainda mais relevância nas decisões de investimento.</li>
        <li><strong>Adaptação dos espaços às novas formas de trabalho:</strong> Imóveis residenciais com espaços para home office e empreendimentos comerciais com conceitos de coworking devem continuar em alta.</li>
      </ul>
      
      <h2>Conclusão</h2>
      
      <p>O mercado imobiliário brasileiro em 2023 apresenta um cenário de recuperação e transformação, com oportunidades interessantes para diferentes perfis de investidores. A chave para o sucesso está na análise criteriosa das tendências, na avaliação dos riscos e na escolha estratégica dos investimentos.</p>
      
      <p>Na ASSET: Inteligência Imobiliária, contamos com uma equipe especializada em análise de mercado e consultoria de investimentos, pronta para ajudar nossos clientes a identificar as melhores oportunidades e tomar decisões informadas no mercado imobiliário.</p>
    `,
    date: new Date("2023-06-15"),
    author: "Ricardo Santos",
    authorRole: "Diretor de Análise de Mercado",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Análise de Mercado",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "analise-mercado-imobiliario-2023",
  },
  {
    id: 2,
    title: "Como Avaliar o Potencial de Valorização de um Imóvel",
    content: `
      <p>Investir em imóveis continua sendo uma das estratégias mais tradicionais e seguras para preservação e multiplicação de patrimônio. No entanto, nem todos os imóveis oferecem o mesmo potencial de valorização. Identificar propriedades com alto potencial de retorno exige análise criteriosa de diversos fatores.</p>
      
      <p>Neste artigo, vamos explorar os principais elementos que influenciam a valorização de um imóvel e apresentar métodos práticos para avaliar o potencial de retorno sobre investimento.</p>
      
      <h2>Fatores que Influenciam a Valorização Imobiliária</h2>
      
      <h3>1. Localização</h3>
      
      <p>A localização é, sem dúvida, o fator mais determinante para a valorização de um imóvel. Alguns aspectos específicos da localização que merecem atenção:</p>
      
      <ul>
        <li><strong>Infraestrutura urbana:</strong> Disponibilidade de serviços básicos como água, esgoto, energia elétrica, iluminação pública e pavimentação.</li>
        <li><strong>Mobilidade:</strong> Proximidade a estações de metrô, corredores de ônibus, ciclovias e principais vias de acesso.</li>
        <li><strong>Serviços e comércio:</strong> Acesso a supermercados, farmácias, bancos, restaurantes e shopping centers.</li>
        <li><strong>Educação e saúde:</strong> Proximidade a escolas, universidades, hospitais e clínicas.</li>
        <li><strong>Áreas verdes e lazer:</strong> Presença de parques, praças e opções de entretenimento.</li>
        <li><strong>Segurança:</strong> Índices de criminalidade da região e presença de policiamento.</li>
      </ul>
      
      <p>Regiões que estão recebendo investimentos públicos e privados em infraestrutura tendem a apresentar valorização acima da média. Fique atento a planos diretores, projetos de mobilidade urbana e novos empreendimentos comerciais que possam impactar positivamente a região.</p>
      
      <h3>2. Características do Imóvel</h3>
      
      <p>As características físicas do imóvel também influ  Características do Imóvel</h3>
      
      <p>As características físicas do imóvel também influenciam diretamente seu potencial de valorização. Considere os seguintes aspectos:</p>
      
      <ul>
        <li><strong>Projeto arquitetônico:</strong> Imóveis com projetos diferenciados, assinados por arquitetos renomados ou com design inovador tendem a valorizar mais.</li>
        <li><strong>Qualidade da construção:</strong> Materiais utilizados, acabamento e estado de conservação são determinantes para a durabilidade e valorização do imóvel.</li>
        <li><strong>Eficiência energética:</strong> Imóveis com certificações ambientais, aproveitamento de luz natural, sistemas de captação de água da chuva e outras soluções sustentáveis estão cada vez mais valorizados.</li>
        <li><strong>Flexibilidade de uso:</strong> Plantas que permitem adaptações e múltiplos usos tendem a atrair mais interessados, o que pode impactar positivamente o valor do imóvel.</li>
        <li><strong>Tecnologia:</strong> Automação residencial, infraestrutura para internet de alta velocidade e outros recursos tecnológicos agregam valor ao imóvel.</li>
      </ul>
      
      <h3>3. Potencial de Desenvolvimento da Região</h3>
      
      <p>Analisar o potencial de desenvolvimento da região é fundamental para prever a valorização futura do imóvel:</p>
      
      <ul>
        <li><strong>Planos de expansão urbana:</strong> Consulte o plano diretor da cidade e verifique se há projetos de expansão ou revitalização para a região.</li>
        <li><strong>Novos empreendimentos:</strong> A chegada de grandes empresas, universidades ou centros comerciais pode transformar completamente uma região.</li>
        <li><strong>Investimentos em infraestrutura:</strong> Novas linhas de metrô, BRTs, pontes, viadutos e outras obras de infraestrutura tendem a valorizar os imóveis do entorno.</li>
        <li><strong>Mudanças na legislação urbanística:</strong> Alterações no zoneamento, potencial construtivo ou uso do solo podem impactar significativamente o valor dos imóveis.</li>
      </ul>
      
      <h3>4. Análise de Mercado</h3>
      
      <p>Compreender a dinâmica do mercado imobiliário local é essencial:</p>
      
      <ul>
        <li><strong>Oferta e demanda:</strong> Regiões com alta demanda e oferta limitada tendem a apresentar valorização mais expressiva.</li>
        <li><strong>Perfil socioeconômico:</strong> Mudanças no perfil dos moradores, como aumento da renda média, podem indicar um processo de valorização em curso.</li>
        <li><strong>Velocidade de vendas:</strong> Imóveis que são vendidos rapidamente indicam uma região aquecida e com potencial de valorização.</li>
        <li><strong>Histórico de valorização:</strong> Analise a evolução dos preços na região nos últimos anos para identificar tendências.</li>
      </ul>
      
      <h2>Métodos para Avaliar o Potencial de Valorização</h2>
      
      <h3>1. Análise Comparativa de Mercado</h3>
      
      <p>A análise comparativa consiste em avaliar imóveis semelhantes na mesma região para estabelecer um valor de referência. Para isso:</p>
      
      <ul>
        <li>Selecione imóveis com características similares (área, número de quartos, padrão de acabamento).</li>
        <li>Compare os preços por metro quadrado.</li>
        <li>Identifique tendências de valorização nos últimos anos.</li>
        <li>Analise o tempo médio de venda dos imóveis na região.</li>
      </ul>
      
      <h3>2. Análise de Rentabilidade</h3>
      
      <p>Para imóveis destinados a investimento, é fundamental calcular indicadores de rentabilidade:</p>
      
      <ul>
        <li><strong>Cap Rate (Taxa de Capitalização):</strong> Relação entre a renda anual gerada pelo imóvel e seu valor de aquisição.</li>
        <li><strong>Yield (Rendimento):</strong> Percentual que representa o retorno anual do aluguel em relação ao valor do imóvel.</li>
        <li><strong>Payback:</strong> Tempo necessário para recuperar o investimento através da renda gerada pelo imóvel.</li>
        <li><strong>ROI (Retorno sobre Investimento):</strong> Relação entre o lucro obtido e o investimento realizado, considerando tanto a renda mensal quanto a valorização patrimonial.</li>
      </ul>
      
      <h3>3. Análise de Tendências Urbanas</h3>
      
      <p>Observe as tendências de desenvolvimento urbano e comportamento do consumidor:</p>
      
      <ul>
        <li>Movimentos de gentrificação ou revitalização de áreas.</li>
        <li>Mudanças nas preferências dos compradores (como a valorização de imóveis próximos a parques após a pandemia).</li>
        <li>Novas demandas por espaços adaptados ao trabalho remoto.</li>
        <li>Crescimento da busca por imóveis sustentáveis e eficientes.</li>
      </ul>
      
      <h2>Ferramentas e Recursos para Avaliação</h2>
      
      <p>Utilize recursos disponíveis para embasar sua análise:</p>
      
      <ul>
        <li><strong>Índices de preços imobiliários:</strong> FipeZAP, Índice de Valores de Garantia de Imóveis Residenciais (IVG-R) do Banco Central.</li>
        <li><strong>Plataformas de anúncios imobiliários:</strong> Para análise de preços praticados e tempo de anúncio.</li>
        <li><strong>Dados governamentais:</strong> Planos diretores, projetos de infraestrutura, dados socioeconômicos do IBGE.</li>
        <li><strong>Consultorias especializadas:</strong> Relatórios de mercado produzidos por empresas do setor imobiliário.</li>
      </ul>
      
      <h2>Conclusão</h2>
      
      <p>Avaliar o potencial de valorização de um imóvel exige uma análise multifatorial que combine aspectos da localização, características do imóvel, potencial de desenvolvimento da região e dinâmica do mercado. Quanto mais informações você reunir e analisar, mais assertiva será sua decisão de investimento.</p>
      
      <p>Na ASSET: Inteligência Imobiliária, contamos com especialistas em análise de mercado que utilizam metodologias avançadas para identificar imóveis com alto potencial de valorização. Nossa equipe está à disposição para auxiliar em suas decisões de investimento imobiliário, garantindo a melhor relação entre risco e retorno.</p>
    `,
    date: new Date("2023-05-22"),
    author: "Ana Oliveira",
    authorRole: "Consultora de Investimentos Imobiliários",
    authorImage: "/placeholder.svg?height=100&width=100",
    category: "Investimentos",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "como-avaliar-potencial-valorizacao-imovel",
  },
]

// Função para buscar o post pelo slug
function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}

// Função para gerar os metadados dinâmicos
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post não encontrado",
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
      type: "article",
      publishedTime: post.date.toISOString(),
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="container py-20 text-center">
        <h1 className="heading-lg mb-6">Post não encontrado</h1>
        <p className="mb-8">O artigo que você está procurando não existe ou foi removido.</p>
        <Link href="/blog" className="btn-secondary">
          Voltar para o Blog
        </Link>
      </div>
    )
  }

  return (
    <>
      <article>
        <div className="relative h-[40vh] md:h-[50vh] bg-black">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="container pb-12">
              <div className="max-w-3xl">
                <div className="inline-block bg-primary text-black text-sm font-medium py-1 px-3 mb-4">
                  {post.category}
                </div>
                <h1 className="heading-xl text-white mb-4">{post.title}</h1>
                <div className="flex items-center text-white/80">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-sm">{formatDate(post.date)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-12">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">Compartilhe este artigo</h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://asset-imobiliaria.com.br/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90"
                    aria-label="Compartilhar no Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://asset-imobiliaria.com.br/blog/${post.slug}&text=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90"
                    aria-label="Compartilhar no Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://asset-imobiliaria.com.br/blog/${post.slug}&title=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] text-white p-2 rounded-full hover:opacity-90"
                    aria-label="Compartilhar no LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/blog" className="inline-flex items-center text-secondary font-medium">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para o Blog
                </Link>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">Sobre o Autor</h3>
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{post.author}</h4>
                      <p className="text-gray-600">{post.authorRole}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Especialista em análise de mercado imobiliário com mais de 10 anos de experiência no setor. Formação
                    em Economia e especialização em Investimentos Imobiliários.
                  </p>
                </div>

                <div className="bg-secondary text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Precisa de ajuda com investimentos imobiliários?</h3>
                  <p className="mb-6">
                    Nossa equipe de especialistas está pronta para ajudar você a encontrar as melhores oportunidades no
                    mercado imobiliário.
                  </p>
                  <Link
                    href="/contato"
                    className="block w-full py-3 px-4 bg-primary text-black text-center font-medium rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Fale com um Especialista
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="heading-lg mb-12 text-center">Artigos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <article className="card overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 bg-primary text-black text-sm font-medium py-1 px-3">
                        {relatedPost.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="text-gray-500 text-sm mb-2">
                        {formatDate(relatedPost.date)} • por {relatedPost.author}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {relatedPost.content.substring(0, 120).replace(/<[^>]*>/g, "")}...
                      </p>
                      <div className="text-secondary font-medium inline-flex items-center">Ler mais</div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}


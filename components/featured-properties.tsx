import Link from "next/link"
import Image from "next/image"
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Apartamento de Luxo em Moema",
    description:
      "Apartamento de alto padrão com 3 suítes, varanda gourmet e lazer completo em localização privilegiada.",
    price: "R$ 2.500.000",
    location: "Moema, São Paulo - SP",
    bedrooms: 3,
    bathrooms: 4,
    area: 180,
    image: "/placeholder.svg?height=600&width=800",
    slug: "apartamento-luxo-moema",
  },
  {
    id: 2,
    title: "Cobertura Duplex no Itaim Bibi",
    description: "Cobertura duplex com vista panorâmica, 4 suítes, terraço com piscina e 4 vagas de garagem.",
    price: "R$ 5.800.000",
    location: "Itaim Bibi, São Paulo - SP",
    bedrooms: 4,
    bathrooms: 6,
    area: 320,
    image: "/placeholder.svg?height=600&width=800",
    slug: "cobertura-duplex-itaim",
  },
  {
    id: 3,
    title: "Casa em Condomínio na Barra da Tijuca",
    description: "Casa em condomínio fechado com 5 suítes, piscina, jardim e segurança 24h.",
    price: "R$ 4.200.000",
    location: "Barra da Tijuca, Rio de Janeiro - RJ",
    bedrooms: 5,
    bathrooms: 7,
    area: 450,
    image: "/placeholder.svg?height=600&width=800",
    slug: "casa-condominio-barra",
  },
]

export default function FeaturedProperties() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <Link key={property.id} href={`/imoveis/${property.slug}`} className="group">
          <div className="card overflow-hidden h-full flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 bg-primary text-black font-bold py-2 px-4">{property.price}</div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{property.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{property.description}</p>
              <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                <div className="flex items-center">
                  <BedDouble className="h-4 w-4 mr-1" />
                  <span>{property.bedrooms} Quartos</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{property.bathrooms} Banheiros</span>
                </div>
                <div className="flex items-center">
                  <Ruler className="h-4 w-4 mr-1" />
                  <span>{property.area} m²</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}


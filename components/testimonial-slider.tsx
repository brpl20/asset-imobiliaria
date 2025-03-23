"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendes",
    role: "Investidor",
    content:
      "A consultoria da ASSET foi fundamental para minha decisão de investimento. A análise detalhada do mercado e as projeções de valorização me deram segurança para fazer um excelente negócio.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Mariana Costa",
    role: "Proprietária",
    content:
      "Vendi meu apartamento com a ASSET e fiquei impressionada com a agilidade e profissionalismo. A avaliação foi precisa e conseguiram um valor acima do que eu esperava.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Roberto Almeida",
    role: "Empresário",
    content:
      "Contratei a ASSET para administrar meus imóveis e foi a melhor decisão. Eles cuidam de tudo com eficiência e transparência, me permitindo focar em outros negócios.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="text-primary mb-6">
          <Quote className="h-12 w-12" />
        </div>

        <p className="text-xl md:text-2xl mb-8 italic text-gray-700">"{testimonials[currentIndex].content}"</p>

        <div className="flex items-center">
          <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonials[currentIndex].image || "/placeholder.svg"}
              alt={testimonials[currentIndex].name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
            <p className="text-gray-600">{testimonials[currentIndex].role}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-secondary" : "bg-gray-300"
            }`}
            aria-label={`Ver depoimento ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        aria-label="Depoimento anterior"
      >
        <ChevronLeft className="h-6 w-6 text-secondary" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        aria-label="Próximo depoimento"
      >
        <ChevronRight className="h-6 w-6 text-secondary" />
      </button>
    </div>
  )
}


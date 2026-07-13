'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Camera, Landmark, BookOpen, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const featuredCards = [
  {
    icon: Camera,
    title: 'Галерея',
    description: 'Фотографии нашего храма, богослужений и приходской жизни',
    href: '/gallery',
    image: '/images/church-interior.jpg',
  },
  {
    icon: Landmark,
    title: 'Музей',
    description: 'Музей подвига советских военнопленных – узников концлагеря Шталаг-352',
    href: '/museum',
    image: '/images/museum/main.jpg',
  },
  {
    icon: BookOpen,
    title: 'Воскресная школа',
    description: 'Духовное образование для детей и взрослых. Изучение Закона Божия и основ православной веры',
    href: '/sunday-school',
    image: '/images/church-service.jpg',
  },
]

export function FeaturedSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Жизнь прихода
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Приходская жизнь
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Узнайте больше о жизни нашего прихода, истории и духовном образовании
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={card.href}>
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <card.icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.description}
                    </p>
                    <div className="mt-4 flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                      <span>Нажмите, чтобы узнать больше</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
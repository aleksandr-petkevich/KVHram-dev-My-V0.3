'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Droplets, Heart, BookOpen, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const sacraments = [
  {
    icon: Droplets,
    title: 'Крещение',
    description: 'Таинство духовного рождения. Проводятся обязательные огласительные беседы для родителей и крёстных.',
    href: '/sacraments/baptism',
    image: '/images/church-interior.jpg',
  },
  {
    icon: Heart,
    title: 'Венчание',
    description: 'Таинство церковного брака. Необходима предварительная беседа со священником.',
    href: '/sacraments/wedding',
    image: '/images/church-service.jpg',
  },
  {
    icon: BookOpen,
    title: 'Исповедь',
    description: 'Таинство покаяния. Исповедь совершается перед каждой Литургией и во время вечернего богослужения.',
    href: '/sacraments/confession',
    image: '/images/church-interior.jpg',
  },
]

export function SacramentsSection() {
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
            Таинства
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Церковные Таинства
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            В нашем храме совершаются все Таинства Православной Церкви. 
            Узнайте подробнее о подготовке к каждому из них.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sacraments.map((sacrament, index) => (
            <motion.div
              key={sacrament.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={sacrament.href}>
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={sacrament.image}
                      alt={sacrament.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <sacrament.icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {sacrament.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {sacrament.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline">
            <Link href="/sacraments">
              Все таинства
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

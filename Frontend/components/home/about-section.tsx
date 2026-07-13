'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Church, Users, BookOpen, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'



export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/church-interior.jpg"
                alt="Интерьер храма"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              О нашем храме
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Храм Воздвижения Креста Господня в Минске
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Наш храм — место молитвы, духовного возрастания и общения верующих людей. 
              История прихода насчитывает многие годы служения Богу и людям. 
              Мы приглашаем всех желающих присоединиться к нашей приходской семье.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              В храме совершаются все Таинства Православной Церкви: Крещение, Венчание, 
              Исповедь, Причастие, Соборование. Работает воскресная школа для детей 
              и проводятся беседы для взрослых.
            </p>

            <Button asChild>
              <Link href="/about">
                Подробнее о храме
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>

       
      </div>
    </section>
  )
}

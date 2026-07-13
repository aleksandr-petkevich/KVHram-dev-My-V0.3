'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1b7a8b9a8b7c6d5e4f3a2b1c0d9e8f7a6&amp;source=constructor"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              loading="lazy"
              title="Карта расположения храма"
            />
            {/* Fallback if iframe doesn't load */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center -z-10">
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  г. Минск, ул. Тимирязева, д. 96
                </p>
                <a 
                  href="https://yandex.ru/maps/-/CHQmrY1b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline mt-2 inline-block"
                >
                  Открыть в Яндекс.Картах
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Контакты
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Как нас найти
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Мы всегда рады видеть вас в нашем храме. Приходите на богослужения, 
              задавайте вопросы священникам, становитесь частью нашей приходской семьи.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Минск, ул. Тимирязева, д. 96</p>
                  <a 
                    href="https://yandex.ru/maps/-/CHQmrY1b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Проложить маршрут
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Телефон</h3>
                  <a 
                    href="tel:+375291220196"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +375 (29) 122-01-96
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:kvhram@mail.by"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    kvhram@mail.by
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Время работы</h3>
                  <p className="text-muted-foreground">Ежедневно: 8:00 - 20:00</p>
                  <p className="text-sm text-muted-foreground">Богослужения по расписанию</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild>
                <Link href="/contact">
                  Связаться с нами
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

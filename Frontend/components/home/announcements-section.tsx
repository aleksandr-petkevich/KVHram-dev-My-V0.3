'use client'

import { motion } from 'framer-motion'
import { Bell, Calendar, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const announcements = [
  {
    id: 1,
    title: 'Праздник Воздвижения Креста Господня',
    date: '27 сентября',
    description: 'Приглашаем всех прихожан на праздничное богослужение в честь престольного праздника нашего храма.',
    isHighlight: true,
  },
  {
    id: 2,
    title: 'Огласительные беседы перед Крещением',
    date: 'Каждую субботу, 15:00',
    description: 'Проводятся обязательные огласительные беседы для родителей и крёстных перед совершением Таинства Крещения.',
    isHighlight: false,
  },
  {
    id: 3,
    title: 'Воскресная школа',
    date: 'Воскресенье, после Литургии',
    description: 'Приглашаем детей от 5 до 14 лет на занятия воскресной школы.',
    isHighlight: false,
  },
]

export function AnnouncementsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Bell className="w-4 h-4" />
            Объявления
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Важные объявления прихода
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Актуальная информация о жизни прихода, предстоящих событиях и богослужениях
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full ${announcement.isHighlight ? 'border-secondary bg-secondary/5' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {announcement.date}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {announcement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {announcement.description}
                  </p>
                </CardContent>
              </Card>
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
            <Link href="/news">
              Все новости
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

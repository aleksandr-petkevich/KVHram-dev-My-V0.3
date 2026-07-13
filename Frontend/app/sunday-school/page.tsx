
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, BookOpen, Heart, ChevronRight, MapPin, Phone } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const programs = [
  {
    icon: BookOpen,
    title: 'Детская группа',
    description: 'Занятия для детей от 6 до 12 лет. Изучение Закона Божия, церковного пения, основ православной веры.',
    age: '6-12 лет',
    time: 'Воскресенье, 10:00',
    image: '/images/church-interior.jpg',
  },
  {
    icon: Users,
    title: 'Подростковая группа',
    description: 'Занятия для подростков от 13 до 17 лет. Беседы о вере, современном мире и христианском образе жизни.',
    age: '13-17 лет',
    time: 'Воскресенье, 11:00',
    image: '/images/church-service.jpg',
  },
  {
    icon: Heart,
    title: 'Взрослая группа',
    description: 'Катехизические беседы для взрослых. Основы православного вероучения, толкование Священного Писания.',
    age: '18+',
    time: 'Суббота, 15:00',
    image: '/images/church-interior.jpg',
  },
]

const activities = [
  {
    title: 'Воскресные занятия',
    description: 'Регулярные занятия по воскресеньям после Литургии',
  },
  {
    title: 'Паломнические поездки',
    description: 'Поездки по святым местам Беларуси и России',
  },
  {
    title: 'Творческие мастерские',
    description: 'Иконопись, церковное пение, рукоделие',
  },
  {
    title: 'Праздничные мероприятия',
    description: 'Рождественские и Пасхальные праздники, спектакли',
  },
]

export default function SundaySchoolPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 orthodox-pattern opacity-30" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
              Воскресная школа
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Духовное образование для детей и взрослых.
              Приглашаем всех желающих изучать основы православной веры
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  alt="Воскресная школа"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                О воскресной школе
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Добро пожаловать в нашу воскресную школу
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Наша воскресная школа — это место, где дети и взрослые могут глубже познать
                православную веру, изучить Священное Писание, познакомиться с историей Церкви
                и традициями православного благочестия.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Занятия проходят в дружеской атмосфере, где каждый может задать вопросы
                и получить ответы на волнующие темы. Мы рады видеть всех желающих,
                независимо от уровня подготовки.
              </p>

              <Button asChild>
                <Link href="/contact">
                  Записаться на занятия
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Учебные программы
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Группы и направления
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              В нашей воскресной школе работают группы для разных возрастов
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{program.age}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{program.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Жизнь воскресной школы
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Помимо учебных занятий, в нашей воскресной школе проводится множество
                мероприятий: паломнические поездки, творческие встречи, праздничные
                концерты и театральные постановки.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground">{activity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/images/church-service.jpg"
                      alt="Занятия воскресной школы"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/church-interior.jpg"
                      alt="Дети в храме"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="/images/church-service.jpg"
                      alt="Праздник в воскресной школе"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-xl overflow-hidden">
                    <Image
                      src="/images/church-interior.jpg"
                      alt="Урок Закона Божия"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              Как записаться
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6"
              >
                <BookOpen className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Подойдите после службы</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Поговорите со священником или преподавателем воскресной школы
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6"
              >
                <Phone className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Позвоните нам</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Свяжитесь по телефону для записи и консультаций
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6"
              >
                <MapPin className="w-10 h-10 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Приходите на занятие</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Первое занятие можно посетить без предварительной записи
                </p>
              </motion.div>
            </div>
            <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                Контакты
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
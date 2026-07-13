import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, BookOpen, Users, Heart, Music, Calendar } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Приходская жизнь',
  description: 'Воскресная школа, молодёжные группы, хор и социальное служение прихода Храма Воздвижения Креста Господня.',
}

const activities = [
  {
    icon: BookOpen,
    title: 'Воскресная школа',
    description: 'Занятия для детей от 5 до 14 лет проводятся каждое воскресенье после Литургии. Дети изучают Закон Божий, историю Церкви, учатся молиться и участвовать в богослужениях.',
    schedule: 'Воскресенье, после Литургии',
    image: '/images/church-interior.jpg',
  },
  {
    icon: Users,
    title: 'Молодёжная группа',
    description: 'Встречи для молодёжи от 15 до 30 лет. Обсуждение вопросов веры, совместные паломничества, волонтёрские проекты и дружеское общение.',
    schedule: 'Суббота, 16:00',
    image: '/images/church-service.jpg',
  },
  {
    icon: Music,
    title: 'Церковный хор',
    description: 'Приглашаем всех желающих присоединиться к нашему хору. Репетиции проводятся два раза в неделю. Опыт пения не обязателен — главное желание славить Бога.',
    schedule: 'Среда и пятница, 18:00',
    image: '/images/church-interior.jpg',
  },
  {
    icon: Heart,
    title: 'Социальное служение',
    description: 'Помощь нуждающимся прихожанам, посещение больных и одиноких, сбор вещей для малоимущих семей. Присоединяйтесь к делам милосердия.',
    schedule: 'По мере необходимости',
    image: '/images/church-service.jpg',
  },
]

const events = [
  {
    title: 'Праздник Рождества Христова',
    date: '7 января',
    description: 'Торжественное богослужение и праздничный концерт воскресной школы',
  },
  {
    title: 'Престольный праздник',
    date: '27 сентября',
    description: 'Воздвижение Креста Господня — главный праздник нашего храма',
  },
  {
    title: 'Пасхальные торжества',
    date: 'По календарю',
    description: 'Ночное богослужение и освящение куличей и пасок',
  },
  {
    title: 'День семьи',
    date: '8 июля',
    description: 'Праздник святых Петра и Февронии — покровителей семьи',
  },
]

export default function ParishLifePage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-service.jpg"
            alt="Приходская жизнь"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 " />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground mb-6">
            <Link href="/about">
              <ChevronLeft className="w-4 h-4 mr-2" />
              О храме
            </Link>
          </Button>
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Приходская жизнь
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Наш приход — это живая община верующих людей.
              Присоединяйтесь к нашим занятиям, группам и добрым делам.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Направления деятельности
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              В нашем приходе есть много возможностей для духовного роста и служения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <Card key={activity.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 " />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <activity.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Calendar className="w-4 h-4" />
                    {activity.schedule}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Widget */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Мы в Instagram
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Следите за новостями, фотоотчетами о событиях и анонсами богослужений в нашем профиле
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Сетка постов - визуальная имитация ленты */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <a
                  key={item}
                  href="https://www.instagram.com/kvhram_minsk?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg overflow-hidden relative group hover:shadow-lg transition-all duration-300 border border-gray-100 block"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-200 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-medium flex items-center gap-2 text-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      Открыть пост
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.instagram.com/kvhram_minsk?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Перейти в профиль @kvhram_minsk
              </a>
              <p className="mt-4 text-sm text-gray-500">
                Нажмите на кнопку выше, чтобы увидеть все публикации в Instagram
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Основные праздники
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Особые дни в жизни нашего прихода
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((event) => (
              <Card key={event.title} className="text-center">
                <CardContent className="p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-3">
                    {event.date}
                  </span>
                  <h3 className="font-serif font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Присоединяйтесь к нам
              </h2>
              <p className="text-primary-foreground/90 leading-relaxed mb-8">
                Мы рады всем, кто хочет стать частью нашей приходской семьи.
                Приходите на богослужения, записывайтесь в воскресную школу,
                присоединяйтесь к хору или волонтёрским проектам.
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">
                  Связаться с нами
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
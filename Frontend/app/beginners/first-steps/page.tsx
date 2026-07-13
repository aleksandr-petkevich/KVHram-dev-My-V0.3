import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Первые шаги в храме | Для новоначальных',
  description: 'Руководство для тех, кто впервые приходит в православный храм. Как себя вести, что делать, как ставить свечи.',
}

const steps = [
  {
    title: 'Перед входом в храм',
    items: [
      'Перекреститесь трижды, глядя на храм',
      'Мужчины снимают головной убор',
      'Женщины покрывают голову платком',
      'Отключите или переведите телефон в беззвучный режим',
    ],
  },
  {
    title: 'Внутри храма',
    items: [
      'При входе перекреститесь и поклонитесь',
      'Пройдите к центру храма спокойно и благоговейно',
      'Можно поставить свечи перед иконами',
      'Во время службы старайтесь не ходить по храму',
    ],
  },
  {
    title: 'Как ставить свечи',
    items: [
      'Купите свечи в церковной лавке',
      'Подойдите к иконе или подсвечнику',
      'Зажгите свечу от других горящих свечей',
      'Поставьте свечу, перекреститесь и помолитесь',
    ],
  },
  {
    title: 'Как подавать записки',
    items: [
      'Записки пишутся разборчивым почерком',
      'Имена указываются в родительном падеже (Иоанна, Марии)',
      'Используйте церковные имена (данные при крещении)',
      '«О здравии» — за живых, «О упокоении» — за усопших',
    ],
  },
]

const etiquette = [
  'Не разговаривайте громко в храме',
  'Не поворачивайтесь спиной к алтарю',
  'Не проходите между священником и алтарём',
  'Во время чтения Евангелия и важных моментов службы не ходите по храму',
  'Не фотографируйте без благословения',
  'Если устали стоять, можно тихо присесть на скамейку',
]

export default function FirstStepsPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/beginners">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Для новоначальных
            </Link>
          </Button>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Первые шаги в храме
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Практическое руководство для тех, кто впервые приходит в православный храм
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <Image
                src="/images/church-interior.jpg"
                alt="Интерьер храма"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Первое посещение храма может вызывать волнение — это естественно. 
              Помните, что храм — это дом Божий, где каждого принимают с любовью. 
              Не бойтесь сделать что-то неправильно: главное — ваше искреннее желание быть здесь.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ниже мы расскажем об основных правилах поведения в храме, которые помогут вам 
              чувствовать себя увереннее.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Пошаговое руководство
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Etiquette */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Правила поведения в храме
            </h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {etiquette.map((rule, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary font-medium text-sm">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cross sign */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">
              Как правильно креститься
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Сложите три пальца правой руки (большой, указательный и средний) вместе, 
              а два других (безымянный и мизинец) прижмите к ладони.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-primary-foreground/10 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">1</div>
                <p className="text-sm">Лоб</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">2</div>
                <p className="text-sm">Живот</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">3</div>
                <p className="text-sm">Правое плечо</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4">
                <div className="text-2xl font-bold mb-2">4</div>
                <p className="text-sm">Левое плечо</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            Читайте также
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/beginners/basics">Основы веры</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/beginners/confession-guide">Как исповедоваться</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/schedule">Расписание богослужений</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

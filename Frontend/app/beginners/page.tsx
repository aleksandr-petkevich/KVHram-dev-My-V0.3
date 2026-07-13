import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Heart, HelpCircle, Users, ChevronRight, Lightbulb, Calendar } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Для новоначальных | Храм Воздвижения Креста Господня',
  description: 'Информация для тех, кто только начинает путь в Православной Церкви. Первые шаги в храме, основы веры, подготовка к таинствам.',
}

const guides = [
  {
    icon: BookOpen,
    title: 'Первые шаги в храме',
    description: 'Как вести себя в храме, что такое богослужение, как ставить свечи и подавать записки.',
    href: '/beginners/first-steps',
  },
  {
    icon: Lightbulb,
    title: 'Основы веры',
    description: 'Символ веры, заповеди, молитвы, которые должен знать каждый православный христианин.',
    href: '/beginners/basics',
  },
  {
    icon: Heart,
    title: 'Как исповедоваться',
    description: 'Подготовка к первой исповеди, что говорить священнику, как преодолеть страх.',
    href: '/beginners/confession-guide',
  },
  {
    icon: Calendar,
    title: 'Подготовка к причастию',
    description: 'Пост, молитвенное правило, евхаристический пост — всё о подготовке к Святому Причащению.',
    href: '/beginners/communion-guide',
  },
]

const faqs = [
  {
    question: 'Можно ли прийти в храм, если я не крещён?',
    answer: 'Да, конечно. Храм открыт для всех. Вы можете присутствовать на богослужении, ставить свечи за здравие, общаться со священником. Для принятия Таинств (Причастие, Венчание) необходимо быть крещёным.',
  },
  {
    question: 'Как правильно одеваться в храм?',
    answer: 'Женщинам желательно быть в юбке ниже колен и с покрытой головой (платок или шарф). Мужчинам — в брюках, без головного убора. Одежда должна быть скромной и опрятной.',
  },
  {
    question: 'Что делать, если я не знаю молитв?',
    answer: 'Это не повод не ходить в храм. Начните с простых молитв: «Господи, помилуй», «Господи, благослови». Постепенно изучайте основные молитвы. Можно молиться своими словами от сердца.',
  },
  {
    question: 'Как часто нужно ходить в храм?',
    answer: 'Православные христиане стараются посещать храм каждое воскресенье и в праздничные дни. Но если вы только начинаете, приходите когда можете — главное начать.',
  },
  {
    question: 'Нужно ли записываться на исповедь?',
    answer: 'Нет, записываться не нужно. Исповедь совершается перед каждой Литургией. Приходите заранее (обычно за 30-40 минут до начала службы) и встаньте в очередь к священнику.',
  },
]

export default function BeginnersPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Для новоначальных"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 " />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
              Добро пожаловать
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Для новоначальных
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Если вы только начинаете свой путь в Православной Церкви, эта страница поможет 
              вам сделать первые шаги. Здесь вы найдёте ответы на основные вопросы и полезные руководства.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome message */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Мы рады видеть вас в храме
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Не бойтесь прийти в храм, даже если вы ничего не знаете о церковной жизни. 
              Каждый из нас когда-то был новоначальным. Священники и прихожане нашего храма 
              всегда готовы помочь, ответить на вопросы и поддержать вас на пути к вере.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Если у вас есть вопросы, вы можете подойти к священнику после службы или 
              позвонить в храм. Также в нашем храме проводятся огласительные беседы для 
              готовящихся к Крещению и их восприемников.
            </p>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Полезные руководства
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы подготовили подробные материалы, которые помогут вам освоиться в церковной жизни
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guides.map((guide) => (
              <Link key={guide.title} href={guide.href}>
                <Card className="group h-full hover:shadow-lg transition-all hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <guide.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                          {guide.title}
                          <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {guide.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Частые вопросы
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ответы на вопросы, которые часто задают те, кто только начинает ходить в храм
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Остались вопросы?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Мы всегда рады помочь. Позвоните нам или приходите в храм — 
            священники ответят на все ваши вопросы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="tel:+375291220196">
                +375 (29) 122-01-96
              </a>
            </Button>
             <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">
                Контакты храма
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

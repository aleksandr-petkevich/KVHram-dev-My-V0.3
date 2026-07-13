import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, Clock, Phone, CheckCircle } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Крещение',
  description: 'Таинство Крещения в Храме Воздвижения Креста Господня. Огласительные беседы, подготовка, записЬ.',
}

const requirements = [
  'Пройти огласительные беседы (для родителей и крёстных)',
  'Крёстные должны быть крещёнными православными христианами',
  'Крёстные не могут быть супругами или находиться в браке с родителями ребёнка',
  'Иметь нательный крестик для крещаемого',
  'Крестильная рубашка (белая)',
  'Полотенце',
]

const faq = [
  {
    question: 'Можно ли крестить без крёстных?',
    answer: 'Взрослый человек может креститься без крёстных. Для детей до 14 лет наличие хотя бы одного крёстного обязательно.',
  },
  {
    question: 'Сколько должно быть крёстных?',
    answer: 'Достаточно одного крёстного: для мальчика — крёстный, для девочки — крёстная. По традиции приглашают двоих.',
  },
  {
    question: 'В каком возрасте лучше крестить ребёнка?',
    answer: 'Церковь рекомендует крестить на 40-й день после рождения или позже. Ограничений по возрасту нет.',
  },
  {
    question: 'Можно ли крестить во время поста?',
    answer: 'Да, Крещение совершается в любой день, включая посты. Это Таинство не откладывается.',
  },
]

export default function BaptismPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Таинство Крещения"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground mb-6">
            <Link href="/sacraments">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Таинства
            </Link>
          </Button>
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Таинство Крещения
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Крещение — это духовное рождение, в котором человек очищается от первородного греха 
              и рождается для новой жизни во Христе.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule info */}
      <section className="py-8 bg-secondary/10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Крещение</p>
                <p className="font-medium text-foreground">Суббота и воскресенье</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Время</p>
                <p className="font-medium text-foreground">После Литургии</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Запись</p>
                <p className="font-medium text-foreground">+375 (29) 122-01-96</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              О Таинстве Крещения
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                Крещение — это первое и важнейшее Таинство в жизни христианина. 
                В Крещении человек очищается от первородного греха, получает прощение личных грехов 
                (если крестится взрослый), и рождается для новой духовной жизни.
              </p>
              <p className="leading-relaxed mb-4">
                Крещение совершается единожды и не может быть повторено. После Крещения человек 
                становится полноправным членом Церкви и может участвовать во всех других Таинствах: 
                исповедоваться, причащаться, венчаться.
              </p>
              <p className="leading-relaxed">
                Крёстные родители берут на себя ответственность за духовное воспитание крестника. 
                Они обязуются научить его основам православной веры, молитве, и своим примером 
                показывать христианскую жизнь.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Что необходимо для Крещения
            </h2>
            <div className="space-y-3">
              {requirements.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-background rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Catechism classes */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold mb-4">
                  Огласительные беседы
                </h2>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  Перед Крещением необходимо пройти огласительные беседы. На беседах рассматриваются 
                  основы православной веры, смысл Таинства Крещения, обязанности крёстных родителей.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <p className="text-sm text-primary-foreground/70 mb-1">Когда</p>
                    <p className="font-medium">Каждая суббота, 15:00</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <p className="text-sm text-primary-foreground/70 mb-1">Где</p>
                    <p className="font-medium">Помещение воскресной школы</p>
                  </div>
                </div>
                <p className="text-sm text-primary-foreground/70">
                  На беседах необходимо присутствие родителей и крёстных. 
                  Продолжительность беседы — около 1,5 часов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-foreground mb-2">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            Записаться на Крещение
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Для записи на Крещение обращайтесь в церковную лавку или по телефону. 
            Не забудьте предварительно пройти огласительные беседы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="tel:+375291220196">Позвонить</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sacraments/wedding">
                Венчание
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

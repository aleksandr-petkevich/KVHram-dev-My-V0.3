import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Calendar, Phone, CheckCircle, XCircle } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Венчание',
  description: 'Таинство Венчания в Храме Воздвижения Креста Господня. Подготовка к церковному браку.',
}

const requirements = [
  'Оба супруга должны быть крещёными православными христианами',
  'Зарегистрированный брак в ЗАГСе',
  'Предварительная беседа со священником',
  'Исповедь и Причастие накануне или в день Венчания',
  'Венчальные свечи и рушник',
  'Обручальные кольца (освящаются на Венчании)',
  'Иконы Спасителя и Богородицы (по желанию)',
]

const restrictions = [
  'Во время постов (Великий, Петров, Успенский, Рождественский)',
  'На Святках (7-18 января)',
  'На Масленице и Светлой седмице',
  'Накануне постных дней (вторник, четверг, суббота)',
  'Накануне великих праздников',
  '11 и 27 сентября (Усекновение главы Иоанна Предтечи, Воздвижение Креста)',
]

export default function WeddingPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-service.jpg"
            alt="Таинство Венчания"
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
              Таинство Венчания
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Венчание — это Таинство, в котором благословляется супружеский союз 
              и испрашивается благодать Божия для совместной христианской жизни.
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
                <p className="text-sm text-muted-foreground">Венчание</p>
                <p className="font-medium text-foreground">По согласованию</p>
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
              О Таинстве Венчания
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                Венчание — это Таинство Церкви, в котором благословляется брачный союз мужчины и женщины, 
                и испрашивается благодать Божия для их совместной христианской жизни, рождения и воспитания детей.
              </p>
              <p className="leading-relaxed mb-4">
                В Таинстве Венчания супруги получают благодать для взаимной любви и единства. 
                Церковный брак символизирует союз Христа и Церкви, и потому христианский брак 
                нерасторжим по своей природе.
              </p>
              <p className="leading-relaxed">
                Венчание совершается после регистрации брака в ЗАГСе. Рекомендуется предварительная 
                беседа со священником для обсуждения смысла Таинства и особенностей подготовки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements and Restrictions */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Requirements */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Что необходимо
              </h2>
              <div className="space-y-3">
                {requirements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-background rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Restrictions */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Когда не совершается
              </h2>
              <div className="space-y-3">
                {restrictions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-background rounded-lg p-4">
                    <XCircle className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold mb-4">
                  Подготовка к Венчанию
                </h2>
                <div className="space-y-4 text-primary-foreground/90">
                  <p className="leading-relaxed">
                    <strong className="text-primary-foreground">1. Беседа со священником.</strong> Рекомендуется встретиться со священником 
                    заранее, чтобы обсудить смысл Таинства, ваши отношения и подготовку.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-primary-foreground">2. Исповедь и Причастие.</strong> Желательно исповедаться и причаститься 
                    накануне или в день Венчания, чтобы приступить к Таинству с чистой совестью.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-primary-foreground">3. Молитвенная подготовка.</strong> В дни перед Венчанием читайте молитвы, 
                    посещайте богослужения, готовьтесь духовно к новому этапу жизни.
                  </p>
                </div>
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
              Частые вопросы
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Можно ли венчаться без регистрации в ЗАГСе?',
                  a: 'Нет, по правилам Русской Православной Церкви венчание совершается только после государственной регистрации брака.',
                },
                {
                  q: 'Можно ли венчаться, если один из супругов не крещён?',
                  a: 'Оба супруга должны быть крещёнными православными христианами. Если один не крещён, он должен сначала принять Крещение.',
                },
                {
                  q: 'Нужны ли свидетели на Венчании?',
                  a: 'Свидетели (шаферы) не обязательны, но по традиции их приглашают. Они должны быть крещёными православными.',
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-foreground mb-2">
                      {item.q}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.a}
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
            Записаться на Венчание
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Для записи на Венчание свяжитесь с нами по телефону. 
            Рекомендуем записываться заблаговременно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="tel:+375291220196">Позвонить</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/sacraments/confession">
                Исповедь
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

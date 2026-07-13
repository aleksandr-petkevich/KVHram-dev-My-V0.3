import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Phone, Heart, Calendar, AlertCircle } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Венчание | Требы',
  description: 'Таинство Венчания в Храме Воздвижения Креста Господня. Подготовка к венчанию, требования, запись.',
}

const requirements = [
  'Оба супруга должны быть крещёными православными христианами',
  'Свидетельство о браке из ЗАГСа (обязательно)',
  'Предварительная беседа со священником',
  'Рекомендуется исповедоваться и причаститься перед Венчанием',
  'Два венчальных кольца',
  'Две венчальные свечи',
  'Рушники (полотенца) для стояния',
  'Иконы Спасителя и Богородицы (могут предоставить родители)',
]

const restrictions = [
  'Венчание не совершается в течение всех четырёх постов',
  'Во вторник, четверг и субботу (накануне постных дней и воскресенья)',
  'В Пасхальную седмицу',
  'Накануне двунадесятых и великих праздников',
  'В период от Рождества до Богоявления (Святки)',
]

const preparation = [
  {
    step: 1,
    title: 'Зарегистрируйте брак',
    description: 'Венчание совершается только после государственной регистрации брака. Принесите свидетельство о браке.',
  },
  {
    step: 2,
    title: 'Беседа со священником',
    description: 'Запишитесь на беседу с священником. Он расскажет о смысле Таинства и ответит на ваши вопросы.',
  },
  {
    step: 3,
    title: 'Исповедь и Причастие',
    description: 'Перед Венчанием рекомендуется приступить к Таинствам Исповеди и Причастия.',
  },
  {
    step: 4,
    title: 'Подготовьте всё необходимое',
    description: 'Кольца, свечи, рушники, иконы. Всё можно приобрести в церковной лавке храма.',
  },
]

export default function WeddingPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Венчание"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/services">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Требы
            </Link>
          </Button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
              Венчание
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Таинство церковного брака, в котором супруги получают благословение 
            на совместную христианскую жизнь и рождение детей
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              О Таинстве Венчания
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Венчание — это Таинство, в котором при свободном обещании супругами 
              взаимной верности Церковь благословляет их брачный союз во образ 
              духовного союза Христа с Церковью.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Венчание — не просто красивая традиция, а духовное событие, 
              в котором супруги испрашивают у Бога благодатной помощи для 
              совместной жизни, рождения и воспитания детей в вере.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation steps */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Подготовка к Венчанию
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Шаги для подготовки к Таинству Венчания
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preparation.map((item) => (
                <Card key={item.step}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground pl-16">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Что нужно для Венчания
            </h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Restrictions */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Когда не совершается Венчание
              </h2>
            </div>
            <Card className="border-destructive/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                  <p className="text-muted-foreground">
                    Венчание не совершается в определённые дни церковного года. 
                    Уточните удобную дату у священника при записи.
                  </p>
                </div>
                <ul className="space-y-3">
                  {restrictions.map((restriction, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      {restriction}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 text-secondary" />
          <h2 className="font-serif text-3xl font-bold mb-4">
            Запись на Венчание
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Для записи на Венчание и беседы со священником позвоните нам. 
            Рекомендуем записываться заранее — минимум за 2-3 недели.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="tel:+375291220196">
                <Phone className="w-4 h-4 mr-2" />
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

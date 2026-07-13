import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Phone, Users, BookOpen, Calendar } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Крещение | Требы',
  description: 'Таинство Крещения в Храме Воздвижения Креста Господня. Огласительные беседы, подготовка, что нужно для крещения.',
}

const requirements = [
  'Крёстные должны быть крещёными православными христианами',
  'Крёстные не могут быть супругами или жить в гражданском браке',
  'Крёстным не может быть родитель крещаемого ребёнка',
  'Для крещения взрослых крёстные не обязательны',
  'Необходимо иметь нательный крестик на верёвочке или цепочке',
  'Крестильная рубашка белого цвета',
  'Полотенце для вытирания после погружения',
]

const godparentsInfo = [
  {
    title: 'Обязанности крёстных',
    items: [
      'Быть примером христианской жизни для крестника',
      'Молиться о крестнике',
      'Участвовать в его христианском воспитании',
      'Знать основы веры: Символ веры, заповеди, молитвы',
    ],
  },
  {
    title: 'Кто не может быть крёстным',
    items: [
      'Некрещёные или представители других религий',
      'Малолетние дети (до 14-16 лет)',
      'Родители крещаемого ребёнка',
      'Монахи и монахини',
      'Лица, состоящие в браке друг с другом',
    ],
  },
]

const talks = [
  {
    number: 1,
    title: 'Первая беседа',
    topics: ['Символ веры', 'Основы православной веры', 'Смысл Таинства Крещения'],
  },
  {
    number: 2,
    title: 'Вторая беседа',
    topics: ['Заповеди Божии', 'Церковная жизнь', 'Обязанности крёстных'],
  },
]

export default function BaptismPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Крещение"
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
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Крещение
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Таинство духовного рождения, в котором человек рождается для новой жизни во Христе
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              О Таинстве Крещения
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Крещение — это первое из семи Таинств Православной Церкви, духовное рождение. 
              В Крещении человек очищается от первородного греха и всех личных грехов, 
              становится членом Церкви Христовой и получает возможность приступать к другим Таинствам.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Крестить можно как младенцев, так и взрослых людей. Для сознательного принятия 
              Крещения необходимо пройти подготовку — огласительные беседы.
            </p>
          </div>
        </div>
      </section>

      {/* Catechetical talks */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Огласительные беседы
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Перед Крещением родители и крёстные проходят обязательные огласительные беседы. 
                Беседы проводятся по воскресеньям после Литургии.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {talks.map((talk) => (
                <Card key={talk.number}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {talk.number}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {talk.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {talk.topics.map((topic, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6 border-secondary/50 bg-secondary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Расписание бесед</h3>
                    <p className="text-muted-foreground">
                      Огласительные беседы проводятся по воскресеньям после Божественной Литургии (примерно с 12:00). 
                      Записаться на беседы можно по телефону храма или в церковной лавке.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Что нужно для Крещения
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

      {/* Godparents */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                О крёстных (восприемниках)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Крёстные родители берут на себя ответственность за духовное воспитание крестника
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {godparentsInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4 pb-3 border-b border-border">
                      {info.title}
                    </h3>
                    <ul className="space-y-3">
                      {info.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
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

      {/* Schedule and Contact */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Запись на Крещение
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-4">
            Крещение совершается по субботам и воскресеньям после Божественной Литургии.
          </p>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Для записи позвоните нам или приходите в храм.
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
                Как добраться
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

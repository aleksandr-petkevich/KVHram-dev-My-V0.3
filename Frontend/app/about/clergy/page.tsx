import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Phone, Mail } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Духовенство',
  description: 'Священнослужители Храма Воздвижения Креста Господня в Минске.',
}

const clergy = [
  {
    name: 'Протоиерей Олег Александрович Кунцевич',
    title: 'Настоятель прихода храма Воздвижения Креста Господня',
    image: '/images/clergy/kuntsevich.jpg',
    bio: 'Дата рождения: 07.07.1972. Дата хиротонии: 20.02.2010 – диаконская; 27.04.2010 – иерейская. Образование: БГПА (1995); Минская духовная семинария (2006); Минская духовная академия (2009), кандидат богословия.',
   
  },
  {
    name: 'Александр Иванович Чур',
    title: 'Иерей',
    image: '/images/clergy/chur.jpg',
    bio: 'Дата рождения: 23.01.1982. Дата хиротонии: 22.04.2008 – диаконская; 03.08.2008 – иерейская. Образование: Минская духовная семинария (2008); Минская духовная академия (2012).',
   
  },
  {
    name: 'Николай Вадимович Шульмин',
    title: 'Иерей',
    image: '/images/clergy/shulmin.jpg',
    bio: 'Дата рождения: 24.10.1985. Дата хиротонии: 19.04.2011 – диаконская; 04.08.2013 – иерейская. Образование: Минский государственный колледж пищевой промышленности (2004); Минская духовная семинария (2009); Московская духовная академия (2012), бакалавр богословия.',

  },
  {
    name: 'Иоанн (Иван) Александрович Иванов',
    title: 'Иерей',
    image: '/images/clergy/ivanov.jpg',
    bio: 'Дата рождения: 06.06.1997. Дата хиротонии: 22.12.2024 – диаконская; 07.07.2025 – иерейская. Образование: Институт теологии БГУ (2019); Минская духовная академия (2021), магистр богословия.',
  },
]

export default function ClergyPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-service.jpg"
            alt="Духовенство храма"
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
              Духовенство
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Познакомьтесь со священнослужителями нашего прихода,
              которые совершают богослужения и духовно окормляют верующих.
            </p>
          </div>
        </div>
      </section>

      {/* Clergy list */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {clergy.map((priest, index) => (
              <Card key={priest.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-[400px] lg:h-auto lg:aspect-[3/4] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={priest.image}
                        alt={priest.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-2 p-8 md:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-base font-medium mb-4">
                        {priest.title}
                      </span>
                      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {priest.name}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {priest.bio}
                      </p>

                      <div className="mb-6">
                       
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Связаться со священником
            </h2>
            <p className="text-muted-foreground mb-8">
              Если у вас есть вопросы духовного характера или вы хотите договориться о встрече,
              свяжитесь с нами любым удобным способом.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <a
                href="tel:+375291220196"
                className="flex items-center justify-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-medium text-foreground">+375 (29) 122-01-96</p>
                </div>
              </a>
              <a
                href="mailto:kvhram@mail.by"
                className="flex items-center justify-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">kvhram@mail.by</p>
                </div>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              Исповедь совершается перед каждой Литургией и во время вечерних богослужений.
              Для более длительной беседы рекомендуем предварительно договориться о встрече.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            Узнайте больше о нашем приходе
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/about/history">История храма</Link>
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
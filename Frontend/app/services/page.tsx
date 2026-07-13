import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Droplets, Heart, Home, Cross, FileText, Phone, ChevronRight } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Требы | Храм Воздвижения Креста Господня',
  description: 'Церковные требы: крещение, венчание, освящение квартиры, отпевание, молебны, панихиды. Запись и подготовка.',
}

const mainServices = [
  {
    icon: Droplets,
    title: 'Крещение',
    description: 'Таинство духовного рождения для детей и взрослых. Обязательны огласительные беседы для родителей и крёстных.',
    href: '/services/baptism',
    schedule: 'Суббота и воскресенье после Литургии',
    preparation: 'Огласительные беседы',
  },
  {
    icon: Heart,
    title: 'Венчание',
    description: 'Таинство церковного брака. Требуется свидетельство о браке из ЗАГСа и предварительная беседа.',
    href: '/services/wedding',
    schedule: 'По согласованию (кроме постов)',
    preparation: 'Беседа со священником',
  },
  {
    icon: Home,
    title: 'Освящение',
    description: 'Освящение квартиры, дома, автомобиля, офиса и других помещений. Выезд священника на дом.',
    href: '/services/blessing',
    schedule: 'По договорённости',
    preparation: 'Запись по телефону',
  },
  {
    icon: Cross,
    title: 'Отпевание',
    description: 'Чин погребения православного христианина. Совершается в храме или на дому.',
    href: '/services/funeral',
    schedule: 'По необходимости',
    preparation: 'Свидетельство о смерти',
  },
]

const additionalServices = [
  {
    title: 'Молебен',
    description: 'Краткое богослужение с молитвой о здравии, благословением на дело, благодарением.',
    icon: FileText,
  },
  {
    title: 'Панихида',
    description: 'Заупокойное богослужение по усопшим. Совершается в храме или на кладбище.',
    icon: Cross,
  },
  {
    title: 'Сорокоуст',
    description: 'Поминовение на Литургии в течение 40 дней о здравии или об упокоении.',
    icon: FileText,
  },
  {
    title: 'Соборование',
    description: 'Таинство исцеления души и тела. Совершается над болящими и Великим постом.',
    icon: Heart,
  },
]

export default function ServicesPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Церковные требы"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Требы
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Церковные требы — богослужения, совершаемые по просьбе верующих. 
              Здесь вы найдёте информацию о подготовке и записи на крещение, 
              венчание, освящение и другие требы.
            </p>
          </div>
        </div>
      </section>

      {/* Main services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Основные требы
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Для совершения треб необходима предварительная запись и подготовка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {mainServices.map((service) => (
              <Link key={service.title} href={service.href}>
                <Card className="group h-full hover:shadow-lg transition-all hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                          {service.title}
                          <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                            {service.schedule}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 bg-secondary/20 rounded-full text-xs text-secondary">
                            {service.preparation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Другие требы и поминовения
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Молебны, панихиды и поминовения можно заказать в церковной лавке
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Как заказать требу
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold text-foreground mb-2">Позвоните</h3>
                <p className="text-muted-foreground text-sm">
                  Свяжитесь с нами по телефону для записи и уточнения деталей
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold text-foreground mb-2">Подготовьтесь</h3>
                <p className="text-muted-foreground text-sm">
                  Пройдите необходимую подготовку (беседы, документы)
                </p>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold text-foreground mb-2">Приходите</h3>
                <p className="text-muted-foreground text-sm">
                  В назначенное время приходите в храм для совершения требы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Phone className="w-12 h-12 mx-auto mb-6 text-secondary" />
          <h2 className="font-serif text-3xl font-bold mb-4">
            Запись на требы
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Для записи на крещение, венчание, освящение или другие требы 
            позвоните нам или приходите в храм.
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

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, History, Users, Church, Heart } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'О храме',
  description: 'Храм Воздвижения Креста Господня в Минске - история, духовенство, приходская жизнь.',
}

const sections = [
  {
    icon: History,
    title: 'История храма',
    description: 'Узнайте об истории создания и развития нашего храма',
    href: '/about/history',
    image: '/images/church-history.jpg',
  },
  {
    icon: Users,
    title: 'Духовенство',
    description: 'Познакомьтесь со священнослужителями нашего прихода',
    href: '/about/clergy',
    image: '/images/priest-1.jpg',
  },
  {
    icon: Church,
    title: 'Приходская жизнь',
    description: 'Воскресная школа, молодёжные группы, социальное служение',
    href: '/about/parish-life',
    image: '/images/church-service.jpg',
  },
]

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Интерьер храма"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              О храме
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Храм Воздвижения Креста Господня
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Наш храм — место молитвы, духовного возрастания и общения верующих людей. 
              Мы приглашаем вас познакомиться с нашей историей, духовенством и приходской жизнью.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Добро пожаловать в наш храм
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Храм Воздвижения Креста Господня в городе Минске — это место, где верующие 
                  собираются для молитвы, участия в Таинствах и духовного общения. 
                  Наш приход является частью Минской епархии Белорусской Православной Церкви.
                </p>
                <p>
                  В храме ежедневно совершаются богослужения, работает воскресная школа для детей, 
                  проводятся огласительные беседы перед Крещением и другими Таинствами. 
                  Мы стремимся создать тёплую, семейную атмосферу для всех прихожан.
                </p>
                <p>
                  Наши двери всегда открыты для всех, кто ищет Бога, хочет узнать больше 
                  о православной вере или просто нуждается в духовной поддержке и утешении.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-church.jpg"
                  alt="Храм Воздвижения Креста Господня"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link key={section.title} href={section.href}>
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {section.title}
                      <ChevronRight className="w-5 h-5" />
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Наши ценности
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы стремимся хранить и передавать православную веру, служить Богу и ближним
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Church, title: 'Вера', text: 'Хранение православной традиции' },
              { icon: Heart, title: 'Любовь', text: 'Забота о ближних' },
              { icon: Users, title: 'Общение', text: 'Единство в молитве' },
              { icon: History, title: 'Традиция', text: 'Связь поколений' },
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-background rounded-xl">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Приходите к нам
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Мы всегда рады видеть новых людей на наших богослужениях. 
            Ознакомьтесь с расписанием и приходите.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/schedule">Расписание богослужений</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Контакты</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Droplets, Heart, BookOpen, Cross, Users, ChevronRight } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Таинства',
  description: 'Церковные таинства в Храме Воздвижения Креста Господня: Крещение, Венчание, Исповедь, Причастие, Соборование.',
}

const sacraments = [
  {
    icon: Droplets,
    title: 'Крещение',
    description: 'Таинство духовного рождения, в котором человек рождается для вечной жизни. Проводятся обязательные огласительные беседы.',
    href: '/sacraments/baptism',
    schedule: 'Суббота и воскресенье после Литургии',
  },
  {
    icon: Heart,
    title: 'Венчание',
    description: 'Таинство церковного брака, в котором супруги получают благословение на совместную христианскую жизнь.',
    href: '/sacraments/wedding',
    schedule: 'По согласованию (кроме постов)',
  },
  {
    icon: BookOpen,
    title: 'Исповедь',
    description: 'Таинство покаяния, в котором христианин получает прощение грехов и примирение с Богом.',
    href: '/sacraments/confession',
    schedule: 'Перед каждой Литургией',
  },
  {
    icon: Cross,
    title: 'Причастие',
    description: 'Таинство Евхаристии — соединение с Христом через принятие Его Тела и Крови.',
    href: '/sacraments',
    schedule: 'На каждой Литургии',
  },
  {
    icon: Users,
    title: 'Соборование',
    description: 'Таинство исцеления души и тела, совершаемое над болящими или во время Великого поста.',
    href: '/sacraments',
    schedule: 'Великий пост и по необходимости',
  },
]

export default function SacramentsPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Церковные таинства"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Церковные Таинства
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              В нашем храме совершаются все семь Таинств Православной Церкви. 
              Узнайте подробнее о каждом из них и о том, как к ним подготовиться.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              О Таинствах Церкви
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Таинства — это священные действия, в которых под видимым образом 
              подаётся верующим невидимая благодать Божия. Православная Церковь 
              признаёт семь Таинств: Крещение, Миропомазание, Евхаристия (Причащение), 
              Покаяние (Исповедь), Священство, Брак (Венчание) и Елеосвящение (Соборование).
            </p>
          </div>
        </div>
      </section>

      {/* Sacraments list */}
      <section className="py-8 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sacraments.map((sacrament) => (
              <Link key={sacrament.title} href={sacrament.href}>
                <Card className="group h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <sacrament.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                      {sacrament.title}
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {sacrament.description}
                    </p>
                    <p className="text-sm text-primary font-medium">
                      {sacrament.schedule}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Подготовка к Таинствам
            </h2>
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-serif font-bold text-foreground mb-3">Перед Причастием</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Необходимо приступить к Таинству Исповеди, соблюдать пост (минимум один день), 
                  прочитать молитвенное правило ко Святому Причащению, не есть и не пить 
                  после полуночи (евхаристический пост).
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-serif font-bold text-foreground mb-3">Перед Крещением</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Родители и крёстные должны пройти огласительные беседы. 
                  Крёстные должны быть крещёнными православными христианами.
                  Необходимо иметь крестик, крестильную рубашку и полотенце.
                </p>
              </div>
              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="font-serif font-bold text-foreground mb-3">Перед Венчанием</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Необходимо быть крещёнными и зарегистрировать брак в ЗАГСе. 
                  Рекомендуется исповедаться и причаститься перед Венчанием. 
                  Требуется предварительная беседа со священником.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Есть вопросы?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Если у вас есть вопросы о Таинствах или вы хотите записаться, 
            свяжитесь с нами или приходите на беседу со священником.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+375291220196"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              +375 (29) 122-01-96
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Контакты
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

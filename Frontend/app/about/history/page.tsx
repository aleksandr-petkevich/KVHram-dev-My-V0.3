import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Calendar } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'История храма',
  description: 'История Храма Воздвижения Креста Господня в Минске - от основания до наших дней.',
}

const timeline = [
  {
    year: '1990-е',
    title: 'Начало возрождения',
    description: 'В годы духовного возрождения Беларуси начались первые шаги по созданию нового прихода на территории современного Минска. Верующие собирались для молитвы и планирования будущего храма.',
  },
  {
    year: '2000-е',
    title: 'Строительство храма',
    description: 'Благодаря усилиям прихожан и благотворителей началось строительство храма. Постепенно возводились стены будущей святыни, устанавливались купола.',
  },
  {
    year: '2010',
    title: 'Освящение храма',
    description: 'Храм Воздвижения Креста Господня был освящён архиерейским чином. С этого момента начались регулярные богослужения.',
  },
  {
    year: '2015',
    title: 'Развитие прихода',
    description: 'Открыта воскресная школа для детей, начаты регулярные огласительные беседы, сформировалась крепкая приходская община.',
  },
  {
    year: '2020',
    title: 'Современная жизнь',
    description: 'Храм стал духовным центром района. Ежедневно совершаются богослужения, проводятся различные приходские мероприятия, оказывается благотворительная помощь нуждающимся.',
  },
  {
    year: 'Сегодня',
    title: 'Продолжение служения',
    description: 'Наш храм продолжает своё служение Богу и людям, принимая всех, кто ищет духовной поддержки и стремится к познанию православной веры.',
  },
]

export default function HistoryPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-history.jpg"
            alt="История храма"
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
              История храма
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              История создания и развития Храма Воздвижения Креста Господня в Минске — 
              это история веры, труда и любви многих людей.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                От истоков до современности
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Храм Воздвижения Креста Господня был основан в эпоху духовного возрождения Беларуси. 
                  Его история — это свидетельство неугасающей веры православных христиан 
                  и их стремления иметь своё место для молитвы и богослужения.
                </p>
                <p>
                  Престольный праздник храма — Воздвижение Честного и Животворящего Креста Господня, 
                  отмечается 27 сентября (14 сентября по старому стилю). В этот день Церковь 
                  вспоминает обретение Креста Господня святой царицей Еленой в IV веке.
                </p>
                <p>
                  Крест Христов является главным символом нашей веры, знаком победы над смертью 
                  и надежды на воскресение. Именно поэтому наш храм посвящён этому великому празднику.
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
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Хронология
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Вехи истории
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Основные события в истории нашего храма и прихода
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                </div>

                <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                  <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patronal feast */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Престольный праздник
            </h2>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
              <p className="text-6xl md:text-8xl font-serif font-bold text-secondary mb-4">27</p>
              <p className="text-xl md:text-2xl font-medium mb-4">сентября</p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                Воздвижение Честного и Животворящего Креста Господня
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                В этот день мы особенно торжественно отмечаем наш престольный праздник. 
                Приглашаем всех прихожан и гостей на праздничное богослужение.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
            Узнайте больше о нашем приходе
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/about/clergy">Духовенство</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about/parish-life">Приходская жизнь</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

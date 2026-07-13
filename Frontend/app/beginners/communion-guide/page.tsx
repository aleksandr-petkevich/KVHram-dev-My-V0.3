import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, CheckCircle, Clock, Utensils } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Подготовка к причастию | Для новоначальных',
  description: 'Как подготовиться к Святому Причащению: пост, молитвенное правило, евхаристический пост.',
}

const preparation = [
  {
    icon: Calendar,
    title: 'Пост',
    description: 'Перед Причастием соблюдается пост. Для новоначальных — минимум 1-3 дня. Воздерживаются от мяса, молочных продуктов, яиц. Также воздержание от развлечений, супружеской близости.',
  },
  {
    icon: Utensils,
    title: 'Евхаристический пост',
    description: 'После полуночи перед Причастием нельзя есть и пить (даже воду). Если Литургия вечером — воздержание минимум 6 часов.',
  },
  {
    icon: Clock,
    title: 'Молитвенное правило',
    description: 'Накануне вечером прочитайте: Канон покаянный, Канон Богородице, Канон Ангелу Хранителю. Утром — Последование ко Святому Причащению.',
  },
]

const prayerRule = [
  'Канон покаянный ко Господу нашему Иисусу Христу',
  'Канон молебный ко Пресвятой Богородице',
  'Канон Ангелу Хранителю',
  'Последование ко Святому Причащению (читается утром или накануне вечером)',
]

const steps = [
  {
    title: 'Исповедь',
    description: 'Перед Причастием необходимо исповедаться. Приходите на исповедь заранее — вечером накануне или утром перед Литургией.',
  },
  {
    title: 'Причащение',
    description: 'Во время Литургии, когда священник вынесет Чашу, подходите сложив руки крестообразно на груди (правая поверх левой). Назовите своё имя.',
  },
  {
    title: 'После Причастия',
    description: 'Поцелуйте край Чаши, отойдите к столику с теплотой (запивкой). Выпейте немного и съешьте просфору. Дождитесь окончания службы.',
  },
]

const tips = [
  'Причащаться можно на любой Литургии, но обычно на воскресной',
  'Если вы причащаетесь впервые, скажите об этом священнику на исповеди',
  'Женщинам нельзя причащаться в определённые дни (можно уточнить у священника)',
  'После Причастия в этот день старайтесь сохранять молитвенное настроение',
  'Не плюйте, не ссорьтесь, избегайте суеты и пустых разговоров',
]

export default function CommunionGuidePage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/beginners">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Для новоначальных
            </Link>
          </Button>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Подготовка к причастию
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Всё, что нужно знать о подготовке к Таинству Святого Причащения (Евхаристии)
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Что такое Причастие
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Святое Причастие (Евхаристия) — главное Таинство Церкви, в котором верующие 
              под видом хлеба и вина принимают истинные Тело и Кровь Господа Иисуса Христа. 
              Это соединение с Богом, необходимое для духовной жизни христианина.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Сам Господь заповедал нам: «Ядущий Мою Плоть и пиющий Мою Кровь имеет жизнь вечную» 
              (Ин. 6:54). Православные христиане стараются причащаться регулярно — многие каждое 
              воскресенье или хотя бы раз в месяц.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Как подготовиться
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {preparation.map((item, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer rule */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Молитвенное правило
            </h2>
            <p className="text-muted-foreground mb-6">
              Перед Причастием читается особое молитвенное правило. 
              Для новоначальных священник может благословить сокращённое правило.
            </p>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">
                  Полное правило включает:
                </h3>
                <ul className="space-y-3">
                  {prayerRule.map((prayer, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{prayer}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm mt-6 pt-4 border-t border-border">
                  Тексты можно найти в молитвослове или в православных приложениях. 
                  Если правило кажется сложным, спросите благословение священника на сокращённое.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              Порядок Причащения
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="bg-primary-foreground/10 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-serif text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-primary-foreground/80 pl-14">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Полезные советы
            </h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Узнайте расписание Литургий
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Причащение совершается во время каждой Божественной Литургии. 
            Посмотрите расписание богослужений нашего храма.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/schedule">Расписание служб</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/beginners/confession-guide">Как исповедоваться</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

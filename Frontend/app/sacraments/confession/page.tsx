import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Clock, BookOpen } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Исповедь',
  description: 'Таинство Исповеди в Храме Воздвижения Креста Господня. Подготовка к исповеди.',
}

const preparationSteps = [
  {
    title: 'Испытание совести',
    description: 'Перед исповедью вспомните свои грехи. Для этого полезно прочитать заповеди Божии и подумать, в чём вы согрешили.',
  },
  {
    title: 'Покаяние',
    description: 'Покаяние — это не просто перечисление грехов, а искреннее сожаление о них и твёрдое намерение исправиться.',
  },
  {
    title: 'Прощение обид',
    description: 'Перед исповедью примиритесь со всеми, кого обидели, и простите тех, кто обидел вас.',
  },
  {
    title: 'Молитва',
    description: 'Читайте покаянные молитвы, особенно Покаянный канон и молитвы ко Святому Причащению (если готовитесь причащаться).',
  },
]

const commonQuestions = [
  {
    q: 'Как часто нужно исповедоваться?',
    a: 'Церковь рекомендует исповедоваться регулярно, не реже одного раза в месяц, а также перед каждым Причастием.',
  },
  {
    q: 'Нужно ли записывать грехи?',
    a: 'Записывать грехи полезно, особенно если вы давно не исповедовались. Записи помогут ничего не забыть.',
  },
  {
    q: 'Можно ли исповедоваться, не причащаясь?',
    a: 'Да, можно исповедоваться без последующего Причастия, хотя эти Таинства тесно связаны.',
  },
  {
    q: 'Что делать, если стыдно говорить о грехах?',
    a: 'Помните, что священник — только свидетель, а прощает грехи Сам Бог. Священник связан тайной исповеди и никому не расскажет о услышанном.',
  },
]

export default function ConfessionPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Таинство Исповеди"
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
              Таинство Исповеди
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Исповедь — это Таинство покаяния, в котором христианин получает прощение грехов 
              и примирение с Богом и Церковью.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-8 bg-secondary/10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Утром</p>
                <p className="font-medium text-foreground">Перед каждой Литургией</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Вечером</p>
                <p className="font-medium text-foreground">Во время вечернего богослужения</p>
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
              О Таинстве Исповеди
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-4">
                Исповедь (Таинство Покаяния) — это Таинство, в котором христианин, исповедуя свои грехи 
                перед священником, получает через него от Бога прощение. Священник при этом является 
                только свидетелем, а прощает грехи Сам Господь.
              </p>
              <p className="leading-relaxed mb-4">
                Покаяние — это не просто формальное перечисление грехов, а глубокое сердечное сокрушение 
                о содеянном и твёрдое намерение изменить свою жизнь. Истинное покаяние приносит мир душе 
                и обновляет духовные силы.
              </p>
              <p className="leading-relaxed">
                Исповедь тесно связана с Причастием. По практике Русской Православной Церкви, 
                исповедь перед Причастием обязательна.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                Подготовка
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Как подготовиться к исповеди
              </h2>
            </div>

            <div className="space-y-4">
              {preparationSteps.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ten Commandments reminder */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold mb-4">
                  Испытание совести
                </h2>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  При подготовке к исповеди полезно проверить свою совесть по заповедям Божиим. 
                  Десять заповедей Закона Божия помогут вспомнить, в чём вы могли согрешить:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    1. Не имей других богов
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    2. Не сотвори себе кумира
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    3. Не произноси имя Бога напрасно
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    4. Помни день субботний
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    5. Почитай отца и мать
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    6. Не убивай
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    7. Не прелюбодействуй
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    8. Не кради
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    9. Не лжесвидетельствуй
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-3">
                    10. Не желай чужого
                  </div>
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
              {commonQuestions.map((item, index) => (
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
            Приходите на исповедь
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Исповедь совершается ежедневно перед Литургией и во время вечернего богослужения. 
            Приходите заблаговременно.
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

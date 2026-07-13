import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Heart, CheckCircle, AlertCircle } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Как исповедоваться | Для новоначальных',
  description: 'Подготовка к первой исповеди: что говорить священнику, как готовиться, как преодолеть страх.',
}

const preparationSteps = [
  {
    title: 'Испытание совести',
    description: 'Вспомните свои грехи, совершённые со времени последней исповеди (или за всю жизнь, если исповедуетесь впервые). Можно записать их на бумаге.',
  },
  {
    title: 'Покаяние',
    description: 'Важно не просто перечислить грехи, но искренне сожалеть о них и иметь решимость исправиться.',
  },
  {
    title: 'Примирение',
    description: 'Постарайтесь примириться с теми, с кем вы в ссоре. Простите тех, кто вас обидел.',
  },
  {
    title: 'Молитва',
    description: 'Прочитайте покаянный канон или молитвы перед исповедью из молитвослова.',
  },
]

const sins = [
  {
    category: 'Грехи против Бога',
    items: [
      'Неверие, сомнения в вере',
      'Редкое посещение храма',
      'Непочитание праздников',
      'Ропот на Бога в трудностях',
      'Обращение к гадалкам, гороскопам',
    ],
  },
  {
    category: 'Грехи против ближних',
    items: [
      'Осуждение, злословие',
      'Гнев, раздражение',
      'Обман, ложь',
      'Зависть',
      'Непочитание родителей',
      'Непрощение обид',
    ],
  },
  {
    category: 'Грехи против себя',
    items: [
      'Лень, уныние',
      'Чревоугодие, пьянство',
      'Сквернословие',
      'Блудные помыслы и дела',
      'Гордость, тщеславие',
    ],
  },
]

const tips = [
  'Приходите на исповедь заранее, до начала Литургии',
  'Не стесняйтесь и не бойтесь — священник слышал всё',
  'Говорите о грехах конкретно, без оправданий',
  'Не обвиняйте других, говорите только о себе',
  'Если не помните всех грехов — скажите главное',
  'После исповеди старайтесь не повторять тех же грехов',
]

export default function ConfessionGuidePage() {
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
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance">
                Как исповедоваться
              </h1>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Руководство для подготовки к первой исповеди и Таинству Покаяния
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Что такое исповедь
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Исповедь (Таинство Покаяния) — это Таинство, в котором верующий исповедует 
              свои грехи Богу в присутствии священника и получает через священника прощение 
              грехов от Самого Господа Иисуса Христа.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Священник не судья, а свидетель вашего покаяния перед Богом. Он связан тайной 
              исповеди и никогда не расскажет о том, что услышал. Не бойтесь и не стесняйтесь — 
              священники слышали всё и ничему не удивятся.
            </p>
            <Card className="border-secondary/50 bg-secondary/5">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <p className="text-foreground">
                    Первая исповедь может быть трудной, но она принесёт огромное облегчение. 
                    Помните: Бог ждёт вашего покаяния и готов простить.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Подготовка к исповеди
            </h2>
            <div className="space-y-4">
              {preparationSteps.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
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

      {/* Sins */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Примеры грехов для размышления
            </h2>
            <p className="text-muted-foreground mb-8">
              Этот список поможет вам вспомнить свои грехи при подготовке к исповеди. 
              Это не полный перечень, а лишь примеры для размышления.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sins.map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-serif font-bold text-foreground mb-4 pb-3 border-b border-border">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground text-sm flex items-start gap-2">
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

      {/* How it works */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">
              Как проходит исповедь
            </h2>
            <div className="space-y-6">
              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <h3 className="font-bold mb-2">1. Подойдите к священнику</h3>
                <p className="text-primary-foreground/80">
                  Встаньте перед аналоем (подставкой с крестом и Евангелием). Священник накроет 
                  вашу голову епитрахилью (часть облачения).
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <h3 className="font-bold mb-2">2. Исповедуйте грехи</h3>
                <p className="text-primary-foreground/80">
                  Назовите свои грехи. Если исповедуетесь впервые, скажите об этом. 
                  Можно читать с листка, если записывали. Говорите кратко и по существу.
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <h3 className="font-bold mb-2">3. Выслушайте священника</h3>
                <p className="text-primary-foreground/80">
                  Священник может дать наставление или задать уточняющие вопросы. 
                  Внимательно слушайте.
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-6">
                <h3 className="font-bold mb-2">4. Разрешительная молитва</h3>
                <p className="text-primary-foreground/80">
                  Священник прочитает разрешительную молитву. Перекреститесь, 
                  поцелуйте крест и Евангелие на аналое.
                </p>
              </div>
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

      {/* Next steps */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            После исповеди
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            После исповеди вы можете приступить к Святому Причащению. 
            Узнайте, как правильно подготовиться.
          </p>
          <Button asChild size="lg">
            <Link href="/beginners/communion-guide">
              Подготовка к причастию
            </Link>
          </Button>
        </div>
      </section>
    </PageWrapper>
  )
}

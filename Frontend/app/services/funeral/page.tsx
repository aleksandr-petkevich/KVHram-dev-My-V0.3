import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Phone, Cross, FileText, CheckCircle, Heart } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Отпевание | Требы',
  description: 'Чин православного погребения (отпевание) в Храме Воздвижения Креста Господня. Информация о подготовке и проведении.',
}

const requirements = [
  'Свидетельство о смерти',
  'Усопший должен быть крещёным православным христианином',
  'Венчик на лоб и лист с разрешительной молитвой (можно приобрести в храме)',
  'Нательный крестик (если снят — надеть)',
  'Икона в руки усопшему',
]

const types = [
  {
    title: 'Отпевание в храме',
    description: 'Традиционный чин погребения, совершаемый в храме перед похоронами. Это наиболее полный и торжественный чин.',
  },
  {
    title: 'Отпевание на дому',
    description: 'В особых случаях отпевание может быть совершено на дому. Договоритесь об этом со священником.',
  },
  {
    title: 'Заочное отпевание',
    description: 'Совершается, когда нет возможности отпеть усопшего при теле (например, если человек умер давно и уже похоронен).',
  },
]

const afterFuneral = [
  {
    title: 'Поминовение на 9-й день',
    description: 'Закажите панихиду или литию в храме на девятый день после смерти.',
  },
  {
    title: 'Поминовение на 40-й день',
    description: 'Сороковины — важный день поминовения. Закажите панихиду и сорокоуст об упокоении.',
  },
  {
    title: 'Годовщина',
    description: 'В годовщину смерти посетите храм, закажите панихиду, помолитесь об усопшем.',
  },
  {
    title: 'Регулярное поминовение',
    description: 'Подавайте записки об упокоении на Литургию, заказывайте панихиды на родительские субботы.',
  },
]

export default function FuneralPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Отпевание"
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
              <Cross className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
              Отпевание
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Чин православного погребения — молитвенное напутствие усопшего в вечную жизнь
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              О чине погребения
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Отпевание — это церковное молитвенное чинопоследование, совершаемое 
              над телом умершего православного христианина. В молитвах Церковь 
              испрашивает у Бога прощения грехов усопшего и упокоения его души 
              в Царствии Небесном.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Отпевание — это не прощание с человеком, а молитва о его душе. 
              Церковь верует в воскресение мёртвых и жизнь будущего века, 
              поэтому смерть для христианина — это переход в вечность.
            </p>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Виды отпевания
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {types.map((type, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {type.description}
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
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Что необходимо
              </h2>
            </div>
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

      {/* After funeral */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Поминовение после погребения
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Церковь призывает не забывать об усопших и молиться о них
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {afterFuneral.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important note */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-destructive/30 bg-destructive/5">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Важно знать
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Церковь не отпевает некрещёных, а также тех, кто сознательно 
                  покончил жизнь самоубийством (кроме случаев психического расстройства 
                  с разрешения правящего архиерея).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Кремация не является препятствием к отпеванию, однако Церковь 
                  призывает по возможности предавать тело земле по христианскому обычаю.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Cross className="w-12 h-12 mx-auto mb-6 text-secondary" />
          <h2 className="font-serif text-3xl font-bold mb-4">
            Связаться с храмом
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            В трудную минуту мы рядом. Позвоните нам в любое время — 
            мы поможем организовать отпевание и ответим на все вопросы.
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

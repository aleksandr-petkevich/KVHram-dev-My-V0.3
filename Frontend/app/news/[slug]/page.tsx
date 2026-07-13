import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, Calendar, Tag, Share2, ChevronRight } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// Mock data - in production this would come from a database
const articles: Record<string, {
  title: string
  date: string
  category: string
  image: string
  content: string[]
}> = {
  'prestolnyj-prazdnik-2024': {
    title: 'Престольный праздник Воздвижения Креста Господня',
    date: '20 сентября 2024',
    category: 'Праздники',
    image: '/images/church-interior.jpg',
    content: [
      'Дорогие братья и сёстры! Приглашаем всех прихожан и гостей на торжественное богослужение в честь престольного праздника нашего храма — Воздвижения Честного и Животворящего Креста Господня.',
      'Праздник Воздвижения Креста Господня отмечается Церковью 27 сентября (14 сентября по старому стилю). В этот день мы вспоминаем обретение Креста Господня святой царицей Еленой в IV веке в Иерусалиме.',
      'Расписание праздничных богослужений:',
      '26 сентября (накануне праздника): 17:00 — Всенощное бдение с выносом Креста.',
      '27 сентября (день праздника): 7:00 — Ранняя Божественная Литургия. 9:30 — Поздняя Божественная Литургия с крестным ходом.',
      'После поздней Литургии состоится праздничная трапеза для всех прихожан. Приглашаем всех желающих разделить с нами радость праздника!',
      'Напоминаем, что Воздвижение Креста Господня является днём строгого поста. Просим учитывать это при подготовке к Причастию.',
    ],
  },
  'nachalo-zanyatij-voskresnoi-shkoly': {
    title: 'Начало занятий в воскресной школе',
    date: '28 августа 2024',
    category: 'Образование',
    image: '/images/church-service.jpg',
    content: [
      'С 1 сентября возобновляются занятия в воскресной школе для детей при нашем храме.',
      'Приглашаем детей от 5 до 14 лет присоединиться к нашим занятиям. Воскресная школа работает каждое воскресенье после Божественной Литургии.',
      'В программе обучения: Закон Божий, история Церкви, основы церковнославянского языка, церковное пение, творческие занятия.',
      'Занятия проводятся опытными педагогами под руководством настоятеля храма. Для детей организовано чаепитие.',
      'Для записи в воскресную школу обращайтесь в церковную лавку или по телефону: +375 (29) 122-01-96.',
      'Ждём ваших детей на наших занятиях!',
    ],
  },
  'oglasitelnye-besedy': {
    title: 'Огласительные беседы перед Крещением',
    date: '15 августа 2024',
    category: 'Таинства',
    image: '/images/hero-church.jpg',
    content: [
      'Напоминаем, что для совершения Таинства Крещения в нашем храме необходимо пройти огласительные беседы.',
      'Беседы проводятся каждую субботу в 15:00 в помещении воскресной школы. Продолжительность беседы — около 1,5 часов.',
      'На беседах необходимо присутствие родителей (если крестят ребёнка) и крёстных. Взрослые, готовящиеся к Крещению, также должны пройти цикл огласительных бесед.',
      'На беседах рассматриваются основы православной веры, смысл Таинства Крещения, обязанности крёстных родителей.',
      'После прохождения бесед выдаётся справка, которая необходима для совершения Таинства.',
      'По всем вопросам обращайтесь в церковную лавку или по телефону храма.',
    ],
  },
}

const relatedArticles = [
  {
    slug: 'prestolnyj-prazdnik-2024',
    title: 'Престольный праздник',
    date: '20 сентября 2024',
    image: '/images/church-interior.jpg',
  },
  {
    slug: 'nachalo-zanyatij-voskresnoi-shkoly',
    title: 'Воскресная школа',
    date: '28 августа 2024',
    image: '/images/church-service.jpg',
  },
]

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles[slug]
  
  if (!article) {
    return {
      title: 'Статья не найдена',
    }
  }

  return {
    title: article.title,
    description: article.content[0],
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    notFound()
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Button asChild variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground mb-6">
            <Link href="/news">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Все новости
            </Link>
          </Button>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/90 text-secondary-foreground rounded-full text-sm font-medium">
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
              <span className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <article className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {article.content.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Поделиться:</span>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Поделиться
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  Другие новости
                </h3>
                <div className="space-y-4">
                  {relatedArticles
                    .filter(a => a.slug !== slug)
                    .map((related) => (
                      <Link key={related.slug} href={`/news/${related.slug}`}>
                        <Card className="group overflow-hidden hover:shadow-md transition-shadow">
                          <div className="relative h-32 overflow-hidden">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <CardContent className="p-4">
                            <p className="text-xs text-muted-foreground mb-1">{related.date}</p>
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {related.title}
                            </h4>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>

                <div className="mt-8">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/news">
                      Все новости
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

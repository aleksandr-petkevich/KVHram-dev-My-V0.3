import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ChevronRight, Tag } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Новости',
  description: 'Новости и события Храма Воздвижения Креста Господня в Минске.',
}

const news = [
  {
    id: 1,
    slug: 'prestolnyj-prazdnik-2024',
    title: 'Престольный праздник Воздвижения Креста Господня',
    excerpt: 'Приглашаем всех прихожан и гостей на торжественное богослужение в честь престольного праздника нашего храма 27 сентября.',
    date: '20 сентября 2024',
    image: '/images/church-interior.jpg',
    category: 'Праздники',
  },
  {
    id: 2,
    slug: 'nachalo-zanyatij-voskresnoi-shkoly',
    title: 'Начало занятий в воскресной школе',
    excerpt: 'С 1 сентября возобновляются занятия в воскресной школе для детей. Приглашаем детей от 5 до 14 лет.',
    date: '28 августа 2024',
    image: '/images/church-service.jpg',
    category: 'Образование',
  },
  {
    id: 3,
    slug: 'oglasitelnye-besedy',
    title: 'Огласительные беседы перед Крещением',
    excerpt: 'Напоминаем, что для совершения Таинства Крещения необходимо пройти огласительные беседы. Беседы проводятся каждую субботу в 15:00.',
    date: '15 августа 2024',
    image: '/images/hero-church.jpg',
    category: 'Таинства',
  },
  {
    id: 4,
    slug: 'pomosch-nuzhdajuschimsya',
    title: 'Сбор помощи для нуждающихся',
    excerpt: 'Наш приход организует сбор одежды, продуктов и предметов первой необходимости для малоимущих семей района.',
    date: '10 августа 2024',
    image: '/images/church-service.jpg',
    category: 'Благотворительность',
  },
  {
    id: 5,
    slug: 'palomnichestvo-v-zhirovichy',
    title: 'Паломничество в Жировичи',
    excerpt: 'Приглашаем прихожан принять участие в паломнической поездке в Свято-Успенский Жировичский монастырь.',
    date: '1 августа 2024',
    image: '/images/church-history.jpg',
    category: 'Паломничество',
  },
  {
    id: 6,
    slug: 'letnie-lagerya',
    title: 'Детский летний лагерь',
    excerpt: 'Прошёл детский православный лагерь для воспитанников воскресной школы. Дети провели незабываемую неделю в общении и молитве.',
    date: '25 июля 2024',
    image: '/images/church-interior.jpg',
    category: 'Молодёжь',
  },
]

const categories = ['Все', 'Праздники', 'Образование', 'Таинства', 'Благотворительность', 'Паломничество', 'Молодёжь']

export default function NewsPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-service.jpg"
            alt="Новости прихода"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 " />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Новости прихода
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Актуальные события, объявления и новости из жизни нашего храма и прихода.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'Все' ? 'default' : 'outline'}
                size="sm"
                className="shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <Link key={article.id} href={`/news/${article.slug}`}>
                <Card className={`group h-full overflow-hidden hover:shadow-lg transition-shadow ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                  <div className={`relative ${index === 0 ? 'h-64 md:h-80' : 'h-48'} overflow-hidden`}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-secondary/90 text-secondary-foreground rounded text-xs font-medium">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <h2 className={`font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      Читать далее
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Загрузить ещё
            </Button>
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Будьте в курсе событий
            </h2>
            <p className="text-muted-foreground mb-8">
              Следите за нашими новостями в социальных сетях, чтобы не пропустить важные события прихода.
            </p>
            <Button asChild>
              <a 
                href="https://instagram.com/kvhram_minsk?igshid=OGQ5ZDc2ODk2ZA==" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Подписаться в Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

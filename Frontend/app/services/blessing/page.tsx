import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Home, Car, Building, Briefcase, Phone, CheckCircle } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Освящение | Требы',
  description: 'Освящение квартиры, дома, автомобиля, офиса. Выезд священника на дом. Храм Воздвижения Креста Господня.',
}

const blessingTypes = [
  {
    icon: Home,
    title: 'Освящение квартиры или дома',
    description: 'Чин освящения жилища совершается священником с молитвой о благословении живущих в нём. Освящение можно совершить в новой квартире или повторить, если в доме произошли неприятные события.',
    items: [
      'Подготовьте святую воду (можно взять в храме)',
      'Уберите и проветрите помещение',
      'Желательно присутствие всех живущих в доме',
      'Подготовьте место для иконы (если нет)',
    ],
  },
  {
    icon: Car,
    title: 'Освящение автомобиля',
    description: 'Освящение транспортного средства с молитвой о сохранении водителя и пассажиров в пути.',
    items: [
      'Автомобиль должен быть чистым',
      'Освящение можно совершить у храма',
      'Или вызвать священника на дом/в гараж',
    ],
  },
  {
    icon: Building,
    title: 'Освящение офиса или магазина',
    description: 'Благословение рабочего места, торгового помещения, производства с молитвой о успехе честного труда.',
    items: [
      'Можно освятить перед открытием',
      'Или в начале нового этапа работы',
      'Желательно присутствие сотрудников',
    ],
  },
  {
    icon: Briefcase,
    title: 'Другие освящения',
    description: 'Священник может освятить и другие предметы или начинания.',
    items: [
      'Освящение колодца или скважины',
      'Освящение огорода, поля',
      'Благословение на начало дела',
    ],
  },
]

const howItWorks = [
  {
    step: 1,
    title: 'Позвоните в храм',
    description: 'Договоритесь о дате и времени. Священник может выехать в удобное для вас время.',
  },
  {
    step: 2,
    title: 'Подготовьтесь',
    description: 'Приведите помещение в порядок. Подготовьте место для иконы, если её нет.',
  },
  {
    step: 3,
    title: 'Священник приедет',
    description: 'В назначенное время священник приедет и совершит чин освящения.',
  },
]

export default function BlessingPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Освящение"
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
              <Home className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
              Освящение
            </h1>
          </div>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Освящение квартиры, дома, автомобиля и других помещений. 
            Выезд священника на дом.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Зачем освящать жилище
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Освящение жилища — это древняя христианская традиция, призывающая 
              благословение Божие на дом и его обитателей. Священник читает молитвы, 
              окропляет помещение святой водой и благословляет живущих.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Освящённое жилище становится местом, где легче молиться и жить 
              по-христиански. Освящение можно совершить при въезде в новую 
              квартиру, после ремонта или при желании обновить благословение.
            </p>
          </div>
        </div>
      </section>

      {/* Blessing types */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Виды освящений
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Священник может освятить различные помещения и предметы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {blessingTypes.map((type, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">
              Как заказать освящение
            </h2>
            <div className="space-y-6">
              {howItWorks.map((item) => (
                <Card key={item.step}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
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

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Home className="w-12 h-12 mx-auto mb-6 text-secondary" />
          <h2 className="font-serif text-3xl font-bold mb-4">
            Заказать освящение
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Позвоните нам, чтобы договориться о дате и времени выезда священника. 
            Освящение можно совершить в любой удобный для вас день.
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

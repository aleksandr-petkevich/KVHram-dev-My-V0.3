'use client'


import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Phone, Clock, MapPin, X } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { useState } from 'react'



const galleryImages = [
  {
    src: '/images/museum/exhibit1.jpg',
    alt: 'Экспозиция музея',
    title: 'Документы и фотографии',
  },
  {
    src: '/images/museum/exhibit2.jpg',
    alt: 'Экспонаты музея',
    title: 'Личные вещи военнопленных',
  },
  {
    src: '/images/museum/exhibit3.jpg',
    alt: 'Мемориальная доска',
    title: 'Память о погибших',
  },
  {
    src: '/images/museum/exhibit4.jpg',
    alt: 'Выставка',
    title: 'Исторические материалы',
  },
]

export default function MuseumPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/museum/hero.jpg"
            alt="Музей Шталаг-352"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 " />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Музей Шталаг-352
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-balance">
              Музей подвига советских военнопленных – узников концлагеря,
              расположенный на территории прихода Храма Воздвижения Креста Господня
            </p>
          </div>
        </div>
      </section>

      {/* Main Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                О музее
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  В годы немецко-фашистской оккупации в лагере для военнопленных
                  <strong> Шталаг-352</strong> было замучено и расстреляно более
                  <strong> 80 тысяч человек</strong>. Это одно из самых трагических мест
                  военной истории Беларуси.
                </p>
                <p>
                  В стенах храма во время каждой литургии и панихиды возносятся молитвы
                  и прошения о воинах, положивших жизнь за Отечество. На приходе создан
                  музей подвига советских военнопленных – узников лагеря.
                </p>
                <p>
                  Экспозиция музея рассказывает о судьбах военнопленных, об условиях
                  содержания в лагере, о мужестве и стойкости советских солдат в годы
                  Великой Отечественной войны.
                </p>
              </div>

              {/* Visit Info */}
              <div className="mt-8 p-6 bg-muted rounded-xl border border-border">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Посещение музея
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Групповые экскурсии:</p>
                      <p className="text-muted-foreground">Четверг и суббота (кроме 1-й субботы месяца) в 11:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Для предварительной записи:</p>
                      <a href="tel:+375259021825" className="text-primary hover:underline">
                        +375 (25) 902-18-25
                      </a>
                      <p className="text-sm text-muted-foreground">(Viber/Telegram), о. Иоанн</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/museum/main.jpg"
                  alt="Музей Шталаг-352"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Экспозиция музея
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Фотографии экспонатов и материалов музея
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorial Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Память
            </h2>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-6">
                Каждую неделю в нашем храме совершаются панихиды по всем воинам,
                погибшим в годы Великой Отечественной войны. Мы чтим их память
                и молимся об упокоении их душ.
              </p>
              <p className="text-primary-foreground/80">
                «Нет больше той любви, как если кто положит душу свою за друзей своих»
                <br />
                <span className="italic">Евангелие от Иоанна 15:13</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Приходите в музей
            </h2>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>г. Минск, ул. Тимирязева, д. 96</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>Экскурсии: четверг и суббота в 11:00</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:+375259021825">
                  <Phone className="w-4 h-4 mr-2" />
                  Записаться на экскурсию
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Контакты</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] p-4">
            <Image
              src={selectedImage}
              alt="Просмотр экспоната"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </PageWrapper>
  )
}
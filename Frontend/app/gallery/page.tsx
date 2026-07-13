'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'all', name: 'Все фото' },
  { id: 'church', name: 'Храм' },
  { id: 'services', name: 'Богослужения' },
  { id: 'events', name: 'Мероприятия' },
  { id: 'parish', name: 'Приходская жизнь' },
]

const galleryImages = [
  {
    id: 1,
    src: '/images/hero-church.jpg',
    alt: 'Храм Воздвижения Креста Господня - внешний вид',
    category: 'church',
    title: 'Храм Воздвижения Креста Господня'
  },
  {
    id: 2,
    src: '/images/church-interior.jpg',
    alt: 'Интерьер храма',
    category: 'church',
    title: 'Иконостас храма'
  },
  {
    id: 3,
    src: '/images/church-service.jpg',
    alt: 'Божественная Литургия',
    category: 'services',
    title: 'Божественная Литургия'
  },
  {
    id: 4,
    src: '/images/church-history.jpg',
    alt: 'Историческое фото храма',
    category: 'church',
    title: 'Из истории храма'
  },
  {
    id: 5,
    src: '/images/hero-church.jpg',
    alt: 'Праздничное богослужение',
    category: 'services',
    title: 'Праздничная служба'
  },
  {
    id: 6,
    src: '/images/church-interior.jpg',
    alt: 'Убранство храма',
    category: 'church',
    title: 'Убранство храма'
  },
  {
    id: 7,
    src: '/images/church-service.jpg',
    alt: 'Воскресная школа',
    category: 'parish',
    title: 'Воскресная школа'
  },
  {
    id: 8,
    src: '/images/hero-church.jpg',
    alt: 'Крестный ход',
    category: 'events',
    title: 'Крестный ход'
  },
  {
    id: 9,
    src: '/images/church-interior.jpg',
    alt: 'Праздник Пасхи',
    category: 'events',
    title: 'Светлое Христово Воскресение'
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const currentIndex = selectedImage !== null 
    ? filteredImages.findIndex(img => img.id === selectedImage)
    : -1

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev()
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'Escape') setSelectedImage(null)
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 orthodox-pattern opacity-30" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
              Фотогалерея
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Фотографии нашего храма, богослужений и приходской жизни
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
        <section className="py-8 md:py-8 border-b border-border sticky top-[4rem] md:top-[5rem] bg-background z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'transition-all',
                  activeCategory === category.id && 'shadow-md'
                )}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium text-balance">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">В этой категории пока нет фотографий</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр изображения"
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Закрыть"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation */}
            {currentIndex > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={(e) => { e.stopPropagation(); handlePrev() }}
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
            )}
            
            {currentIndex < filteredImages.length - 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={(e) => { e.stopPropagation(); handleNext() }}
                aria-label="Следующее фото"
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            )}

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredImages.find(img => img.id === selectedImage) && (
                <>
                  <Image
                    src={filteredImages.find(img => img.id === selectedImage)!.src}
                    alt={filteredImages.find(img => img.id === selectedImage)!.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                    <p className="text-white text-center font-medium">
                      {filteredImages.find(img => img.id === selectedImage)!.title}
                    </p>
                    <p className="text-white/60 text-center text-sm mt-1">
                      {currentIndex + 1} из {filteredImages.length}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
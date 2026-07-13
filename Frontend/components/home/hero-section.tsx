'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section
      className="relative flex items-start"
      style={{
        // Use dvh so mobile browser chrome is accounted for; fall back to 90vh
        minHeight: 'clamp(400px, 80dvh, 800px)',
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-church.jpg"
          alt="Храм Воздвижения Креста Господня"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5 leading-tight text-balance"
          >
            Храм Воздвижения Креста Господня
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-xl text-primary-foreground/90 mb-7 leading-relaxed"
          >
            Добро пожаловать в наш храм. Мы рады видеть вас на богослужениях
            и приглашаем стать частью нашей приходской семьи.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto"
            >
              <Link href="/schedule">
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Расписание богослужений
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10 w-full sm:w-auto"            >
              <Link href="/about">
                О храме
                <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-2 gap-3 max-w-sm"
          >
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3.5">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-secondary-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/70">Ежедневно</p>
                <p className="text-sm font-semibold text-primary-foreground">8:00 - 20:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-3.5">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-secondary-foreground" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-primary-foreground/70">Литургия</p>
                <p className="text-sm font-semibold text-primary-foreground">Вс, 9:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator arrow pointing to schedule */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-white/90 uppercase tracking-wider bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
            Расписание
          </span>
          <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
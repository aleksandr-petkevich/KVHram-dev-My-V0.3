'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScheduleSlider } from '@/components/ui/schedule-slider'

export function ScheduleSection() {
  return (
    <section className="timetable py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-3">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Расписание
          </div>
          <h2 className="timetable__title font-serif text-3xl font-bold text-foreground mb-2">
            Расписание богослужений
          </h2>
         
        </motion.div>

        <ScheduleSlider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/schedule">
              Полное расписание
              <ChevronRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
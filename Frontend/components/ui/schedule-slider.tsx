'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Service {
  time: string
  name: string
  note?: string
}

interface DaySchedule {
  weekday: string
  desc?: string
  services: Service[]
}

const schedule: DaySchedule[] = [
  {
    weekday: 'Понедельник',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    weekday: 'Вторник',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    weekday: 'Среда',
    services: [
      { time: '8:00', name: 'Божественная Литургия' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    weekday: 'Четверг',
    services: [
      { time: '8:00', name: 'Утреннее богослужение' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    weekday: 'Пятница',
    services: [
      { time: '8:00', name: 'Божественная Литургия' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
  {
    weekday: 'Суббота',
    desc: 'Исповедь совершается перед Литургией',
    services: [
      { time: '8:00', name: 'Божественная Литургия' },
      { time: '15:00', name: 'Огласительная беседа', note: 'для родителей и крёстных' },
      { time: '17:00', name: 'Всенощное бдение' },
    ],
  },
  {
    weekday: 'Воскресенье',
    desc: 'Главное богослужение недели',
    services: [
      { time: '7:00', name: 'Ранняя Литургия' },
      { time: '9:30', name: 'Поздняя Литургия', note: 'с проповедью' },
      { time: '12:00', name: 'Молебен' },
      { time: '17:00', name: 'Вечернее богослужение' },
    ],
  },
]

const MONTHS = [
  'января','февраля','марта','апреля','мая','июня',
  'июля','августа','сентября','октября','ноября','декабря',
]

function getDayDates(): { date: Date; isToday: boolean }[] {
  const today = new Date()
  const dow = today.getDay() // 0 = Sun
  const mondayOffset = dow === 0 ? -6 : 1 - dow
  return schedule.map((_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + mondayOffset + i)
    return { date: d, isToday: mondayOffset + i === 0 }
  })
}

export function ScheduleSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const dayDates = getDayDates()
  const max = Math.max(0, schedule.length - visibleCount)

  const updateVisible = useCallback(() => {
    const w = window.innerWidth
    setVisibleCount(w < 640 ? 1 : w < 900 ? 2 : 3)
  }, [])

  useEffect(() => {
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [updateVisible])

  // Auto-scroll to today on mount
  useEffect(() => {
    const todayIdx = dayDates.findIndex((d) => d.isToday)
    if (todayIdx >= 0) {
      const target = Math.max(0, Math.min(todayIdx - 1, max))
      setCurrent(target)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount])

  useEffect(() => {
    if (!trackRef.current) return
    const itemW = trackRef.current.scrollWidth / schedule.length
    trackRef.current.scrollTo({ left: current * itemW, behavior: 'smooth' })
  }, [current, visibleCount])

  const go = (idx: number) => setCurrent(Math.max(0, Math.min(idx, max)))

  return (
    <div className="w-full relative flex items-center">
      {/* Left Navigation Button */}
      <Button
        variant="outline"
        size="icon"
        className="flex-shrink-0 z-10 w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-30 disabled:pointer-events-none shadow-md mr-2 sm:mr-4"
        disabled={current === 0}
        onClick={() => go(current - 1)}
        aria-label="Предыдущий"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex overflow-x-hidden scroll-smooth flex-1"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {schedule.map((day, i) => {
          const { date, isToday } = dayDates[i]
          const dateNum = date.getDate()
          const monthStr = MONTHS[date.getMonth()]

          return (
            <div
              key={day.weekday}
              className="flex-shrink-0 px-2 sm:px-3"
              style={{
                width: `${100 / visibleCount}%`,
                minWidth: 140,
                scrollSnapAlign: 'start',
              }}
            >
              {/* Date header */}
              <div
                className={cn(
                  'relative flex items-end gap-2 pb-3 mb-3',
                  'border-b-2 border-border',
                )}
              >
                <span
                  className={cn(
                    'font-serif text-5xl font-bold leading-none',
                    isToday ? 'text-destructive' : 'text-secondary',
                  )}
                >
                  {dateNum}
                </span>
                <div className="flex flex-col gap-0.5 pb-1">
                  <span className="text-sm font-medium text-foreground leading-tight">
                    {day.weekday}
                  </span>
                  <span className="text-xs text-muted-foreground">{monthStr}</span>
                </div>

                {isToday && (
                  <span className="absolute -bottom-3 left-0 bg-destructive text-white text-[11px] px-2 py-0.5 rounded-sm">
                    сегодня
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="min-h-[40px] mb-3 pr-2">
                {day.desc ? (
                  <p className="text-[13px] text-primary leading-snug">{day.desc}</p>
                ) : null}
              </div>

              {/* Services list */}
              <ul className="space-y-3.5">
                {day.services.map((s, j) => (
                  <li key={j} className="flex items-start gap-0">
                    <span className="w-12 flex-shrink-0 text-[13px] font-medium text-primary pt-0.5">
                      {s.time}
                    </span>
                    <div>
                      <p className="text-sm text-foreground leading-snug">{s.name}</p>
                      {s.note && (
                        <p className="text-[11px] text-muted-foreground mt-0.5">{s.note}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* Right Navigation Button */}
      <Button
        variant="outline"
        size="icon"
        className="flex-shrink-0 z-10 w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-30 disabled:pointer-events-none shadow-md ml-2 sm:ml-4"
        disabled={current >= max}
        onClick={() => go(current + 1)}
        aria-label="Следующий"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>
    </div>
  )
}
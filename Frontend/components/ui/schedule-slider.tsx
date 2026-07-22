'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { apiClient, Event } from '@/lib/api'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import 'dayjs/locale/ru'

dayjs.locale(ru)

interface Service {
  time: string
  name: string
  note?: string
}

interface DaySchedule {
  weekday: string
  desc?: string
  services: Service[]
  date: Date
  isToday: boolean
  events: Event[]
}

const MONTHS = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
]

const WEEKDAYS = [
  'воскресенье', 'понедельник', 'вторник', 'среда',
  'четверг', 'пятница', 'суббота'
]

interface DayDateInfo {
  date: Date
  isToday: boolean
  originalIndex?: number
}

function getWeekDates(startFromMonday: boolean = true): DayDateInfo[] {
  const today = new Date()
  const dow = today.getDay() // 0 = Sun
  const mondayOffset = startFromMonday ? (dow === 0 ? -6 : 1 - dow) : 0

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() + mondayOffset + i)
    return { date: d, isToday: mondayOffset + i === 0 }
  })
}

function transformEventToService(event: Event): Service {
  return {
    time: event.time || 'Время не указано',
    name: event.additional_title && event.additional_title.length > 0
      ? event.additional_title[0]
      : event.title,
    note: event.description || undefined
  }
}

export function ScheduleSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [weekSchedule, setWeekSchedule] = useState<DaySchedule[]>([])
  const [loading, setLoading] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragScrollStart, setDragScrollStart] = useState(0)

  const dayDates = getWeekDates()
  const max = Math.max(0, dayDates.length - visibleCount)

  const updateVisible = useCallback(() => {
    const w = window.innerWidth
    setVisibleCount(w < 640 ? 1 : w < 900 ? 2 : 3)
  }, [])

  useEffect(() => {
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [updateVisible])

  // Fetch schedule data from API
  useEffect(() => {
    const fetchSchedule = async () => {
      setLoading(true)
      try {
        const today = dayjs()
        const startOfWeek = today.startOf('week')
        const endOfWeek = today.endOf('week')

        const startDate = startOfWeek.format('YYYY-MM-DD')
        const endDate = endOfWeek.format('YYYY-MM-DD')

        const events = await apiClient.getEventsByDateRange(startDate, endDate)

        const schedule: DaySchedule[] = dayDates.map(({ date, isToday }) => {
          const dateStr = dayjs(date).format('YYYY-MM-DD')
          const dayEvents = events.filter(event =>
            event.date && dayjs(event.date).format('YYYY-MM-DD') === dateStr
          )

          const services: Service[] = dayEvents
            .sort((a, b) => (a.time || '').localeCompare(b.time || ''))
            .map(transformEventToService)

          const weekday = WEEKDAYS[date.getDay()]
          const desc = date.getDay() === 6 ? 'Исповедь совершается перед Литургией' :
            date.getDay() === 0 ? 'Главное богослужение недели' : undefined

          return {
            weekday,
            desc,
            services,
            date,
            isToday,
            events: dayEvents
          }
        })

        setWeekSchedule(schedule)
      } catch (error) {
        console.error('Ошибка загрузки расписания:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSchedule()
  }, [])

  // Reorder days to show today first, then the rest of the week
  const orderedDays = useCallback(() => {
    const todayIndex = dayDates.findIndex((d) => d.isToday)
    if (todayIndex === -1) return dayDates.map((d, i) => ({ ...d, originalIndex: i }))

    const result: DayDateInfo[] = []
    // Add all days starting from today
    for (let i = 0; i < dayDates.length; i++) {
      const idx = (todayIndex + i) % dayDates.length
      result.push({ ...dayDates[idx], originalIndex: idx })
    }
    return result
  }, [dayDates])

  const displayDays = orderedDays()
  const displayMax = Math.max(0, displayDays.length - visibleCount)

  // Auto-scroll to today on mount (position 0)
  useEffect(() => {
    setCurrent(0)
  }, [])

  useEffect(() => {
    if (!trackRef.current) return
    const itemW = trackRef.current.scrollWidth / displayDays.length
    trackRef.current.scrollTo({ left: current * itemW, behavior: 'smooth' })
  }, [current, visibleCount, displayDays.length])

  const go = (idx: number) => setCurrent(Math.max(0, Math.min(idx, displayMax)))

  const goToToday = () => {
    setCurrent(0)
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    setIsDragging(true)
    setDragStartX(e.clientX)
    setDragScrollStart(trackRef.current.scrollLeft)
    trackRef.current.style.cursor = 'grabbing'
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    e.preventDefault()
    const dx = e.clientX - dragStartX
    trackRef.current.scrollLeft = dragScrollStart - dx
  }

  const handleMouseUp = () => {
    if (!trackRef.current || !isDragging) return
    setIsDragging(false)
    trackRef.current.style.cursor = 'grab'

    // Snap to nearest card
    const itemW = trackRef.current.scrollWidth / displayDays.length
    const newPosition = Math.round(trackRef.current.scrollLeft / itemW)
    setCurrent(Math.max(0, Math.min(newPosition, displayMax)))
  }

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return
    setIsDragging(true)
    setDragStartX(e.touches[0].clientX)
    setDragScrollStart(trackRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return
    const dx = e.touches[0].clientX - dragStartX
    trackRef.current.scrollLeft = dragScrollStart - dx
  }

  const handleTouchEnd = () => {
    if (!trackRef.current || !isDragging) return
    setIsDragging(false)

    // Snap to nearest card
    const itemW = trackRef.current.scrollWidth / displayDays.length
    const newPosition = Math.round(trackRef.current.scrollLeft / itemW)
    setCurrent(Math.max(0, Math.min(newPosition, displayMax)))
  }

  return (
    <div className="w-full">
      {/* Today Button */}
      <div className="flex justify-center mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={goToToday}
          className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Сегодня
        </Button>
      </div>

      <div className="relative flex items-center">
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
          className="flex overflow-x-auto scroll-smooth flex-1 cursor-grab"
          style={{ scrollSnapType: 'x mandatory' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {loading ? (
            <div className="flex items-center justify-center py-12 w-full">
              <p className="text-muted-foreground">Загрузка расписания...</p>
            </div>
          ) : (
            displayDays.map((dayInfo, i) => {
              const day = weekSchedule[dayInfo.originalIndex]
              const { date, isToday } = dayInfo
              const dateNum = date.getDate()
              const monthStr = MONTHS[date.getMonth()]

              return (
                <div
                  key={dayInfo.originalIndex}
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
                        isToday ? 'text-green-600' : 'text-secondary',
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
                      <span className="absolute -bottom-3 left-0 bg-green-600 text-white text-[11px] px-2 py-0.5 rounded-sm">
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
                  {day.services.length > 0 ? (
                    <ul className="space-y-3.5">
                      {day.services.map((s: Service, j: number) => (
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
                  ) : (
                    <div className="text-center py-6 text-muted-foreground text-sm">
                      Нет запланированных богослужений
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Right Navigation Button */}
        <Button
          variant="outline"
          size="icon"
          className="flex-shrink-0 z-10 w-10 h-10 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-30 disabled:pointer-events-none shadow-md ml-2 sm:ml-4"
          disabled={current >= displayMax || loading}
          onClick={() => go(current + 1)}
          aria-label="Следующий"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

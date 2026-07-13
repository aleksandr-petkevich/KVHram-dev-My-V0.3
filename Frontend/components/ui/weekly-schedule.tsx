'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { apiClient, Event } from '@/lib/api'
import dayjs from 'dayjs'
import ru from 'dayjs/locale/ru'
import 'dayjs/locale/ru'

dayjs.locale(ru)

const MONTHS = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
]

const WEEKDAYS = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'
]

interface DaySchedule {
    date: dayjs.Dayjs
    events: Event[]
}

export function WeeklySchedule() {
    const [currentWeekStart, setCurrentWeekStart] = useState(() => {
        const today = dayjs()
        return today.startOf('week') // Понедельник (в русской локали startOf('week') возвращает понедельник)
    })
    const [weekSchedule, setWeekSchedule] = useState<DaySchedule[]>([])
    const [loading, setLoading] = useState(true)

    const getWeekDates = useCallback(() => {
        return Array.from({ length: 7 }, (_, i) => currentWeekStart.add(i, 'day'))
    }, [currentWeekStart])

    const fetchWeekSchedule = async () => {
        setLoading(true)
        try {
            const weekDates = getWeekDates()
            const startDate = weekDates[0].format('YYYY-MM-DD')
            const endDate = weekDates[6].format('YYYY-MM-DD')

            const events = await apiClient.getEventsByDateRange(startDate, endDate)

            const schedule: DaySchedule[] = weekDates.map(date => ({
                date,
                events: events.filter(event =>
                    event.date && dayjs(event.date).format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
                )
            }))

            setWeekSchedule(schedule)
        } catch (error) {
            console.error('Ошибка загрузки расписания:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchWeekSchedule()
    }, [currentWeekStart])

    const goToPreviousWeek = () => {
        setCurrentWeekStart(prev => prev.subtract(1, 'week'))
    }

    const goToNextWeek = () => {
        setCurrentWeekStart(prev => prev.add(1, 'week'))
    }

    const goToCurrentWeek = () => {
        setCurrentWeekStart(dayjs().startOf('week'))
    }

    const weekDates = getWeekDates()
    const startDate = weekDates[0]
    const endDate = weekDates[6]
    const today = dayjs()

    const isCurrentWeek = today.isAfter(startDate.subtract(1, 'day')) && today.isBefore(endDate.add(1, 'day'))

    return (
        <div className="w-full">
            {/* Навигация по неделям */}
            <div className="flex items-center justify-between mb-6">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPreviousWeek}
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                    <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="text-center">
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                        Расписание с {startDate.format('D')} {MONTHS[startDate.month()]}
                        по {endDate.format('D')} {MONTHS[endDate.month()]} {endDate.format('YYYY')} г.
                    </h2>
                    {!isCurrentWeek && (
                        <Button
                            variant="link"
                            size="sm"
                            onClick={goToCurrentWeek}
                            className="mt-1 text-primary"
                        >
                            Вернуться к текущей неделе
                        </Button>
                    )}
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNextWeek}
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                    <ChevronRight className="w-5 h-5" />
                </Button>
            </div>

            {/* Расписание по дням */}
            {loading ? (
                <div className="text-center py-12 text-muted-foreground">
                    Загрузка расписания...
                </div>
            ) : (
                <div className="space-y-6">
                    {weekSchedule.map((day, index) => {
                        const isToday = today.format('YYYY-MM-DD') === day.date.format('YYYY-MM-DD')
                        const weekday = WEEKDAYS[day.date.day()]
                        // Get the title from the first event of the day
                        const firstEventTitle = day.events.length > 0 ? day.events[0].title : null

                        return (
                            <Card
                                key={index}
                                className={cn(
                                    "overflow-hidden transition-all",
                                    isToday && "border-2 border-destructive"
                                )}
                            >
                                <CardContent className="p-0">
                                    {/* Заголовок дня */}
                                    <div className={cn(
                                        "p-4 md:p-6 border-b",
                                        isToday ? "bg-destructive/10" : "bg-muted/30"
                                    )}>
                                        <div className="flex items-center gap-4">
                                            <div className={cn(
                                                "text-4xl md:text-5xl font-bold font-serif",
                                                isToday ? "text-destructive" : "text-secondary"
                                            )}>
                                                {day.date.format('D')}
                                            </div>
                                            <div>
                                                <div className="text-lg md:text-xl font-semibold text-foreground">
                                                    <span className="text-base md:text-lg font-normal text-muted-foreground">
                                                        ({weekday.charAt(0).toUpperCase() + weekday.slice(1)})
                                                    </span>
                                                    <span className="ml-2">
                                                        {firstEventTitle ? firstEventTitle.charAt(0).toUpperCase() + firstEventTitle.slice(1) : ''}
                                                    </span>
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {day.date.format('D')} {MONTHS[day.date.month()]}
                                                </div>
                                            </div>
                                            {isToday && (
                                                <span className="ml-auto px-3 py-1 bg-destructive text-white text-sm rounded-full">
                                                    сегодня
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* События дня */}
                                    <div className="p-4 md:p-6">
                                        {day.events.length > 0 ? (
                                            <div className="space-y-3">
                                                {day.events
                                                    .sort((a, b) => (a.time || '').localeCompare(b.time || ''))
                                                    .map((event, eventIndex) => (
                                                        <div
                                                            key={event._id}
                                                            className="flex items-start gap-4 p-3 rounded-lg bg-background hover:bg-muted/50 transition-colors"
                                                        >
                                                            <div className="flex items-center gap-2 text-primary min-w-fit">
                                                                <Clock className="w-4 h-4" />
                                                                <span className="font-medium text-sm md:text-base">
                                                                    {event.time || 'Время не указано'}
                                                                </span>
                                                            </div>
                                                            <div className="flex-1">
                                                                {event.additional_title && (
                                                                    <div
                                                                        className="font-medium text-foreground"
                                                                        style={{ color: event.additionalTitleColor || 'inherit' }}
                                                                    >
                                                                        {event.additional_title}
                                                                    </div>
                                                                )}
                                                                {event.description && (
                                                                    <div
                                                                        className="text-sm mt-2"
                                                                        style={{ color: event.descriptionColor || 'inherit' }}
                                                                    >
                                                                        {event.description}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        ) : (
                                            <div className="text-center py-8 text-muted-foreground">
                                                Нет запланированных богослужений
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ')
}
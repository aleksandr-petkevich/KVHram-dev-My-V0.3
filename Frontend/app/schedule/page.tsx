import { Metadata } from 'next'
import Image from 'next/image'
import { Clock, Bell, ChevronRight, Star, Calendar } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Card, CardContent } from '@/components/ui/card'
import { WeeklySchedule } from '@/components/ui/weekly-schedule'

export const metadata: Metadata = {
  title: 'Расписание богослужений',
  description: 'Расписание богослужений Храма Воздвижения Креста Господня в Минске. Литургия, вечерня, утреня.',
}

const upcomingHolidays = [
  {
    date: '14 октября',
    name: 'Покров Пресвятой Богородицы',
    services: ['8:00 — Божественная Литургия', '17:00 — Праздничное всенощное бдение'],
  },
  {
    date: '4 ноября',
    name: 'Казанская икона Божией Матери',
    services: ['8:00 — Божественная Литургия'],
  },
  {
    date: '21 ноября',
    name: 'Собор Архистратига Михаила',
    services: ['8:00 — Божественная Литургия'],
  },
  {
    date: '4 декабря',
    name: 'Введение во храм Пресвятой Богородицы',
    services: ['8:00 — Божественная Литургия', '17:00 — Праздничное всенощное бдение'],
  },
]

const sacramentSchedule = [
  {
    name: 'Исповедь',
    schedule: 'Перед каждой Литургией и во время вечернего богослужения',
  },
  {
    name: 'Крещение',
    schedule: 'Суббота и воскресенье после Литургии (по предварительной записи)',
  },
  {
    name: 'Венчание',
    schedule: 'По согласованию со священником (кроме постов)',
  },
  {
    name: 'Соборование',
    schedule: 'В период Великого поста, а также по необходимости',
  },
  {
    name: 'Отпевание',
    schedule: 'Ежедневно по согласованию',
  },
]

export default function SchedulePage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/church-interior.jpg"
            alt="Расписание богослужений"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 " />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
              <Calendar className="w-4 h-4" />
              Расписание
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Расписание богослужений
            </h1>

          </div>
        </div>
      </section>

      {/* Timetable section with new design */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <WeeklySchedule />
        </div>
      </section>

      {/* Holidays section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                Ближайшие праздники
              </h2>
              <p className="text-muted-foreground">
                Праздничные богослужения в ближайшие месяцы
              </p>
            </div>
            <div className="space-y-4">
              {upcomingHolidays.map((holiday) => (
                <Card key={holiday.name}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="sm:w-32 shrink-0">
                        <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                          {holiday.date}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-foreground mb-2">
                          {holiday.name}
                        </h3>
                        <ul className="space-y-1">
                          {holiday.services.map((service, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <ChevronRight className="w-3 h-3 text-primary" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sacraments section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                Расписание таинств
              </h2>
              <p className="text-muted-foreground">
                Когда и как можно приступить к церковным таинствам
              </p>
            </div>
            <div className="space-y-4">
              {sacramentSchedule.map((sacrament) => (
                <Card key={sacrament.name}>
                  <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="sm:w-40 shrink-0">
                      <h3 className="font-serif font-bold text-foreground">
                        {sacrament.name}
                      </h3>
                    </div>
                    <div className="flex-1 text-muted-foreground">
                      {sacrament.schedule}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important notes */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-foreground mb-2">
                  Важная информация
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>В дни великих праздников и во время постов расписание может изменяться. Следите за объявлениями.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Для совершения таинств Крещения и Венчания необходима предварительная запись и беседа со священником.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Исповедь совершается перед началом каждой Литургии. Приходите заблаговременно.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>По всем вопросам обращайтесь по телефону: +375 (29) 122-01-96</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
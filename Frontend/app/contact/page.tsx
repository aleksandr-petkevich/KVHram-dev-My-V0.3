'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Instagram, ExternalLink } from 'lucide-react'
import { PageWrapper } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Минск, ул. Тимирязева, д. 96',
      link: 'https://yandex.ru/maps/-/CHQmrY1b',
      linkText: 'Открыть на карте'
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+375 (29) 122-01-96',
      link: 'tel:+375291220196'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'kvhram@mail.by',
      link: 'mailto:kvhram@mail.by'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      content: 'Ежедневно: 8:00 - 20:00'
    }
  ]

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
              Контакты
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Мы всегда рады видеть вас в нашем храме. 
              Свяжитесь с нами любым удобным способом.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.content}
                        {item.linkText && (
                          <span className="flex items-center justify-center gap-1 text-sm text-primary mt-1">
                            {item.linkText}
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        )}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl font-bold mb-6">Как нас найти</h2>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7d4e7a58f5c8f4e8b2c9d1a3e5f7b9c1&source=constructor"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Карта расположения храма"
                />
              </div>
              
              <div className="mt-6 p-6 bg-muted rounded-xl">
                <h3 className="font-serif font-bold mb-3">Как добраться</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">Метро:</span>
                    <span>станция &quot;Площадь Якуба Коласа&quot;, далее автобус 100</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">Автобус:</span>
                    <span>маршруты 25, 64, 100 до остановки &quot;Тимирязева&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">Авто:</span>
                    <span>бесплатная парковка возле храма</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl font-bold mb-6">Напишите нам</h2>
              
              {isSubmitted ? (
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">Сообщение отправлено!</h3>
                  <p className="text-muted-foreground mb-4">
                    Благодарим за обращение. Мы ответим вам в ближайшее время.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>
                    Отправить ещё
                  </Button>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Ваше имя *
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            placeholder="Иван Иванов"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Телефон
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+375 (XX) XXX-XX-XX"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="ivan@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Тема обращения *
                        </label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          placeholder="Вопрос о крещении"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Сообщение *
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={5}
                          placeholder="Ваше сообщение..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Social Links */}
              <div className="mt-8 p-6 bg-muted rounded-xl">
                <h3 className="font-serif font-bold mb-4">Мы в социальных сетях</h3>
                <a
                  href="https://instagram.com/kvhram_minsk?igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-3 bg-card rounded-lg hover:shadow-md transition-all group"
                >
                  <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">@kvhram</p>
                    <p className="text-sm text-muted-foreground">Следите за новостями</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
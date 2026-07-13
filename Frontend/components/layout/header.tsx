'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Clock, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const PHONE_NUMBER = '+375 (29) 122-01-96'
const PHONE_LINK = '+375291220196'

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Расписание', href: '/schedule' },
  // {
  //   name: 'Для новоначальных',
  //   href: '/beginners',
  //   children: [
  //     { name: 'Первые шаги в храме', href: '/beginners/first-steps' },
  //     { name: 'Основы веры', href: '/beginners/basics' },
  //     { name: 'Как исповедоваться', href: '/beginners/confession-guide' },
  //     { name: 'Подготовка к причастию', href: '/beginners/communion-guide' },
  //   ],
  // },
  // {
  //   name: 'Требы',
  //   href: '/services',
  //   children: [
  //     { name: 'Крещение', href: '/services/baptism' },
  //     { name: 'Венчание', href: '/services/wedding' },
  //     { name: 'Освящение', href: '/services/blessing' },
  //     { name: 'Отпевание', href: '/services/funeral' },
  //   ],
  // },
  { name: 'Музей Шталаг-352', href: '/museum' },
  // { name: 'Галерея', href: '/gallery' },
  { name: 'Воскресная школа', href: '/sunday-school' },
  {
    name: 'О храме',
    href: '/about',
    children: [
      { name: 'История храма', href: '/about/history' },
      { name: 'Духовенство', href: '/about/clergy' },
      { name: 'Приходская жизнь', href: '/about/parish-life' },
    ],
  },
  // { name: 'Новости', href: '/news' },
  { name: 'Контакты', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showMobilePhone, setShowMobilePhone] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenSections, setMobileOpenSections] = useState<Set<string>>(new Set())
  const pathname = usePathname()
  const scrollYRef = useRef(0)

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open (iOS-safe technique)
  useEffect(() => {
    if (isMobileMenuOpen) {
      scrollYRef.current = window.scrollY
      document.documentElement.style.setProperty(
        '--scroll-y',
        `-${scrollYRef.current}px`,
      )
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
      document.documentElement.style.removeProperty('--scroll-y')
      window.scrollTo(0, scrollYRef.current)
    }

    return () => {
      document.body.classList.remove('menu-open')
      document.documentElement.style.removeProperty('--scroll-y')
    }
  }, [isMobileMenuOpen])

  // Close on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
    setMobileOpenSections(new Set())
    setShowMobilePhone(false)
  }, [pathname])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setOpenDropdown(null)
        setMobileOpenSections(new Set())
        setShowMobilePhone(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const toggleMobileSection = (name: string) => {
    setMobileOpenSections((prev) => {
      const next = new Set(prev)
      if (next.has(name)) {
        next.delete(name)
      } else {
        next.add(name)
      }
      return next
    })
  }

  return (
    <>
      {/* Top bar — desktop only */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${PHONE_LINK}`}
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>Ежедневно: 8:00 - 20:00</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/kvhram_minsk?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-md'
            : 'bg-background',
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-3 group min-h-0 min-w-0"
              aria-label="Храм Воздвижения Креста Господня — на главную"
            >
              <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors flex-shrink-0">
                <CrossIcon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h1 className="font-serif text-sm md:text-lg font-bold text-foreground leading-tight truncate">
                  Храм Воздвижения
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground truncate">
                  Креста Господня
                </p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden lg:flex items-center gap-0.5 xl:gap-1"
              aria-label="Основная навигация"
            >
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'px-2.5 xl:px-4 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap',
                      pathname === item.href ||
                        pathname.startsWith(item.href + '/')
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-primary/5',
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform',
                          openDropdown === item.name ? 'rotate-180' : '',
                        )}
                        aria-hidden="true"
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-52 bg-card rounded-lg shadow-xl border border-border overflow-hidden z-50"
                          role="menu"
                          aria-label={`Раздел «${item.name}»`}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              role="menuitem"
                              className={cn(
                                'block px-4 py-3 text-sm transition-colors',
                                pathname === child.href
                                  ? 'text-primary bg-primary/10'
                                  : 'text-foreground hover:text-primary hover:bg-muted',
                              )}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA — desktop */}
            <div className="hidden lg:block flex-shrink-0">
              <Button
                asChild
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Link href="/schedule">Расписание служб</Link>
              </Button>
            </div>

            {/* Mobile actions: phone + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                className="flex items-center justify-center w-11 h-11 rounded-md text-primary hover:bg-muted transition-colors"
                onClick={() => setShowMobilePhone(!showMobilePhone)}
                aria-label={showMobilePhone ? 'Скрыть номер телефона' : 'Показать номер телефона'}
                aria-expanded={showMobilePhone}
              >
                <Phone className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-11 h-11 rounded-md text-foreground hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile phone display */}
        <AnimatePresence>
          {showMobilePhone && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden border-t border-border bg-background overflow-hidden"
            >
              <div className="container mx-auto px-4 py-3">
                <a
                  href={`tel:${PHONE_LINK}`}
                  className="flex items-center gap-3 px-4 py-3 text-primary font-medium text-lg"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span>{PHONE_NUMBER}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Mobile overlay menu ─────────────────────────────── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden border-t border-border bg-background overflow-hidden"
              role="navigation"
              aria-label="Мобильная навигация"
            >
              {/* Scrollable area so nav fits on small screens */}
              <nav
                className="container mx-auto px-4 py-2 max-h-[calc(100dvh-4rem)] overflow-y-auto"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {navigation.map((item) => (
                  <div key={item.name} className="mb-0.5">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={cn(
                          'flex-1 flex items-center px-4 py-3 rounded-md text-base font-medium transition-colors',
                          pathname === item.href ||
                            pathname.startsWith(item.href + '/')
                            ? 'text-primary bg-primary/10'
                            : 'text-foreground hover:text-primary hover:bg-primary/5',
                        )}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => toggleMobileSection(item.name)}
                          className="p-3 text-foreground hover:bg-muted rounded-md transition-colors"
                          aria-label={mobileOpenSections.has(item.name) ? 'Свернуть подразделы' : 'Развернуть подразделы'}
                        >
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform',
                              mobileOpenSections.has(item.name) ? 'rotate-180' : '',
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      )}
                    </div>

                    {/* Child links - collapsible */}
                    {item.children && (
                      <AnimatePresence>
                        {mobileOpenSections.has(item.name) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 mb-1 space-y-0.5">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className={cn(
                                    'block px-4 py-2.5 rounded-md text-sm transition-colors',
                                    pathname === child.href
                                      ? 'text-primary bg-primary/10'
                                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5',
                                  )}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                {/* Mobile contact + CTA */}
                <div className="pt-3 mt-2 border-t border-border space-y-2 pb-safe-bottom">
                  <a
                    href={`tel:${PHONE_LINK}`}
                    className="flex items-center gap-3 px-4 py-3 text-primary font-medium"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{PHONE_NUMBER}</span>
                  </a>
                  <div className="px-4 pb-2">
                    <Button
                      asChild
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    >
                      <Link href="/schedule">Расписание богослужений</Link>
                    </Button>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

function CrossIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7V2z" />
    </svg>
  )
}
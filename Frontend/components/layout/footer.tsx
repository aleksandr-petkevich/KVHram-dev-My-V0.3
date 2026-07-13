import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'

const quickLinks = [
  { name: 'О храме', href: '/about' },
  // { name: 'История', href: '/about/history' },
  // { name: 'Духовенство', href: '/about/clergy' },
  { name: 'Расписание', href: '/schedule' },
  { name: 'Музей Шталаг-352', href: '/museum' },
  // { name: 'Галерея', href: '/gallery' },
  { name: 'Воскресная школа', href: '/sunday-school' },
  // { name: 'Новости', href: '/news' },
  { name: 'Контакты', href: '/contact' },
]

// const sacraments = [
// { name: 'Крещение', href: '/sacraments/baptism' },
// { name: 'Венчание', href: '/sacraments/wedding' },
// { name: 'Исповедь', href: '/sacraments/confession' },
// { name: 'Причастие', href: '/sacraments' },
// ]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <CrossIcon className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-serif font-bold">Храм Воздвижения</h3>
                <p className="text-sm text-primary-foreground/80">Креста Господня</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              Приход храма Воздвижения Креста Господня в городе Минске.
              Добро пожаловать в наш храм!
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/kvhram_minsk?igshid=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-lg">Навигация</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sacraments */}
          {/* <div>
            <h4 className="font-serif font-bold mb-4 text-lg">Таинства</h4>
            <ul className="space-y-2">
              {sacraments.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact info */}
          <div>
            <h4 className="font-serif font-bold mb-4 text-lg">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://yandex.by/maps/-/CPsMNU7D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>г. Минск, ул. Тимирязева, д. 96</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+375291220196"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+375 (29) 122-01-96</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kvhram@mail.by"
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>kvhram@mail.by</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Ежедневно: 8:00 - 20:00</p>
                  <p className="text-xs mt-1">Богослужения по расписанию</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} Храм Воздвижения Креста Господня. Все права защищены.</p>
            <p>Минская епархия Белорусской Православной Церкви</p>
          </div>
        </div>
      </div>
    </footer>
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
import type { Metadata, Viewport } from 'next'
import { Inter, PT_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const ptSerif = PT_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Храм Воздвижения Креста Господня | Минск',
    template: '%s | Храм Воздвижения Креста Господня',
  },
  description:
    'Приход храма Воздвижения Креста Господня в Минске. Расписание богослужений, история храма, таинства, духовенство.',
  keywords: [
    'православный храм',
    'минск',
    'крестовоздвиженский храм',
    'богослужения',
    'расписание служб',
    'таинства',
  ],
  authors: [{ name: 'Храм Воздвижения Креста Господня' }],
  creator: 'Храм Воздвижения Креста Господня',
  // Tell iOS/Android not to format phone numbers automatically
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: 'website',
    locale: 'ru_BY',
    url: 'https://kvhram.by',
    siteName: 'Храм Воздвижения Креста Господня',
    title: 'Храм Воздвижения Креста Господня | Минск',
    description:
      'Приход храма Воздвижения Креста Господня в Минске. Расписание богослужений, история храма, таинства.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Храм Воздвижения Креста Господня в Минске',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Храм Воздвижения Креста Господня | Минск',
    description: 'Приход храма Воздвижения Креста Господня в Минске',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

/**
 * Viewport configuration — separate export per Next.js 14+ best practices.
 * - width=device-width, initial-scale=1 prevents iOS auto-zoom.
 * - viewport-fit=cover allows content to extend into notch / home-indicator areas.
 * - theme-color tints the browser chrome to match the primary brand colour.
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,   // allow user pinch-zoom (accessibility)
  viewportFit: 'cover',
  themeColor: [
    // Match primary (dark blue) in light mode
    { media: '(prefers-color-scheme: light)', color: '#2d4fa0' },
    // Match dark-mode primary (gold)
    { media: '(prefers-color-scheme: dark)', color: '#b8921a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${ptSerif.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
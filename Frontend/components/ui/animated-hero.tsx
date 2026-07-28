'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface AnimatedHeroProps {
    imageSrc: string
    imageAlt: string
    title: string
    subtitle?: string
}

export function AnimatedHero({ imageSrc, imageAlt, title, subtitle }: AnimatedHeroProps) {
    return (
        <section className="relative py-24 md:py-32">
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance"
                    >
                        {title}
                    </motion.h1>
                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-primary-foreground/90 leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    )
}
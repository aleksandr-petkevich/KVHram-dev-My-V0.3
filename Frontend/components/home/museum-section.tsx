'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function MuseumSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Музей Шталаг-352
                    </h2>
                    <Link href="/museum">
                        <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden group cursor-pointer">
                            <Image
                                src="/images/museum/main.jpg"
                                alt="Музей Шталаг-352"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
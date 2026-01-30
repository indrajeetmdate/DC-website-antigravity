import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, ShoppingBag } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark-950 text-white pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-radial from-brand-green-900/20 to-transparent opacity-50"></div>

            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-brand-green-500 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green-500/10 border border-brand-green-500/20 text-brand-green-400 text-sm font-medium mb-8"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>NO NOISE, NO FUMES, BEYOND LEAD & DIESEL</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    Lithium-ion Batteries <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-400 to-brand-green-600">
                        Truly Made in India
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Engineered in India. Built for the World. <br />
                    Backed by <span className="text-brand-green-400 font-semibold">IIT Kanpur scientific excellence</span> and
                    <span className="text-brand-green-400 font-semibold"> 35+ years of legacy</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#products"
                        className="group flex items-center justify-center gap-2 bg-brand-green-600 hover:bg-brand-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-brand-green-900/20"
                    >
                        Explore Products
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link
                        to="/store"
                        className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-brand-dark-700 hover:border-brand-green-500 hover:text-brand-green-400 transition-all text-gray-300"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        Visit Store
                    </Link>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-brand-dark-800 pt-12"
                >
                    <StatBox number="100%" label="Made in India" />
                    <StatBox number="35+" label="Years Legacy" />
                    <StatBox number="IIT" label="Kanpur Heritage" />
                    <StatBox number="1000+" label="Happy Customers" />
                </motion.div>
            </div>
        </section>
    )
}

function StatBox({ number, label }) {
    return (
        <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-green-500 font-display mb-1">{number}</div>
            <div className="text-sm text-gray-500 font-medium">{label}</div>
        </div>
    )
}

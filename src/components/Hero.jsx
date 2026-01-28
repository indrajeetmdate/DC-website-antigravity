import { motion } from 'framer-motion'
import { Button } from '@heroui/react'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-dark-900 via-brand-dark-800 to-brand-dark-900">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            {/* Animated Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-brand-green-500 rounded-full"
                        style={{
                            left: `${Math.random() * 95}%`,
                            top: `${Math.random() * 95}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Tagline */}
                    <motion.div
                        className="inline-flex items-center space-x-2 bg-brand-green-500/10 border border-brand-green-500/30 rounded-full px-6 py-2 mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-4 h-4 text-brand-green-400" />
                        <span className="text-brand-green-400 text-sm font-medium">
                            NO NOISE, NO FUMES, BEYOND LEAD & DIESEL
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Lithium-ion Batteries
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green-400 via-brand-green-500 to-brand-green-600 gradient-animate">
                            Truly Made in India
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        className="max-w-3xl mx-auto mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-display">
                            Engineered in India. Built for the World.
                        </p>
                        <p className="text-base md:text-lg text-gray-400">
                            Backed by <span className="text-brand-green-400 font-semibold">IIT Kanpur scientific excellence</span> and
                            <span className="text-brand-green-400 font-semibold"> 35+ years of business legacy</span>.
                            <br />Complete cell-to-circuit design and manufacturing capabilities.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a href="#products">
                            <Button
                                size="lg"
                                className="bg-brand-green-500 hover:bg-brand-green-600 text-white font-semibold px-8 py-6 text-lg group"
                                endContent={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            >
                                Explore Products
                            </Button>
                        </a>
                        <a href="/store">
                            <Button
                                size="lg"
                                variant="bordered"
                                className="border-2 border-brand-green-500 text-brand-green-400 hover:bg-brand-green-500/10 font-semibold px-8 py-6 text-lg"
                            >
                                Visit Store
                            </Button>
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        {[
                            { value: '100%', label: 'Made in India' },
                            { value: '35+', label: 'Years Legacy' },
                            { value: 'IIT', label: 'Kanpur Heritage' },
                            { value: '1000+', label: 'Happy Customers' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-display font-bold text-brand-green-400 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-brand-green-500 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-brand-green-500 rounded-full mt-2"></div>
                </div>
            </motion.div>

            <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
        </section>
    )
}

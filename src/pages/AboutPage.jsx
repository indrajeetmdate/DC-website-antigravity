import React from 'react'
import { motion } from 'framer-motion'
import Team from '../components/Team'
import CellToCircuit from '../components/CellToCircuit'

export default function AboutPage() {
    return (
        <div className="pt-20 pb-20">
            {/* Header */}
            <div className="bg-brand-dark-900 text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <motion.h1
                        className="font-display text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        About DC Energy
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Bridging scientific excellence with industrial innovation.
                        Truly Made in India for the world.
                    </motion.p>
                </div>
            </div>

            {/* Content */}
            <CellToCircuit />
            <Team />
        </div>
    )
}

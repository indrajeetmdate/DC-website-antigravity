import { motion } from 'framer-motion'
import { Rocket, Shield, Users, Trophy } from 'lucide-react'
import Team from '../components/Team'
import CellToCircuit from '../components/CellToCircuit'

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Hero Section */}
            <div className="bg-brand-dark-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-6xl font-bold mb-6"
                    >
                        About <span className="text-brand-green-500">DC Energy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Pioneering India's Lithium-ion revolution with scientific precision and integrity.
                    </motion.p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-brand-dark-900 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            To empower India's energy transition by manufacturing world-class lithium-ion battery packs that are safe, reliable, and tailored for Indian conditions. We aim to reduce dependence on fossil fuels and lead the charge towards a sustainable future.
                        </p>
                        <ul className="space-y-4">
                            <ValuesItem icon={Shield} title="Integrity" desc="Transparency in every amp." />
                            <ValuesItem icon={Rocket} title="Innovation" desc="Backed by IIT Kanpur R&D." />
                            <ValuesItem icon={Trophy} title="Excellence" desc="World-class manufacturing standards." />
                        </ul>
                    </div>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-brand-dark-100 group">
                        {/* Placeholder for About Image - could use a color block or gradient for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark-800 to-brand-dark-900 flex items-center justify-center">
                            <img src="/logo.png" alt="DC Energy" className="w-48 opacity-20 brightness-0 invert" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Reuse CellToCircuit for consistency */}
            <CellToCircuit />

            {/* Team Section */}
            <Team />
        </div>
    )
}

function ValuesItem({ icon: Icon, title, desc }) {
    return (
        <li className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-green-50 flex items-center justify-center flex-shrink-0 text-brand-green-600">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className="font-bold text-brand-dark-900">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
            </div>
        </li>
    )
}

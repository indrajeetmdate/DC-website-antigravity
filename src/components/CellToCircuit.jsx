import { motion } from 'framer-motion'
import { Wrench, CircuitBoard, Factory } from 'lucide-react'

export default function CellToCircuit() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-green-50 to-transparent opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark-900 mb-6">
                            Cell-to-Circuit Excellence
                        </h2>
                        <p className="text-xl text-gray-600">
                            Unlike competitors who only assemble, we control the <span className="text-brand-green-600 font-bold">entire value chain</span>.
                            From battery pack architecture to BMS circuitry development.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-brand-green-200 -z-10"></div>

                    <ProcessCard
                        icon={Wrench}
                        step="01"
                        title="Designed"
                        subtitle="Battery Pack Architecture"
                        description="Complete cell selection, pack design, and thermal management engineered in-house for Indian conditions."
                        delay={0.1}
                    />
                    <ProcessCard
                        icon={CircuitBoard}
                        step="02"
                        title="Engineered"
                        subtitle="BMS & Circuitry"
                        description="Proprietary Battery Management Systems designed by our IIT Kanpur trained engineers for maximum safety."
                        delay={0.2}
                    />
                    <ProcessCard
                        icon={Factory}
                        step="03"
                        title="Manufactured"
                        subtitle="Local Assembly"
                        description="Assembled and rigorously tested in our Pune facility with end-to-end quality control and traceability."
                        delay={0.3}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 bg-brand-green-50 rounded-2xl p-8 md:p-12 text-center"
                >
                    <h3 className="text-2xl font-bold text-brand-dark-900 mb-4 font-display">
                        The DC Energy Difference
                    </h3>
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                        Our IIT Kanpur heritage and 35+ years of business experience enable us to deliver superior quality, reliability, and innovation in every battery we produce.
                        <span className="font-bold text-brand-green-700 block mt-2">Truly Made in India, engineered for global standards.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

function ProcessCard({ icon: Icon, step, title, subtitle, description, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative group hover:border-brand-green-500/30 transition-colors"
        >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-category-green-500 bg-brand-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-white z-20">
                {step}
            </div>

            <div className="mt-8 text-center">
                <div className="mx-auto w-16 h-16 bg-brand-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-brand-green-600" />
                </div>

                <h3 className="text-2xl font-bold text-brand-dark-900 mb-1">{title}</h3>
                <h4 className="text-sm font-semibold text-brand-green-600 uppercase tracking-wider mb-4">{subtitle}</h4>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

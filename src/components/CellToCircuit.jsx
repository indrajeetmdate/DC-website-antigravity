import { motion } from 'framer-motion'
import { Wrench, CircuitBoard, Factory, CheckCircle } from 'lucide-react'

export default function CellToCircuit() {
    const stages = [
        {
            icon: Wrench,
            title: 'Designed',
            subtitle: 'Battery Pack Architecture',
            description: 'Complete cell selection, pack design, and thermal management engineered in-house.',
            features: ['Custom cell configuration', 'Thermal optimization', 'Mechanical design'],
        },
        {
            icon: CircuitBoard,
            title: 'Engineered',
            subtitle: 'BMS & Circuitry Development',
            description: 'Proprietary Battery Management Systems designed and developed by our IIT Kanpur trained engineers.',
            features: ['Smart BMS design', 'Safety protocols', 'IoT integration'],
        },
        {
            icon: Factory,
            title: 'Manufactured',
            subtitle: 'Local Assembly & Testing',
            description: 'Assembled and rigorously tested in our Pune facility with complete quality control.',
            features: ['Assembly in India', 'Quality testing', 'Certification compliance'],
        },
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-900 mb-4">
                        Cell-to-Circuit Excellence
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Unlike competitors who only assemble, we control the{' '}
                        <span className="text-brand-green-600 font-semibold">entire value chain</span>
                        {' '}— from battery pack design to BMS circuitry development and manufacturing.
                    </p>
                    <div className="mt-6 inline-flex items-center space-x-2 bg-brand-green-50 border border-brand-green-200 rounded-full px-6 py-3">
                        <CheckCircle className="w-5 h-5 text-brand-green-600" />
                        <span className="text-brand-green-700 font-semibold">
                            Complete In-House Design & Development Capability
                        </span>
                    </div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-green-300 via-brand-green-500 to-brand-green-300 transform -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                        {stages.map((stage, index) => {
                            const Icon = stage.icon
                            return (
                                <motion.div
                                    key={index}
                                    className="relative"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-brand-green-500 hover:shadow-xl transition-all duration-300 h-full">
                                        {/* Icon */}
                                        <div className="flex justify-center mb-6">
                                            <div className="w-20 h-20 bg-gradient-to-br from-brand-green-400 to-brand-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <div className="text-center mb-4">
                                            <h3 className="font-display text-2xl font-bold text-brand-dark-900 mb-1">
                                                {stage.title}
                                            </h3>
                                            <p className="text-sm text-brand-green-600 font-semibold">
                                                {stage.subtitle}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-center mb-6">
                                            {stage.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2">
                                            {stage.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <CheckCircle className="w-4 h-4 text-brand-green-500 mt-1 flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Step Number */}
                                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-green-500 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white font-bold text-lg">{index + 1}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-16 text-center bg-gradient-to-r from-brand-green-50 to-green-50 rounded-2xl p-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-display text-2xl font-bold text-brand-dark-900 mb-3">
                        The DC Energy Difference
                    </h3>
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        Our IIT Kanpur heritage and 35+ years of business experience enable us to deliver
                        superior quality, reliability, and innovation in every battery we produce.
                        <span className="text-brand-green-600 font-semibold"> Truly Made in India</span>,
                        engineered for global standards.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

import { motion } from 'framer-motion'
import { Card, CardBody } from '@heroui/react'
import { Briefcase, Code, Scale, DollarSign, Cog } from 'lucide-react'

export default function Team() {
    const teamMembers = [
        {
            name: 'Milind Date',
            role: 'Strategy & Business',
            icon: Briefcase,
            description: '35+ years of business leadership and strategic planning in energy sector.',
            color: 'from-blue-500 to-blue-600',
        },
        {
            name: 'Indrajeet Date',
            role: 'Technology & Development',
            icon: Code,
            description: 'IIT Kanpur trained engineer leading product development and innovation.',
            color: 'from-green-500 to-green-600',
        },
        {
            name: 'Agneya Date',
            role: 'Legal & Compliance',
            icon: Scale,
            description: 'Ensuring regulatory compliance and legal excellence in all operations.',
            color: 'from-purple-500 to-purple-600',
        },
        {
            name: 'Shirish Date',
            role: 'Finance & Admin',
            icon: DollarSign,
            description: 'Managing financial operations and administrative excellence.',
            color: 'from-orange-500 to-orange-600',
        },
        {
            name: 'Swapnil Bangude',
            role: 'Production',
            icon: Cog,
            description: 'Overseeing manufacturing operations and quality control processes.',
            color: 'from-red-500 to-red-600',
        },
    ]

    return (
        <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-900 mb-4">
                        Our Team
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A perfect blend of <span className="text-brand-green-600 font-semibold">scientific expertise, business acumen, and operational excellence</span>.
                        Led by the Date family legacy and supported by industry professionals.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {teamMembers.map((member, index) => {
                        const Icon = member.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="pt-12"
                            >
                                <Card className="h-full hover:shadow-2xl transition-all duration-300 border border-gray-200 relative overflow-visible">
                                    <CardBody className="p-6 text-center">
                                        {/* Icon */}
                                        <div className="flex justify-center mb-4 -mt-16">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-xl ring-4 ring-white`}>
                                                <Icon className="w-10 h-10 text-white" />
                                            </div>
                                        </div>

                                        {/* Name */}
                                        <h3 className="font-display font-bold text-brand-dark-900 text-lg mb-1">
                                            {member.name}
                                        </h3>

                                        {/* Role */}
                                        <p className="text-brand-green-600 font-semibold text-sm mb-3">
                                            {member.role}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {member.description}
                                        </p>
                                    </CardBody>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Legacy Note */}
                <motion.div
                    className="mt-24 text-center bg-gradient-to-r from-brand-green-50 to-green-50 rounded-2xl p-8 border border-brand-green-200 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-display text-2xl font-bold text-brand-dark-900 mb-3">
                        Leadership with Integrity
                    </h3>
                    <p className="text-gray-700 max-w-3xl mx-auto">
                        Combining <span className="text-brand-green-600 font-semibold">IIT Kanpur's scientific rigor</span> with
                        <span className="text-brand-green-600 font-semibold"> 35+ years of trusted business leadership</span>.
                        Every decision at DC Energy is guided by technical excellence, legal compliance, and unwavering commitment to quality.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

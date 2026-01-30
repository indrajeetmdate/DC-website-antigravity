import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import productsData from '../data/products.json'

export default function TechnicalSpecs() {
    // Focus on mobility products as specified
    const mobilityProducts = productsData.mobility

    return (
        <section id="specs" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-900 mb-4">
                        Technical Specifications
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Detailed specifications for our <span className="text-brand-green-600 font-semibold">Mobility range</span> (2W/3W batteries).
                    </p>
                </motion.div>

                {/* Data Table */}
                <motion.div
                    className="w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b-2 border-brand-green-500">
                                    <th className="p-4 font-bold text-brand-dark-900 text-sm uppercase tracking-wide">Product Name</th>
                                    <th className="p-4 font-bold text-brand-dark-900 text-sm uppercase tracking-wide">Voltage</th>
                                    <th className="p-4 font-bold text-brand-dark-900 text-sm uppercase tracking-wide">Capacity</th>
                                    <th className="p-4 font-bold text-brand-dark-900 text-sm uppercase tracking-wide">Chemistry</th>
                                    <th className="p-4 font-bold text-brand-dark-900 text-sm uppercase tracking-wide">Cycle Life</th>
                                    <th className="p-4 font-bold text-brand-dark-900 text-sm uppercase tracking-wide">Warranty</th>
                                    <th className="p-4 font-bold text-brand-dark-900 text-sm uppercase tracking-wide text-right">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {mobilityProducts.map((product, index) => (
                                    <tr
                                        key={product.id}
                                        className="hover:bg-brand-green-50/50 transition-colors"
                                    >
                                        <td className="p-4">
                                            <div className="font-bold text-brand-dark-900">{product.name}</div>
                                            <div className="text-xs text-brand-green-600 font-semibold">{product.subcategory}</div>
                                        </td>
                                        <td className="p-4 font-mono text-gray-700">{product.specifications.voltage}</td>
                                        <td className="p-4 font-mono text-gray-700">{product.specifications.capacity}</td>
                                        <td className="p-4">
                                            <span className="inline-block px-2 py-1 bg-brand-green-100 text-brand-green-800 rounded text-xs font-bold">
                                                {product.specifications.chemistry}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-600 text-sm">{product.specifications.cycles}</td>
                                        <td className="p-4 text-gray-600 text-sm">{product.specifications.warranty}</td>
                                        <td className="p-4 text-right font-bold text-brand-dark-900">
                                            {product.price > 0
                                                ? `₹${product.price.toLocaleString('en-IN')}`
                                                : <span className="text-brand-green-600 text-sm">Quote</span>
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Note */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>
                        For complete specifications of all product categories, visit our{' '}
                        <Link to="/store" className="text-brand-green-600 hover:text-brand-green-700 font-bold hover:underline transition-colors">
                            Store
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

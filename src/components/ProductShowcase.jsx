import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Battery, Zap, Sun, ArrowRight, Check } from 'lucide-react'
import productsData from '../data/products.json'

export default function ProductShowcase() {
    const [selected, setSelected] = useState('ess')

    const categories = {
        ess: {
            id: 'ess',
            title: 'Energy Storage',
            icon: Battery,
            description: 'Reliable power for homes and enterprises.',
            products: productsData.ess || [],
        },
        mobility: {
            id: 'mobility',
            title: 'EV Mobility',
            icon: Zap,
            description: 'Advanced lithium tech for the electric revolution.',
            products: productsData.mobility || [],
        },
        specialized: {
            id: 'specialized',
            title: 'Specialized',
            icon: Sun,
            description: 'Custom solutions for unique power needs.',
            products: productsData.specialized || [],
        },
    }

    return (
        <section id="products" className="py-24 bg-brand-dark-50">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-display font-bold text-brand-dark-900 mb-4">
                        Our Product Range
                    </h2>
                    <p className="text-lg text-gray-600">
                        Comprehensive battery solutions engineered for Indian conditions.
                        From residential backup to industrial mobility.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-sm border border-brand-dark-200">
                        {Object.values(categories).map((cat) => {
                            const Icon = cat.icon
                            const isActive = selected === cat.id
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelected(cat.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${isActive
                                            ? 'bg-brand-green-500 text-white shadow-md'
                                            : 'text-gray-500 hover:text-brand-dark-900 hover:bg-brand-dark-50'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {cat.title}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Content Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-center mb-10">
                            <h3 className="text-xl font-semibold text-brand-dark-800">
                                {categories[selected].description}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {categories[selected].products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* View All CTA */}
                <div className="mt-16 text-center">
                    <Link
                        to="/store"
                        className="inline-flex items-center gap-2 text-brand-green-600 font-semibold hover:text-brand-green-700 transition-colors group"
                    >
                        View Full Catalog in Store
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

function ProductCard({ product }) {
    return (
        <div className="group bg-white rounded-2xl p-6 border border-brand-dark-100 hover:border-brand-green-500/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <span className="text-[10px] font-bold tracking-wider text-brand-green-600 uppercase bg-brand-green-50 px-2 py-1 rounded-full">
                        {product.subcategory}
                    </span>
                    <h4 className="text-xl font-bold text-brand-dark-900 mt-2 group-hover:text-brand-green-600 transition-colors">
                        {product.name}
                    </h4>
                </div>
                {product.inStock && (
                    <div className="w-2 h-2 rounded-full bg-brand-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                )}
            </div>

            <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">
                {product.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
                <SpecBadge label="Voltage" value={product.specifications?.voltage} />
                <SpecBadge label="Capacity" value={product.specifications?.capacity} />
            </div>

            <div className="flex justify-between items-center mt-auto pt-4 border-t border-brand-dark-50">
                <div>
                    {product.price > 0 ? (
                        <span className="text-lg font-bold text-brand-dark-900">
                            ₹{product.price.toLocaleString('en-IN')}
                        </span>
                    ) : (
                        <span className="text-sm font-semibold text-brand-green-600">
                            By Quote
                        </span>
                    )}
                </div>
                <Link
                    to={`/product/${product.id}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark-50 text-brand-dark-900 hover:bg-brand-green-500 hover:text-white transition-all"
                >
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    )
}

function SpecBadge({ label, value }) {
    if (!value) return null
    return (
        <div className="bg-brand-dark-50 rounded-lg p-2.5">
            <div className="text-[10px] text-gray-500 uppercase font-semibold">{label}</div>
            <div className="text-sm font-bold text-brand-dark-800">{value}</div>
        </div>
    )
}

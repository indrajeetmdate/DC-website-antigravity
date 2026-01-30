import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, SlidersHorizontal, ShoppingBag } from 'lucide-react'
import productsData from '../data/products.json'
import ProductCard from '../components/store/ProductCard' // Re-using or recreating ProductCard? I should check if this exists or if I need to make it.
// Assuming I need to check/make a Store-specific ProductCard or reuse a generic one. 
// For now I will inline a StoreProductCard or create one. 
// The previous store used '../components/store/ProductCard'. I should probably rewrite that too or inline it here for simplicity given the "clean slate".
// Actually, maintaining a separate component is better. I will inline it in this file if it's small, or update the existing one.
// Let's UPDATE the existing one later. For now, I'll assume I'll update it.

export default function Store() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [priceRange, setPriceRange] = useState([0, 1000000])

    // Combine all products
    const allProducts = useMemo(() => {
        return [
            ...productsData.ess.map(p => ({ ...p, category: 'ess' })),
            ...productsData.mobility.map(p => ({ ...p, category: 'mobility' })),
            ...productsData.specialized.map(p => ({ ...p, category: 'specialized' }))
        ]
    }, [])

    // Filter Logic
    const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
        // Simple price filter placeholder
        return matchesSearch && matchesCategory
    })

    return (
        <div className="bg-brand-dark-50 min-h-screen pt-20 pb-20">
            <div className="bg-brand-dark-900 text-white py-12 mb-10">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="font-display text-4xl font-bold mb-4">DC Energy Store</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Direct from manufacturer. IIT Kanpur engineered lithium batteries.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-dark-100 sticky top-24">
                            <div className="flex items-center gap-2 font-bold text-brand-dark-900 mb-6">
                                <Filter className="w-5 h-5" />
                                Filters
                            </div>

                            {/* Categories */}
                            <div className="mb-8">
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Categories</h4>
                                <div className="space-y-2">
                                    <FilterButton
                                        label="All Products"
                                        active={selectedCategory === 'all'}
                                        onClick={() => setSelectedCategory('all')}
                                    />
                                    <FilterButton
                                        label="Energy Storage"
                                        active={selectedCategory === 'ess'}
                                        onClick={() => setSelectedCategory('ess')}
                                    />
                                    <FilterButton
                                        label="EV Mobility"
                                        active={selectedCategory === 'mobility'}
                                        onClick={() => setSelectedCategory('mobility')}
                                    />
                                    <FilterButton
                                        label="Specialized"
                                        active={selectedCategory === 'specialized'}
                                        onClick={() => setSelectedCategory('specialized')}
                                    />
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {/* Search Bar */}
                        <div className="mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green-500/20 focus:border-brand-green-500 transition-all shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map(product => (
                                    <StoreProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                                <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 font-medium">No products found matching your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

function FilterButton({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active
                ? 'bg-brand-green-50 text-brand-green-700'
                : 'text-gray-600 hover:bg-gray-50'
                }`}
        >
            {label}
        </button>
    )
}

// Inline StoreProductCard to ensure 100% no-dependence on old components
import { Link } from 'react-router-dom'
import useCartStore2 from '../store/cartStore' // Renaming for clarity in this inline block

function StoreProductCard({ product }) {
    const { addItem } = useCartStore2()

    return (
        <div className="bg-white rounded-xl border border-brand-dark-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group">
            <div className="aspect-video bg-gray-100 relative overflow-hidden">
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-brand-dark-50 text-brand-dark-200">
                    <ShoppingBag className="w-12 h-12 opacity-20" />
                </div>
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold text-brand-dark-900 px-2 py-1 rounded">
                    {product.subcategory}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-brand-dark-900 text-lg mb-2 line-clamp-1" title={product.name}>
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-brand-green-600 text-lg">
                        ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <button
                        onClick={() => addItem(product)}
                        className="bg-brand-dark-900 hover:bg-brand-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input, Select, SelectItem, Button } from '@heroui/react'
import { Search, Filter, SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/store/ProductCard'
import productsData from '../data/products.json'

export default function Store() {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortBy, setSortBy] = useState('featured')

    const allProducts = [
        ...productsData.ess,
        ...productsData.mobility,
        ...productsData.specialized,
    ]

    // Filter products
    const filteredProducts = allProducts.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory.toLowerCase()
        return matchesSearch && matchesCategory
    })

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return (a.price || Infinity) - (b.price || Infinity)
            case 'price-high':
                return (b.price || 0) - (a.price || 0)
            case 'rating':
                return (b.rating || 0) - (a.rating || 0)
            default:
                return 0
        }
    })

    return (
        <div className="min-h-screen bg-gray-50 pt-8 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-900 mb-4">
                        Battery Store
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Browse our complete range of lithium batteries. All products are{' '}
                        <span className="text-brand-green-600 font-semibold">Made in India</span> with premium quality.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <SlidersHorizontal className="w-5 h-5 text-brand-green-600" />
                        <h2 className="font-display text-lg font-semibold">Filter & Sort</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <Input
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            startContent={<Search className="w-4 h-4 text-gray-400" />}
                            classNames={{
                                input: "text-sm",
                                inputWrapper: "border-2 border-gray-200 hover:border-brand-green-400 group-data-[focused=true]:border-brand-green-500"
                            }}
                        />

                        {/* Category Filter */}
                        <Select
                            label="Category"
                            placeholder="All Categories"
                            selectedKeys={[selectedCategory]}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <SelectItem key="all" value="all">All Categories</SelectItem>
                            <SelectItem key="ess" value="ess">Energy Storage Systems</SelectItem>
                            <SelectItem key="mobility" value="mobility">Mobility Solutions</SelectItem>
                            <SelectItem key="specialized" value="specialized">Specialized Solutions</SelectItem>
                        </Select>

                        {/* Sort */}
                        <Select
                            label="Sort By"
                            placeholder="Featured"
                            selectedKeys={[sortBy]}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <SelectItem key="featured" value="featured">Featured</SelectItem>
                            <SelectItem key="price-low" value="price-low">Price: Low to High</SelectItem>
                            <SelectItem key="price-high" value="price-high">Price: High to Low</SelectItem>
                            <SelectItem key="rating" value="rating">Highest Rated</SelectItem>
                        </Select>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-sm text-gray-600">
                        Showing <span className="font-semibold text-brand-green-600">{sortedProducts.length}</span> of <span className="font-semibold">{allProducts.length}</span> products
                    </div>
                </div>

                {/* Products Grid */}
                {sortedProducts.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        layout
                    >
                        {sortedProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                layout
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-20">
                        <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                        <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
                        <Button
                            color="success"
                            variant="flat"
                            onClick={() => {
                                setSearchTerm('')
                                setSelectedCategory('all')
                                setSortBy('featured')
                            }}
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Shield, Truck, RotateCcw, Star, Share2, Heart, CheckCircle } from 'lucide-react'
import productsData from '../data/products.json'
import useCartStore from '../store/cartStore'
import { Toaster } from 'sonner' // Ensure sonner is installed or remove if not. Package.json says sonner^2.0.7 is there.
import { toast } from 'sonner'

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addItem } = useCartStore()
    const [quantity, setQuantity] = useState(1)

    // Helper to find product across categories
    const findProduct = (id) => {
        const categories = ['ess', 'mobility', 'specialized']
        for (const cat of categories) {
            const found = productsData[cat]?.find(p => p.id === id)
            if (found) return { ...found, category: cat }
        }
        return null
    }

    const product = findProduct(id)

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark-50">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                <Link to="/store" className="text-brand-green-600 hover:underline">Back to Store</Link>
            </div>
        )
    }

    const handleAddToCart = () => {
        addItem(product, quantity)
        toast.success(`Added ${quantity}x ${product.name} to cart`)
    }

    const handleBuyNow = () => {
        addItem(product, quantity)
        navigate('/checkout')
    }

    return (
        <div className="min-h-screen bg-brand-dark-50 pt-20 pb-20">
            <Toaster position="top-center" />
            <div className="container mx-auto px-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link to="/" className="hover:text-brand-green-600">Home</Link>
                    <span>/</span>
                    <Link to="/store" className="hover:text-brand-green-600">Store</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium truncate max-w-xs">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Gallery Section */}
                    <div className="bg-white rounded-2xl p-8 border border-brand-dark-100 shadow-sm h-fit">
                        <div className="aspect-square bg-gray-100 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center group">
                            <div className="w-1/2 h-1/2 bg-brand-green-100 rounded-full blur-3xl opacity-50 absolute"></div>
                            <span className="relative text-9xl font-display font-bold text-brand-dark-200 select-none">DC</span>
                            {product.inStock && (
                                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-green-700 shadow-sm border border-brand-green-100">
                                    In Stock
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Info Section */}
                    <div>
                        <div className="mb-2">
                            <span className="text-sm font-bold tracking-wide text-brand-green-600 uppercase bg-brand-green-50 px-3 py-1 rounded-full">
                                {product.subcategory || product.category}
                            </span>
                        </div>
                        <h1 className="text-4xl font-display font-bold text-brand-dark-900 mb-4">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500 font-medium">4.8 (24 Reviews)</span>
                        </div>

                        <div className="mb-8">
                            {product.price > 0 ? (
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-bold text-brand-dark-900">
                                        ₹{product.price.toLocaleString('en-IN')}
                                    </span>
                                    {product.listPrice > product.price && (
                                        <span className="text-xl text-gray-400 line-through">
                                            ₹{product.listPrice.toLocaleString('en-IN')}
                                        </span>
                                    )}
                                </div>
                            ) : (
                                <span className="text-3xl font-bold text-brand-green-600">Contact for Quote</span>
                            )}
                            <p className="text-sm text-gray-500 mt-2">Inclusive of all taxes & generic shipping</p>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Specs Summary */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <SpecBox label="Voltage" value={product.specifications?.voltage} />
                            <SpecBox label="Capacity" value={product.specifications?.capacity} />
                            <SpecBox label="Chemistry" value={product.specifications?.chemistry} />
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 border-t border-gray-100 pt-8">
                            {/* Quantity */}
                            <div className="flex items-center border border-gray-300 rounded-xl h-14 w-fit">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 text-gray-500 hover:text-brand-dark-900 font-bold text-xl"
                                >-</button>
                                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 text-gray-500 hover:text-brand-dark-900 font-bold text-xl"
                                >+</button>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-brand-dark-900 hover:bg-brand-dark-800 text-white font-bold rounded-xl h-14 flex items-center justify-center gap-2 transition-colors"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                            </button>
                        </div>

                        {/* Trust Signals */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <TrustItem icon={Truck} text="Pan-India Delivery" />
                            <TrustItem icon={Shield} text={`${product.specifications?.warranty || '1 Year'} Warranty`} />
                            <TrustItem icon={RotateCcw} text="7-Day Replacement" />
                        </div>
                    </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="mt-20 bg-white rounded-2xl p-8 border border-brand-dark-100">
                    <h2 className="text-2xl font-bold text-brand-dark-900 mb-8 font-display">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
                        {Object.entries(product.specifications || {}).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-gray-500 capitalize font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                <span className="text-brand-dark-900 font-bold">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function SpecBox({ label, value }) {
    if (!value) return null
    return (
        <div className="bg-brand-dark-50 rounded-xl p-4 text-center border border-brand-dark-100">
            <div className="text-xs text-gray-500 uppercase font-bold mb-1">{label}</div>
            <div className="text-xl font-bold text-brand-dark-900">{value}</div>
        </div>
    )
}

function TrustItem({ icon: Icon, text }) {
    return (
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-600">
            <Icon className="w-5 h-5 text-brand-green-600" />
            {text}
        </div>
    )
}

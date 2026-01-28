import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button, Chip, Divider } from '@heroui/react'
import {
    ShoppingCart,
    Heart,
    Share2,
    ChevronLeft,
    Check,
    Download,
    Star,
    Truck,
    Shield,
    RotateCcw
} from 'lucide-react'
import ProductCard from '../components/store/ProductCard'
import productsData from '../data/products.json'
import useCartStore from '../store/cartStore'
import { toast } from 'sonner'

export default function ProductDetail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addItem, openCart } = useCartStore()
    const [quantity, setQuantity] = useState(1)

    // Find product
    const allProducts = [
        ...productsData.ess,
        ...productsData.mobility,
        ...productsData.specialized,
    ]
    const product = allProducts.find((p) => p.id === id)

    // Related products (same category)
    const relatedProducts = allProducts
        .filter((p) => p.category === product?.category && p.id !== product?.id)
        .slice(0, 4)

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Link to="/store">
                        <Button color="success">Back to Store</Button>
                    </Link>
                </div>
            </div>
        )
    }

    const handleAddToCart = () => {
        addItem(product, quantity)
        toast.success(`${quantity}x ${product.name} added to cart!`)
    }

    const handleBuyNow = () => {
        addItem(product, quantity)
        navigate('/checkout')
    }

    const benefits = [
        { icon: Truck, text: 'Free shipping on orders above ₹1 lakh' },
        { icon: Shield, text: `${product?.specifications?.warranty || 'Standard'} warranty included` },
        { icon: RotateCcw, text: '7-day return policy' },
    ]

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                    <Link to="/" className="hover:text-brand-green-600">Home</Link>
                    <span>/</span>
                    <Link to="/store" className="hover:text-brand-green-600">Store</Link>
                    <span>/</span>
                    <span className="text-brand-dark-900 font-semibold">{product.name}</span>
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl shadow-xl p-8"
                    >
                        <div className="relative aspect-square bg-gradient-to-br from-brand-green-100 to-brand-green-50 rounded-2xl flex items-center justify-center">
                            <div className="w-64 h-64 bg-gradient-to-br from-brand-green-500 to-brand-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                                <div className="text-center text-white">
                                    <div className="font-display text-7xl font-bold mb-2">{product?.voltage || ''}V</div>
                                    <div className="text-2xl font-semibold">{product?.specifications?.capacity || ''}</div>
                                </div>
                            </div>

                            {product.inStock && (
                                <Chip
                                    size="lg"
                                    color="success"
                                    variant="flat"
                                    className="absolute top-4 right-4"
                                >
                                    In Stock
                                </Chip>
                            )}
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Chip size="sm" color="success" variant="flat" className="mb-3">
                            {product.subcategory}
                        </Chip>

                        <h1 className="font-display text-4xl font-bold text-brand-dark-900 mb-4">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        {product.rating && (
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-brand-dark-900 font-semibold">{product.rating}</span>
                                <span className="text-gray-500">(128 reviews)</span>
                            </div>
                        )}

                        {/* Price */}
                        <div className="mb-6">
                            {product.price > 0 ? (
                                <>
                                    {product.listPrice > product.price && (
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl text-gray-400 line-through">
                                                ₹{product.listPrice.toLocaleString('en-IN')}
                                            </span>
                                            <Chip size="sm" color="danger" variant="flat">
                                                Save {Math.round(((product.listPrice - product.price) / product.listPrice) * 100)}%
                                            </Chip>
                                        </div>
                                    )}
                                    <div className="text-5xl font-bold text-brand-green-600">
                                        ₹{product.price.toLocaleString('en-IN')}
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>
                                </>
                            ) : (
                                <div className="text-3xl font-bold text-brand-green-600">
                                    Contact for Custom Quote
                                </div>
                            )}
                        </div>

                        <Divider className="my-6" />

                        {/* Description */}
                        <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                        {/* Benefits */}
                        <div className="space-y-3 mb-6 bg-green-50 p-4 rounded-lg">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                return (
                                    <div key={index} className="flex items-center gap-3">
                                        <Icon className="w-5 h-5 text-brand-green-600 flex-shrink-0" />
                                        <span className="text-sm text-gray-700">{benefit.text}</span>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Quantity & Actions */}
                        {product.price > 0 && product.inStock && (
                            <div className="flex gap-4 mb-6">
                                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        -
                                    </button>
                                    <span className="px-6 py-2 font-semibold border-x">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>

                                <Button
                                    color="success"
                                    variant="flat"
                                    size="lg"
                                    className="flex-1 font-semibold"
                                    startContent={<ShoppingCart className="w-5 h-5" />}
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </Button>

                                <Button
                                    color="success"
                                    size="lg"
                                    className="flex-1 font-semibold"
                                    onClick={handleBuyNow}
                                >
                                    Buy Now
                                </Button>
                            </div>
                        )}

                        {/* Share & Wishlist */}
                        <div className="flex gap-3">
                            <Button variant="bordered" size="sm" startContent={<Heart className="w-4 h-4" />}>
                                Add to Wishlist
                            </Button>
                            <Button variant="bordered" size="sm" startContent={<Share2 className="w-4 h-4" />}>
                                Share
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Specifications */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
                    <h2 className="font-display text-2xl font-bold mb-6">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product?.specifications && Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="border-l-4 border-brand-green-500 pl-4">
                                <dt className="text-sm text-gray-500 capitalize mb-1">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </dt>
                                <dd className="text-lg font-semibold text-brand-dark-900">{value}</dd>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                {product.features && (
                    <div className="bg-gradient-to-br from-brand-green-50 to-green-50 rounded-2xl p-8 mb-16">
                        <h2 className="font-display text-2xl font-bold mb-6">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {product.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-brand-green-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Applications */}
                {product.applications && (
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
                        <h2 className="font-display text-2xl font-bold mb-6">Applications</h2>
                        <div className="flex flex-wrap gap-3">
                            {product.applications.map((app, index) => (
                                <Chip key={index} size="lg" color="success" variant="flat">
                                    {app}
                                </Chip>
                            ))}
                        </div>
                    </div>
                )}

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="font-display text-3xl font-bold mb-8 text-center">Related Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <ProductCard key={relatedProduct.id} product={relatedProduct} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

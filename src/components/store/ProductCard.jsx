import { motion } from 'framer-motion'
import { Card, CardBody, CardFooter, Button, Chip } from '@heroui/react'
import { ShoppingCart, ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import useCartStore from '../../store/cartStore'
import { toast } from 'sonner'

export default function ProductCard({ product }) {
    const { addItem, openCart } = useCartStore()

    const handleAddToCart = (e) => {
        e.preventDefault()
        addItem(product, 1)
        toast.success(`${product.name} added to cart!`)
    }

    const handleBuyNow = (e) => {
        e.preventDefault()
        addItem(product, 1)
        openCart()
    }

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="h-full hover:shadow-2xl transition-shadow duration-300">
                {/* Product Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-brand-green-100 to-brand-green-50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full bg-grid-pattern"></div>
                    </div>
                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-br from-brand-green-500 to-brand-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                            <span className="text-white font-display text-4xl font-bold">
                                {product.voltage}V
                            </span>
                        </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                        {product.inStock && (
                            <Chip size="sm" color="success" variant="flat">
                                In Stock
                            </Chip>
                        )}
                        {product.listPrice > product.price && product.price > 0 && (
                            <Chip size="sm" color="danger" variant="flat">
                                {Math.round(((product.listPrice - product.price) / product.listPrice) * 100)}% OFF
                            </Chip>
                        )}
                    </div>
                </div>

                <CardBody className="p-5">
                    {/* Category */}
                    <p className="text-xs uppercase font-bold text-brand-green-600 mb-1">
                        {product.subcategory}
                    </p>

                    {/* Product Name */}
                    <h3 className="font-display text-lg font-bold text-brand-dark-900 mb-2 line-clamp-2">
                        {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-gray-50 p-2 rounded-lg text-center">
                            <p className="text-xs text-gray-500">Voltage</p>
                            <p className="text-sm font-bold">{product.specifications.voltage}</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg text-center">
                            <p className="text-xs text-gray-500">Capacity</p>
                            <p className="text-sm font-bold">{product.specifications.capacity}</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg text-center">
                            <p className="text-xs text-gray-500">Chemistry</p>
                            <p className="text-sm font-bold">{product.specifications.chemistry}</p>
                        </div>
                    </div>

                    {/* Rating */}
                    {product.rating && (
                        <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(product.rating)
                                            ? 'fill-yellow-400 text-yellow-400'
                                            : 'text-gray-300'
                                        }`}
                                />
                            ))}
                            <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                        </div>
                    )}
                </CardBody>

                <CardFooter className="flex-col gap-3 p-5 pt-0">
                    {/* Price */}
                    <div className="w-full">
                        {product.price > 0 ? (
                            <div>
                                {product.listPrice > product.price && (
                                    <p className="text-sm text-gray-400 line-through">
                                        ₹{product.listPrice.toLocaleString('en-IN')}
                                    </p>
                                )}
                                <p className="text-2xl font-bold text-brand-green-600">
                                    ₹{product.price.toLocaleString('en-IN')}
                                </p>
                            </div>
                        ) : (
                            <p className="text-lg font-semibold text-brand-green-600">
                                Contact for Quote
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 w-full">
                        {product.price > 0 && product.inStock ? (
                            <>
                                <Button
                                    color="success"
                                    variant="flat"
                                    className="flex-1"
                                    startContent={<ShoppingCart className="w-4 h-4" />}
                                    onClick={handleAddToCart}
                                >
                                    Add to Cart
                                </Button>
                                <Button
                                    color="success"
                                    className="flex-1"
                                    onClick={handleBuyNow}
                                >
                                    Buy Now
                                </Button>
                            </>
                        ) : (
                            <Link to={`/product/${product.id}`} className="w-full">
                                <Button
                                    color="success"
                                    variant="bordered"
                                    className="w-full"
                                    endContent={<ArrowRight className="w-4 h-4" />}
                                >
                                    View Details
                                </Button>
                            </Link>
                        )}
                    </div>
                </CardFooter>
            </Card>

            <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
        </motion.div>
    )
}

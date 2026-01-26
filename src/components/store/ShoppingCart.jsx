import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@heroui/react'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import useCartStore from '../../store/cartStore'
import { toast } from 'sonner'

export default function ShoppingCart() {
    const { items, isCartOpen, closeCart, updateQuantity, removeItem, getCartTotals } = useCartStore()
    const { subtotal, tax, shipping, total, itemCount } = getCartTotals()

    const handleRemoveItem = (productId, productName) => {
        removeItem(productId)
        toast.success(`${productName} removed from cart`)
    }

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                    />

                    {/* Cart Drawer */}
                    <motion.div
                        className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b">
                            <h2 className="text-2xl font-display font-bold text-brand-dark-900">
                                Shopping Cart
                                {itemCount > 0 && (
                                    <span className="ml-2 text-sm text-gray-500">({itemCount} items)</span>
                                )}
                            </h2>
                            <button
                                onClick={closeCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <ShoppingBag className="w-20 h-20 text-gray-300 mb-4" />
                                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                                    <p className="text-gray-500 mb-6">Add some products to get started!</p>
                                    <Link to="/store" onClick={closeCart}>
                                        <Button color="success" size="lg">
                                            Browse Products
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                        >
                                            {/* Product Info */}
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                                                <p className="text-xs text-gray-500 mb-2">{item.subcategory}</p>
                                                <p className="text-lg font-bold text-brand-green-600">
                                                    ₹{item.price.toLocaleString('en-IN')}
                                                </p>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex flex-col items-end justify-between">
                                                <button
                                                    onClick={() => handleRemoveItem(item.id, item.name)}
                                                    className="text-red-500 hover:text-red-700 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>

                                                <div className="flex items-center gap-2 border rounded-lg">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 hover:bg-gray-100 transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 hover:bg-gray-100 transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>

                                                <p className="text-sm font-semibold text-gray-700">
                                                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer - Cart Summary */}
                        {items.length > 0 && (
                            <div className="border-t p-6 bg-gray-50">
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">GST (18%)</span>
                                        <span className="font-semibold">₹{tax.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Shipping</span>
                                        <span className="font-semibold">
                                            {shipping === 0 ? (
                                                <span className="text-brand-green-600">FREE</span>
                                            ) : (
                                                `₹${shipping.toLocaleString('en-IN')}`
                                            )}
                                        </span>
                                    </div>
                                    <div className="border-t pt-2 flex justify-between">
                                        <span className="font-bold text-lg">Total</span>
                                        <span className="font-bold text-lg text-brand-green-600">
                                            ₹{total.toLocaleString('en-IN')}
                                        </span>
                                    </div>
                                </div>

                                <Link to="/checkout" onClick={closeCart}>
                                    <Button color="success" size="lg" className="w-full font-semibold">
                                        Proceed to Checkout
                                    </Button>
                                </Link>

                                <button
                                    onClick={closeCart}
                                    className="w-full mt-2 text-sm text-gray-600 hover:text-brand-green-600 transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

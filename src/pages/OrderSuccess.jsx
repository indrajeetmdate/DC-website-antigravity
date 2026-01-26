import { motion } from 'framer-motion'
import { Button } from '@heroui/react'
import { CheckCircle, Package, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
import { useWindowSize } from '@uidotdev/usehooks'

export default function OrderSuccess() {
    const { width, height } = useWindowSize()
    const orderNumber = `DC${Date.now()}`

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-green-50 to-green-50 flex items-center justify-center py-12">
            <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={500}
                gravity={0.2}
            />

            <motion.div
                className="max-w-2xl w-full mx-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
                    {/* Success Icon */}
                    <motion.div
                        className="flex justify-center mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                        <div className="w-24 h-24 bg-gradient-to-br from-brand-green-400 to-brand-green-600 rounded-full flex items-center justify-center shadow-xl">
                            <CheckCircle className="w-14 h-14 text-white" />
                        </div>
                    </motion.div>

                    {/* Success Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h1 className="font-display text-4xl font-bold text-brand-dark-900 mb-3">
                            Order Placed Successfully!
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Thank you for your purchase. Your order has been confirmed.
                        </p>
                    </motion.div>

                    {/* Order Number */}
                    <motion.div
                        className="bg-gradient-to-r from-brand-green-50 to-green-50 border-2 border-brand-green-200 rounded-2xl p-6 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="text-sm text-gray-600 mb-2">Order Number</p>
                        <p className="text-3xl font-display font-bold text-brand-green-600">{orderNumber}</p>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="p-4 bg-gray-50 rounded-xl">
                            <Package className="w-8 h-8 text-brand-green-600 mx-auto mb-2" />
                            <p className="text-sm font-semibold text-brand-dark-900 mb-1">Estimated Delivery</p>
                            <p className="text-xs text-gray-600">
                                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
                                    weekday: 'short',
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric',
                                })}
                            </p>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl">
                            <Mail className="w-8 h-8 text-brand-green-600 mx-auto mb-2" />
                            <p className="text-sm font-semibold text-brand-dark-900 mb-1">Confirmation Email</p>
                            <p className="text-xs text-gray-600">Sent to your email address</p>
                        </div>
                    </motion.div>

                    {/* What's Next */}
                    <motion.div
                        className="text-left mb-8 p-6 bg-blue-50 border border-blue-200 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <h3 className="font-semibold text-brand-dark-900 mb-3">What happens next?</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-brand-green-600 mt-0.5 flex-shrink-0" />
                                <span>We'll send you a confirmation email with your order details</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-brand-green-600 mt-0.5 flex-shrink-0" />
                                <span>You'll receive shipping updates as your order is processed</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-brand-green-600 mt-0.5 flex-shrink-0" />
                                <span>Track your order status anytime with your order number</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <Link to="/store">
                            <Button
                                color="success"
                                size="lg"
                                className="font-semibold"
                                endContent={<ArrowRight className="w-5 h-5" />}
                            >
                                Continue Shopping
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button
                                variant="bordered"
                                size="lg"
                                className="font-semibold"
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Support Note */}
                    <p className="text-xs text-gray-500 mt-8">
                        Need help? Contact us at <span className="text-brand-green-600 font-semibold">support@dcenergy.in</span>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button, Input, Checkbox } from '@heroui/react'
import { ChevronLeft, ChevronRight, Check, CreditCard, Truck, FileText, ShoppingBag } from 'lucide-react'
import { useForm } from 'react-hook-form'
import useCartStore from '../store/cartStore'
import { toast } from 'sonner'

export default function Checkout() {
    const navigate = useNavigate()
    const { items, getCartTotals, clearCart } = useCartStore()
    const { subtotal, tax, shipping, total } = getCartTotals()
    const [currentStep, setCurrentStep] = useState(1)
    const [sameAsBilling, setSameAsBilling] = useState(true)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const steps = [
        { number: 1, title: 'Customer Info', icon: FileText },
        { number: 2, title: 'Shipping', icon: Truck },
        { number: 3, title: 'Billing', icon: CreditCard },
        { number: 4, title: 'Review', icon: ShoppingBag },
    ]

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
                    <p className="text-gray-600 mb-6">Add some products before checking out</p>
                    <Button color="success" onClick={() => navigate('/store')}>
                        Browse Products
                    </Button>
                </div>
            </div>
        )
    }

    const onSubmit = (data) => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1)
        } else {
            // Simulate order placement
            toast.success('Order placed successfully!')
            clearCart()
            navigate('/order-success')
        }
    }

    const formData = watch()

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="font-display text-4xl font-bold text-brand-dark-900 mb-2">Checkout</h1>
                    <p className="text-gray-600">Complete your purchase in a few simple steps</p>
                </div>

                {/* Step Indicator */}
                <div className="mb-12">
                    <div className="flex justify-between items-center relative">
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />
                        <div
                            className="absolute top-1/2 left-0 h-1 bg-brand-green-500 -translate-y-1/2 z-0 transition-all duration-300"
                            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        />

                        {/* Steps */}
                        {steps.map((step) => {
                            const Icon = step.icon
                            const isActive = currentStep === step.number
                            const isComplete = currentStep > step.number
                            return (
                                <div key={step.number} className="flex flex-col items-center relative z-10">
                                    <div
                                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all ${isComplete
                                                ? 'bg-brand-green-500 text-white'
                                                : isActive
                                                    ? 'bg-brand-green-500 text-white ring-4 ring-brand-green-200'
                                                    : 'bg-white border-2 border-gray-300 text-gray-400'
                                            }`}
                                    >
                                        {isComplete ? <Check className="w-8 h-8" /> : <Icon className="w-8 h-8" />}
                                    </div>
                                    <span
                                        className={`text-sm font-semibold hidden sm:block ${isActive || isComplete ? 'text-brand-green-600' : 'text-gray-500'
                                            }`}
                                    >
                                        {step.title}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
                            {/* Step 1: Customer Info */}
                            {currentStep === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6">Customer Information</h2>
                                    <div className="space-y-4">
                                        <Input
                                            label="Full Name"
                                            placeholder="Enter your full name"
                                            {...register('fullName', { required: 'Full name is required' })}
                                            isInvalid={!!errors.fullName}
                                            errorMessage={errors.fullName?.message}
                                        />
                                        <Input
                                            label="Email Address"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            isInvalid={!!errors.email}
                                            errorMessage={errors.email?.message}
                                        />
                                        <Input
                                            label="Phone Number"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            {...register('phone', {
                                                required: 'Phone number is required',
                                                pattern: {
                                                    value: /^[0-9+\s-()]+$/,
                                                    message: 'Invalid phone number',
                                                },
                                            })}
                                            isInvalid={!!errors.phone}
                                            errorMessage={errors.phone?.message}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* Step  2: Shipping */}
                            {currentStep === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
                                    <div className="space-y-4">
                                        <Input
                                            label="Address Line 1"
                                            placeholder="Street address, P.O. box"
                                            {...register('shippingAddress1', { required: 'Address is required' })}
                                            isInvalid={!!errors.shippingAddress1}
                                            errorMessage={errors.shippingAddress1?.message}
                                        />
                                        <Input
                                            label="Address Line 2"
                                            placeholder="Apartment, suite, unit, building, floor, etc."
                                            {...register('shippingAddress2')}
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                label="City"
                                                placeholder="City"
                                                {...register('shippingCity', { required: 'City is required' })}
                                                isInvalid={!!errors.shippingCity}
                                                errorMessage={errors.shippingCity?.message}
                                            />
                                            <Input
                                                label="State"
                                                placeholder="State"
                                                {...register('shippingState', { required: 'State is required' })}
                                                isInvalid={!!errors.shippingState}
                                                errorMessage={errors.shippingState?.message}
                                            />
                                        </div>
                                        <Input
                                            label="PIN Code"
                                            placeholder="PIN Code"
                                            {...register('shippingPinCode', {
                                                required: 'PIN code is required',
                                                pattern: {
                                                    value: /^[0-9]{6}$/,
                                                    message: 'Invalid PIN code',
                                                },
                                            })}
                                            isInvalid={!!errors.shippingPinCode}
                                            errorMessage={errors.shippingPinCode?.message}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Billing */}
                            {currentStep === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6">Billing Address</h2>
                                    <Checkbox
                                        isSelected={sameAsBilling}
                                        onValueChange={setSameAsBilling}
                                        className="mb-4"
                                    >
                                        Same as shipping address
                                    </Checkbox>
                                    {!sameAsBilling && (
                                        <div className="space-y-4">
                                            <Input
                                                label="Address Line 1"
                                                placeholder="Street address, P.O. box"
                                                {...register('billingAddress1', { required: !sameAsBilling })}
                                            />
                                            <Input
                                                label="Address Line 2"
                                                placeholder="Apartment, suite, unit, building, floor, etc."
                                                {...register('billingAddress2')}
                                            />
                                            <div className="grid grid-cols-2 gap-4">
                                                <Input label="City" {...register('billingCity', { required: !sameAsBilling })} />
                                                <Input label="State" {...register('billingState', { required: !sameAsBilling })} />
                                            </div>
                                            <Input
                                                label="PIN Code"
                                                {...register('billingPinCode', {
                                                    required: !sameAsBilling,
                                                    pattern: /^[0-9]{6}$/,
                                                })}
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            )}

                            {/* Step 4: Review */}
                            {currentStep === 4 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>

                                    {/* Customer Info Review */}
                                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                        <h3 className="font-semibold mb-2">Customer Information</h3>
                                        <p className="text-sm text-gray-700">{formData.fullName}</p>
                                        <p className="text-sm text-gray-700">{formData.email}</p>
                                        <p className="text-sm text-gray-700">{formData.phone}</p>
                                    </div>

                                    {/* Shipping Address Review */}
                                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                        <h3 className="font-semibold mb-2">Shipping Address</h3>
                                        <p className="text-sm text-gray-700">{formData.shippingAddress1}</p>
                                        {formData.shippingAddress2 && <p className="text-sm text-gray-700">{formData.shippingAddress2}</p>}
                                        <p className="text-sm text-gray-700">
                                            {formData.shippingCity}, {formData.shippingState} - {formData.shippingPinCode}
                                        </p>
                                    </div>

                                    {/* Order Items */}
                                    <div className="mb-6">
                                        <h3 className="font-semibold mb-3">Order Items</h3>
                                        <div className="space-y-2">
                                            {items.map((item) => (
                                                <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                    <div>
                                                        <p className="font-semibold text-sm">{item.name}</p>
                                                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                                    </div>
                                                    <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Payment Note */}
                                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                        <p className="text-sm text-blue-800">
                                            <strong>Note:</strong> You will be redirected to Razorpay payment gateway to complete your purchase.
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t">
                                {currentStep > 1 && (
                                    <Button
                                        variant="bordered"
                                        startContent={<ChevronLeft className="w-5 h-5" />}
                                        onClick={() => setCurrentStep(currentStep - 1)}
                                    >
                                        Back
                                    </Button>
                                )}
                                <Button
                                    color="success"
                                    type="submit"
                                    className="ml-auto font-semibold"
                                    endContent={currentStep < 4 ? <ChevronRight className="w-5 h-5" /> : <Check className="w-5 h-5" />}
                                >
                                    {currentStep < 4 ? 'Continue' : 'Place Order'}
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                            <h3 className="font-display text-xl font-bold mb-4">Order Summary</h3>

                            <div className="space-y-3 mb-6">
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
                                <div className="border-t pt-3 flex justify-between">
                                    <span className="font-bold text-lg">Total</span>
                                    <span className="font-bold text-lg text-brand-green-600">
                                        ₹{total.toLocaleString('en-IN')}
                                    </span>
                                </div>
                            </div>

                            <div className="text-xs text-gray-500 text-center">
                                Secure checkout powered by Razorpay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

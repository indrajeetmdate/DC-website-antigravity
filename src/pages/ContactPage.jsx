import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button, Input, Textarea } from '@heroui/react'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-8 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark-900 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get in touch with our engineering team for custom solutions, bulk orders, or technical support.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-brand-dark-900 mb-6 font-display">
                                Get in Touch
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-green-100 p-3 rounded-xl">
                                        <MapPin className="w-6 h-6 text-brand-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Headquarters</h4>
                                        <p className="text-gray-600 mt-1">
                                            Plot No. 123, DC Energy Tech Park,<br />
                                            MIDC Bhosari, Pune - 411026,<br />
                                            Maharashtra, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-green-100 p-3 rounded-xl">
                                        <Mail className="w-6 h-6 text-brand-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email Us</h4>
                                        <p className="text-gray-600 mt-1">info@dcenergy.in</p>
                                        <p className="text-gray-600">sales@dcenergy.in</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-green-100 p-3 rounded-xl">
                                        <Phone className="w-6 h-6 text-brand-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Call Us</h4>
                                        <p className="text-gray-600 mt-1">+91 98765 43210</p>
                                        <p className="text-gray-600">Mon-Sat, 9am - 7pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <h3 className="text-2xl font-bold text-brand-dark-900 mb-6 font-display">
                            Send us a Message
                        </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    label="First Name"
                                    placeholder="John"
                                    variant="bordered"
                                />
                                <Input
                                    label="Last Name"
                                    placeholder="Doe"
                                    variant="bordered"
                                />
                            </div>
                            <Input
                                label="Email"
                                placeholder="john@company.com"
                                type="email"
                                variant="bordered"
                            />
                            <Input
                                label="Phone"
                                placeholder="+91 99999 99999"
                                variant="bordered"
                            />
                            <Textarea
                                label="Message"
                                placeholder="Tell us about your requirements..."
                                minRows={4}
                                variant="bordered"
                            />
                            <Button
                                color="success"
                                size="lg"
                                className="w-full font-semibold text-white"
                            >
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

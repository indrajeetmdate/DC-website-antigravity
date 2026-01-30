import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pt-20">
            {/* Header */}
            <div className="bg-brand-dark-900 py-16 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a question about our battery solutions? Get in touch with our expert team.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-brand-dark-900 mb-6">
                            Send us a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="First Name" placeholder="John" />
                                <InputField label="Last Name" placeholder="Doe" />
                            </div>
                            <InputField label="Email" type="email" placeholder="john@example.com" />
                            <InputField label="Subject" placeholder="Inquiry about..." />
                            <div>
                                <label className="block text-sm font-semibold text-brand-dark-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20 outline-none transition-all placeholder:text-gray-400 resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="button"
                                className="w-full bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-green-500/20 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-brand-dark-900 mb-8">
                            Get in Touch
                        </h2>
                        <div className="space-y-8">
                            <ContactCard
                                icon={MapPin}
                                title="Visit Us"
                                content={
                                    <>
                                        Plot No. 123, DC Energy Tech Park,<br />
                                        MIDC Bhosari, Pune - 411026,<br />
                                        Maharashtra, India
                                    </>
                                }
                            />
                            <ContactCard
                                icon={Phone}
                                title="Call Us"
                                content="+91 98765 43210"
                            />
                            <ContactCard
                                icon={Mail}
                                title="Email Us"
                                content="info@dcenergy.in"
                            />
                            <ContactCard
                                icon={Clock}
                                title="Business Hours"
                                content="Mon - Sat: 9:00 AM - 6:00 PM"
                            />
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 h-64 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center text-gray-400">
                            <MapPin className="w-8 h-8 opacity-20" />
                            <span className="ml-2 font-medium">Google Map Embed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function InputField({ label, type = "text", placeholder }) {
    return (
        <div>
            <label className="block text-sm font-semibold text-brand-dark-700 mb-2">{label}</label>
            <input
                type={type}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-green-500 focus:ring-2 focus:ring-brand-green-500/20 outline-none transition-all placeholder:text-gray-400"
                placeholder={placeholder}
            />
        </div>
    )
}

function ContactCard({ icon: Icon, title, content }) {
    return (
        <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-600 flex-shrink-0">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h4 className="font-bold text-brand-dark-900 mb-1">{title}</h4>
                <div className="text-gray-600 leading-relaxed font-medium">
                    {content}
                </div>
            </div>
        </div>
    )
}

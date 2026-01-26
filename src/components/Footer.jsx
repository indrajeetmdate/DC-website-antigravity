import { Link } from 'react-router-dom'
import { Battery, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-brand-dark-900 text-white border-t border-brand-green-500/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Battery className="h-8 w-8 text-brand-green-500" />
                            <div>
                                <div className="font-display text-lg font-bold">DC ENERGY</div>
                                <div className="text-xs text-brand-green-400">Datlion Cnergy Pvt. Ltd.</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400">
                            Engineering excellence in lithium battery technology. Truly Made in India.
                        </p>
                        <div className="mt-4 flex items-center space-x-2">
                            <img src="/logo.png" alt="Indian Flag" className="h-4 brightness-0 invert opacity-50" />
                            <span className="text-xs text-brand-green-400 font-semibold">Proudly Made in India</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="text-gray-400 hover:text-brand-green-400 transition-colors">Home</Link></li>
                            <li><Link to="/store" className="text-gray-400 hover:text-brand-green-400 transition-colors">Store</Link></li>
                            <li><a href="/#products" className="text-gray-400 hover:text-brand-green-400 transition-colors">Products</a></li>
                            <li><a href="/#about" className="text-gray-400 hover:text-brand-green-400 transition-colors">About Us</a></li>
                            <li><a href="/#team" className="text-gray-400 hover:text-brand-green-400 transition-colors">Our Team</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Energy Storage Systems</li>
                            <li>Mobility Solutions</li>
                            <li>2W/3W EV Batteries</li>
                            <li>Forklift Batteries</li>
                            <li>Solar Lighting</li>
                            <li>Custom Solutions</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-5 w-5 text-brand-green-500 flex-shrink-0 mt-0.5" />
                                <span>Pune, Maharashtra, India</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-5 w-5 text-brand-green-500 flex-shrink-0" />
                                <span>+91 XXXX XXXXXX</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-5 w-5 text-brand-green-500 flex-shrink-0" />
                                <span>info@dcenergy.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Datlion Cnergy Pvt. Ltd. All rights reserved.</p>
                    <p className="mt-2">
                        <span className="text-brand-green-400">IIT Kanpur Scientific Foundation</span> | 35+ Years of Business Legacy
                    </p>
                </div>
            </div>
        </footer>
    )
}

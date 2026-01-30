import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-brand-dark-950 border-t border-brand-dark-800 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <img
                                src="/logo.png"
                                alt="DC Energy"
                                className="h-12 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Driving India's energy revolution with scientifically engineered lithium-ion solutions.
                            Built on IIT Kanpur excellence and 35+ years of industry legacy.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialLink icon={Linkedin} href="#" />
                            <SocialLink icon={Twitter} href="#" />
                            <SocialLink icon={Facebook} href="#" />
                            <SocialLink icon={Instagram} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/about" label="About Us" />
                            <FooterLink to="/store" label="Store" />
                            <FooterLink to="/contact" label="Contact" />
                            <FooterLink to="/#products" label="Products" />
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-display font-semibold text-lg mb-6">Solutions</h4>
                        <ul className="space-y-3">
                            <FooterLink to="/store?category=ess" label="Energy Storage Systems" />
                            <FooterLink to="/store?category=mobility" label="EV Mobility" />
                            <FooterLink to="/store?category=specialized" label="Specialized Batteries" />
                            <FooterLink to="/store" label="Custom Packs" />
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-display font-semibold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 text-brand-green-500 flex-shrink-0 mt-0.5" />
                                <span>
                                    Plot No. 123, DC Energy Tech Park,<br />
                                    MIDC Bhosari, Pune - 411026
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="w-5 h-5 text-brand-green-500 flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-5 h-5 text-brand-green-500 flex-shrink-0" />
                                <span>info@dcenergy.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-brand-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Datlion Cnergy Pvt. Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link to="#" className="hover:text-brand-green-400 transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-brand-green-400 transition-colors">Terms of Service</Link>
                        <span className="flex items-center gap-1.5 text-brand-green-500 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-500"></span>
                            Truly Made in India
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterLink({ to, label }) {
    return (
        <li>
            <Link
                to={to}
                className="text-gray-400 hover:text-brand-green-400 transition-colors text-sm"
            >
                {label}
            </Link>
        </li>
    )
}

function SocialLink({ icon: Icon, href }) {
    return (
        <a
            href={href}
            className="w-8 h-8 rounded-full bg-brand-dark-800 flex items-center justify-center text-gray-400 hover:bg-brand-green-500 hover:text-white transition-all duration-300"
        >
            <Icon className="w-4 h-4" />
        </a>
    )
}

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@heroui/react'
import { Menu, X, ShoppingCart } from 'lucide-react'
import useCartStore from '../store/cartStore'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const { getCartTotals, openCart } = useCartStore()
    const { itemCount } = getCartTotals()

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/#products' },
        { name: 'Store', path: '/store' },
        { name: 'About', path: '/#about' },
        { name: 'Contact', path: '/#contact' },
    ]

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/'
        if (path.includes('#')) return location.pathname === '/' && location.hash === path.split('#')[1]
        return location.pathname === path
    }

    return (
        <>
            {/* Top Banner */}
            <div className="bg-brand-green-500 text-white py-2 px-4 text-center text-sm font-medium">
                EXCLUSIVE DISCOUNTS ON CUSTOMIZABLE SOLUTIONS!
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-40 bg-brand-dark-900 shadow-lg border-b border-brand-green-500/20">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="/logo.png"
                                alt="DC Energy"
                                className="h-12 w-auto brightness-0 invert"
                            />
                            <div className="text-white">
                                <div className="font-display text-xl font-bold">DC ENERGY</div>
                                <div className="text-xs text-brand-green-400">Truly Made in India</div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className={`text-sm font-medium transition-colors hover:text-brand-green-400 ${isActive(link.path)
                                        ? 'text-brand-green-400'
                                        : 'text-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Cart & Mobile Menu */}
                        <div className="flex items-center gap-4">
                            {/* Cart Icon */}
                            <button
                                onClick={openCart}
                                className="relative p-2 text-white hover:text-brand-green-400 transition-colors"
                                aria-label="Shopping Cart"
                            >
                                <ShoppingCart className="w-6 h-6" />
                                {itemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-brand-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                                        {itemCount}
                                    </span>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden p-2 text-white hover:text-brand-green-400 transition-colors"
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-brand-green-500/20">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-2 text-sm font-medium transition-colors hover:text-brand-green-400 ${isActive(link.path)
                                        ? 'text-brand-green-400'
                                        : 'text-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    )}
                </nav>
            </header>
        </>
    )
}
